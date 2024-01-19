// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/health/v3/hds.proto" (package "envoy.service.health.v3", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { HealthDiscoveryService } from "./hds";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { HealthCheckSpecifier } from "./hds";
import type { HealthCheckRequestOrEndpointHealthResponse } from "./hds";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// [#protodoc-title: Health discovery service (HDS)]

/**
 * HDS is Health Discovery Service. It compliments Envoy’s health checking
 * service by designating this Envoy to be a healthchecker for a subset of hosts
 * in the cluster. The status of these health checks will be reported to the
 * management server, where it can be aggregated etc and redistributed back to
 * Envoy through EDS.
 *
 * @generated from protobuf service envoy.service.health.v3.HealthDiscoveryService
 */
export interface IHealthDiscoveryServiceClient {
    /**
     * 1. Envoy starts up and if its can_healthcheck option in the static
     *    bootstrap config is enabled, sends HealthCheckRequest to the management
     *    server. It supplies its capabilities (which protocol it can health check
     *    with, what zone it resides in, etc.).
     * 2. In response to (1), the management server designates this Envoy as a
     *    healthchecker to health check a subset of all upstream hosts for a given
     *    cluster (for example upstream Host 1 and Host 2). It streams
     *    HealthCheckSpecifier messages with cluster related configuration for all
     *    clusters this Envoy is designated to health check. Subsequent
     *    HealthCheckSpecifier message will be sent on changes to:
     *    a. Endpoints to health checks
     *    b. Per cluster configuration change
     * 3. Envoy creates a health probe based on the HealthCheck config and sends
     *    it to endpoint(ip:port) of Host 1 and 2. Based on the HealthCheck
     *    configuration Envoy waits upon the arrival of the probe response and
     *    looks at the content of the response to decide whether the endpoint is
     *    healthy or not. If a response hasn't been received within the timeout
     *    interval, the endpoint health status is considered TIMEOUT.
     * 4. Envoy reports results back in an EndpointHealthResponse message.
     *    Envoy streams responses as often as the interval configured by the
     *    management server in HealthCheckSpecifier.
     * 5. The management Server collects health statuses for all endpoints in the
     *    cluster (for all clusters) and uses this information to construct
     *    EndpointDiscoveryResponse messages.
     * 6. Once Envoy has a list of upstream endpoints to send traffic to, it load
     *    balances traffic to them without additional health checking. It may
     *    use inline healthcheck (i.e. consider endpoint UNHEALTHY if connection
     *    failed to a particular endpoint to account for health status propagation
     *    delay between HDS and EDS).
     * By default, can_healthcheck is true. If can_healthcheck is false, Cluster
     * configuration may not contain HealthCheck message.
     * TODO(htuch): How is can_healthcheck communicated to CDS to ensure the above
     * invariant?
     * TODO(htuch): Add @amb67's diagram.
     *
     * @generated from protobuf rpc: StreamHealthCheck(stream envoy.service.health.v3.HealthCheckRequestOrEndpointHealthResponse) returns (stream envoy.service.health.v3.HealthCheckSpecifier);
     */
    streamHealthCheck(options?: RpcOptions): DuplexStreamingCall<HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier>;
    /**
     * TODO(htuch): Unlike the gRPC version, there is no stream-based binding of
     * request/response. Should we add an identifier to the HealthCheckSpecifier
     * to bind with the response?
     *
     * @generated from protobuf rpc: FetchHealthCheck(envoy.service.health.v3.HealthCheckRequestOrEndpointHealthResponse) returns (envoy.service.health.v3.HealthCheckSpecifier);
     */
    fetchHealthCheck(input: HealthCheckRequestOrEndpointHealthResponse, options?: RpcOptions): UnaryCall<HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier>;
}
// [#protodoc-title: Health discovery service (HDS)]

/**
 * HDS is Health Discovery Service. It compliments Envoy’s health checking
 * service by designating this Envoy to be a healthchecker for a subset of hosts
 * in the cluster. The status of these health checks will be reported to the
 * management server, where it can be aggregated etc and redistributed back to
 * Envoy through EDS.
 *
 * @generated from protobuf service envoy.service.health.v3.HealthDiscoveryService
 */
export class HealthDiscoveryServiceClient implements IHealthDiscoveryServiceClient, ServiceInfo {
    typeName = HealthDiscoveryService.typeName;
    methods = HealthDiscoveryService.methods;
    options = HealthDiscoveryService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * 1. Envoy starts up and if its can_healthcheck option in the static
     *    bootstrap config is enabled, sends HealthCheckRequest to the management
     *    server. It supplies its capabilities (which protocol it can health check
     *    with, what zone it resides in, etc.).
     * 2. In response to (1), the management server designates this Envoy as a
     *    healthchecker to health check a subset of all upstream hosts for a given
     *    cluster (for example upstream Host 1 and Host 2). It streams
     *    HealthCheckSpecifier messages with cluster related configuration for all
     *    clusters this Envoy is designated to health check. Subsequent
     *    HealthCheckSpecifier message will be sent on changes to:
     *    a. Endpoints to health checks
     *    b. Per cluster configuration change
     * 3. Envoy creates a health probe based on the HealthCheck config and sends
     *    it to endpoint(ip:port) of Host 1 and 2. Based on the HealthCheck
     *    configuration Envoy waits upon the arrival of the probe response and
     *    looks at the content of the response to decide whether the endpoint is
     *    healthy or not. If a response hasn't been received within the timeout
     *    interval, the endpoint health status is considered TIMEOUT.
     * 4. Envoy reports results back in an EndpointHealthResponse message.
     *    Envoy streams responses as often as the interval configured by the
     *    management server in HealthCheckSpecifier.
     * 5. The management Server collects health statuses for all endpoints in the
     *    cluster (for all clusters) and uses this information to construct
     *    EndpointDiscoveryResponse messages.
     * 6. Once Envoy has a list of upstream endpoints to send traffic to, it load
     *    balances traffic to them without additional health checking. It may
     *    use inline healthcheck (i.e. consider endpoint UNHEALTHY if connection
     *    failed to a particular endpoint to account for health status propagation
     *    delay between HDS and EDS).
     * By default, can_healthcheck is true. If can_healthcheck is false, Cluster
     * configuration may not contain HealthCheck message.
     * TODO(htuch): How is can_healthcheck communicated to CDS to ensure the above
     * invariant?
     * TODO(htuch): Add @amb67's diagram.
     *
     * @generated from protobuf rpc: StreamHealthCheck(stream envoy.service.health.v3.HealthCheckRequestOrEndpointHealthResponse) returns (stream envoy.service.health.v3.HealthCheckSpecifier);
     */
    streamHealthCheck(options?: RpcOptions): DuplexStreamingCall<HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier>("duplex", this._transport, method, opt);
    }
    /**
     * TODO(htuch): Unlike the gRPC version, there is no stream-based binding of
     * request/response. Should we add an identifier to the HealthCheckSpecifier
     * to bind with the response?
     *
     * @generated from protobuf rpc: FetchHealthCheck(envoy.service.health.v3.HealthCheckRequestOrEndpointHealthResponse) returns (envoy.service.health.v3.HealthCheckSpecifier);
     */
    fetchHealthCheck(input: HealthCheckRequestOrEndpointHealthResponse, options?: RpcOptions): UnaryCall<HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<HealthCheckRequestOrEndpointHealthResponse, HealthCheckSpecifier>("unary", this._transport, method, opt, input);
    }
}