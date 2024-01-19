.PHONY: manager-build manager-kind-load manager-deploy starter-build starter-kind-load \
        runner-build runner-kind-load apply-test operator-install operator-delete \
        run-test delete-test

operator_src				:= k6-operator
manager_image_name 	:= k6-manager
manager_image_tag 	:= tagot
runner_image 				:= k6-runner:tag
starter_image 			:= k6-starter:tag

# MANAGER ------------
# Commands related to the compilation, loading and deploy of the k6 manager,
# which is the component orchestrating the operator in the cluster

manager-build:
	docker build ${operator_src} \
		-f Dockerfile.controller \
		-t ${manager_image_name}:${manager_image_tag} \
		--build-arg ARCH=$(shell uname -m) \
		--build-arg GO_BUILDER_IMG=golang:1.19-bullseye

manager-kind-load:
	kind load \
		docker-image ${manager_image_name}:${manager_image_tag} \
		-n tilt

manager-deploy:
	make deploy \
		-C ${operator_src} \
		IMG_NAME="${manager_image_name}" \
		IMG_TAG="${manager_image_tag}"

# STARTER ------------
# Commands related to the k6 build and load of starter which is the component
# preparing the environment for the execution of a k6 test

starter-build:
	docker build \
		-f Dockerfile.starter \
		-t ${starter_image} \
		.

starter-kind-load:
	kind load \
		docker-image ${starter_image} \
		-n tilt

# RUNNER ------------
# Commands related to the k6 runner which is the component executing the tests.

runner-build:
	docker build \
		-f Dockerfile.runner \
		--build-arg TEST=${TEST} \
		-t ${runner_image} \
		.

runner-kind-load:
	kind load \
		docker-image ${runner_image} \
		-n tilt

# OPERATOR MANAGEMENT ------------

# This command will build and install the k6 operator on the current connected
# Kind cluster. It will:
# - Build the docker image which will compile the operator code in the submodule
# - Load the image into each node of the current kind cluster
# - Install all the operator's manifest onto the cluster
operator-install: manager-build manager-kind-load \
									starter-build starter-kind-load \
									manager-deploy

# Removes the operator from the current cluster. This is just a convenience
# command linking to the original one from the operator's Makefile
operator-delete:
	make -C ${operator_src} delete

# TESTS RUNNER ------------

# Used to generate and apply a manifest with the placeholders replaced with the
# appropriate image names.
#
# Params
# - YAML: path to the k6 test manifest
#
# Example:
# make apply-test YAML=rate-limiter/basic-test.yaml
apply-test:
	sed \
		-e "s|{ STARTER_IMAGE }|${starter_image}|g" \
		-e "s|{ RUNNER_IMAGE }|${runner_image}|g" \
		${YAML} | kubectl create -f -

# Used to execute a test. This command will:
# - Build the runner image
# - Load the runner image onto the current Kind cluster
# - Update the yaml definition file with the runner and starter image
# - Apply the resulting file to the current Kind cluster
#
# Params
# - YAML: path to the k6 test manifest
# - TEST: path to the js file containing the test code
#
# Example:
# make run-test \
# 	YAML=rate-limiter/basic-test.yaml \
# 	TEST=rate-limiter/test.js
run-test: runner-build runner-kind-load apply-test

# Used to remove test artifacts from the cluster.
#
# Params:
# - YAML: path to the k6 test manifest
#
# Example:
# make delete-test YAML=rate-limiter/basic-test.yaml
delete-test:
	kubectl delete -f ${YAML}