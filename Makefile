## GLOBALS ##
K6_STARTER_IMAGE 	:= k6-starter
K6_OPERATOR_SRC		:= k6-operator

## UTILS ##
define apply_test_cr
	sed -e "s|{ RUNNER_IMAGE }|$(1)|g" $(2) | kubectl create -f -
endef

## MANAGER ##
K6_MANAGER_IMAGE 	:= k6-manager
K6_MANAGER_TAG 		:= bobo

manager-build:
	docker build \
		-f Dockerfile.controller \
		-t ${K6_MANAGER_IMAGE}:${K6_MANAGER_TAG} \
		--build-arg ARCH=${uname -m} \
		--build-arg GO_BUILDER_IMG=golang:1.19-bullseye \
		${K6_OPERATOR_SRC}

manager-kind-load:
	kind load \
		docker-image ${K6_MANAGER_IMAGE}:${K6_MANAGER_TAG} \
		-n tilt

manager-deploy:
	make -C ${K6_OPERATOR_SRC} deploy IMG_NAME="$(K6_MANAGER_IMAGE)" IMG_TAG="$(K6_MANAGER_TAG)"

# This command will build and install the k6 operator on the current connected
# Kind cluster. It does build from source into a docker image and load it into
# each node of the kind cluster. Then it does use the "deploy" command from the
# k6 operator's Makefile to add all the required manifests.
operator-install: manager-build manager-kind-load manager-deploy

# Removes the operator from the current cluster. This is just a convenience 
# command linking to the original one from the operator's makefile
operator-delete: 
	make -C ${K6_OPERATOR_SRC} delete


## RATE LIMITER TESTS ##
RATE_LIMITER_RUNNER_IMAGE	:= rate-limiter-runner
RATE_LIMITER_RUNNER_TAG		:= bobo

rate-limiter-build:
		docker build \
		-f rate-limiter/Dockerfile.runner \
		-t ${RATE_LIMITER_RUNNER_IMAGE}:${RATE_LIMITER_RUNNER_TAG} \
		.

rate-limiter-kind-load:
	kind load \
		docker-image ${RATE_LIMITER_RUNNER_IMAGE}:${RATE_LIMITER_RUNNER_TAG} \
		-n tilt

# Will build and load the image of the rate limiter runner onto the currently
# connected cluster
rate-limiter-deploy: rate-limiter-build rate-limiter-kind-load

run-test:
	$(call \
		apply_test_cr, \
		${RATE_LIMITER_RUNNER_IMAGE}:${RATE_LIMITER_RUNNER_TAG}, \
		${FILE} \
	)

delete-test:
	kubectl delete -f ${FILE}