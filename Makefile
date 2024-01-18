K6_MANAGER_IMAGE 	:= k6-manager
K6_RUNNER_IMAGE		:= k6-runner
K6_STARTER_IMAGE 	:= k6-starter
K6_OPERATOR_SRC		:= k6-operator
TAG 							:= latest

manager-build:
	docker build \
		-f ${K6_OPERATOR_SRC}/Dockerfile.controller \
		-t ${K6_MANAGER_IMAGE}:${TAG} \
		--build-arg ARCH=${uname -m} \
		--build-arg GO_BUILDER_IMG=golang:1.19-bullseye \
		${K6_OPERATOR_SRC}

manager-kind-load:
	kind load docker-image ${K6_MANAGER_IMAGE}:${TAG} -n tilt

manager-deploy:
	make -C ${K6_OPERATOR_SRC} deploy IMG_NAME="$(K6_MANAGER_IMAGE)" IMG_TAG="$(TAG)"

# This command will build and install the k6 operator on the current connected
# Kind cluster. It does build from source into a docker image and load it into
# each node of the kind cluster. Then it does use the "deploy" command from the
# k6 operator's Makefile to add all the required manifests.
# The command can be run multiple times.
operator-install: manager-build manager-kind-load manager-deploy

# Removes the operator from the current cluster. This is just a convenience 
# command linking to the original one from the operator's makefile
operator-delete: make -C ${K6_OPERATOR_SRC} delete