# K6 Operator POC

This repository contains a basic POC enabling the use of the K6 operator in a Kubernetes cluster using Linkerd.

## The Problem
K6 executes its tests by creating Jobs that then will execute the related k6 javascript files.
Linkerd does inject an additional container in every pod acting as proxy, this is problematic when it comes to Jobs because the proxy container will never reach the "Complete" status, this means that the Job is never marked as completed and therefore K6 is not able to progress with the tests execution.

This problem is very clearly explained in this [article](https://itnext.io/three-ways-to-use-linkerd-with-kubernetes-jobs-c12ccc6d4c7c) which details also 3 possible solutions.

The most obvious solution would be disabling Linkerd (solution 1 in the article), but this is not realistic as aim to run component level performance tests in a realistic environments which will have a closed linkerd network.

For this reason the better approach is solution 3 as described in the article, the use of `linkerd-await`.

## Disabling linkerd at the right time
[`linkerd-await`](https://github.com/linkerd/linkerd-await) can call the `SHUTDOWN` endpoint of the proxy container when the wrapped command has returned:

```
linkerd-await --shutdown -- echo "I print and linkerd dies"
```

For this to solve our problem it is therefore necessary to prepend `linkerd-await` to the `Command` entry of each of the k6-operator's job manifests.

The submodule in this repository has been patched in order to do so.
A new function has been added to the [helpers.go](k6-operator/pkg/resources/jobs/helpers.go) file:

```go
func newLinkerdCommand(inheritedCommands []string) []string {
	var command []string

	command = append(command, "./linkerd-await", "--shutdown", "--")
	command = append(command, inheritedCommands...)

	return command
}
```