# K6 Operator POC

This repository hosts a Proof of Concept (POC) demonstrating the use of the K6 operator in a Kubernetes environment, integrated with Linkerd.

## The Problem
When executing tests, K6 creates Jobs that run corresponding JavaScript files. With Linkerd's automatic proxy injection in each pod, a challenge arises: the proxy container doesn't reach the "Complete" status. Consequently, the Job isn't marked as completed, hindering K6's ability to progress with test execution.

This issue is elaborated in this article [article](https://itnext.io/three-ways-to-use-linkerd-with-kubernetes-jobs-c12ccc6d4c7c), which also proposes three solutions.

Disabling Linkerd seems straightforward (solution 1 in the article) but isn't feasible for our objective of running component-level performance tests in a realistic environment with Linkerd. Therefore, we adopt solution 3 from the article, employing `linkerd-await`.

## Solution: Disabling Linkerd Appropriately
[`linkerd-await`](https://github.com/linkerd/linkerd-await) can invoke the `SHUTDOWN` endpoint of the proxy container after the main command execution:

```
linkerd-await --shutdown -- echo "I print and linkerd dies"
```

To address our specific issue, we prepend `linkerd-await` to the `Command` entry in each k6-operator's job manifest. The submodule in this repository includes this modification.

The submodule in this repository has been patched in order to do so.

A new function [pkg/resources/jobs/helpers.go](https://github.com/m3kka/k6-operator/blob/703f1560e2da7f1981ed166e198c232a97ae1fa8/pkg/resources/jobs/helpers.go#L36-L43) encapsulates this logic:

```go
func newLinkerdCommand(inheritedCommands []string) []string {
	var command []string

	command = append(command, "./linkerd-await", "--shutdown", "--")
	command = append(command, inheritedCommands...)

	return command
}
```

This function is utilized in:

- [pkg/resources/jobs/initializer.go](https://github.com/m3kka/k6-operator/blob/703f1560e2da7f1981ed166e198c232a97ae1fa8/pkg/resources/jobs/initializer.go#L63)
- [pkg/resources/jobs/runner.go](https://github.com/m3kka/k6-operator/blob/703f1560e2da7f1981ed166e198c232a97ae1fa8/pkg/resources/jobs/runner.go#L25)
- [pkg/resources/jobs/starter.go](https://github.com/m3kka/k6-operator/blob/703f1560e2da7f1981ed166e198c232a97ae1fa8/pkg/resources/jobs/starter.go#L45)

## Utilizing This Repository
### Prerequisites
- [kustomize](https://kubectl.docs.kubernetes.io/installation/kustomize/)

### Usage
```bash
# Build and install the k6-operator on the "tilt" cluster
make operator-install

# Run a basic test
make run-test YAML=test-basic.yaml TEST=ratelimiter-test.js
```

For a detailed list of commands, refer to the [Makefile](Makefile)