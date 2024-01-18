// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/rate_limit_quota/v3/rlqs.proto" (package "envoy.service.rate_limit_quota.v3", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { RateLimitQuotaService } from "./rlqs";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { RateLimitQuotaResponse } from "./rlqs";
import type { RateLimitQuotaUsageReports } from "./rlqs";
import type { DuplexStreamingCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
// [#protodoc-title: Rate Limit Quota Service (RLQS)]

// The Rate Limit Quota Service (RLQS) is a Envoy global rate limiting service that allows to
// delegate rate limit decisions to a remote service. The service will aggregate the usage reports
// from multiple data plane instances, and distribute Rate Limit Assignments to each instance
// based on its business logic. The logic is outside of the scope of the protocol API.
// 
// The protocol is designed as a streaming-first API. It utilizes watch-like subscription model.
// The data plane groups requests into Quota Buckets as directed by the filter config,
// and periodically reports them to the RLQS server along with the Bucket identifier, :ref:`BucketId
// <envoy_v3_api_msg_service.rate_limit_quota.v3.BucketId>`. Once RLQS server has collected enough
// reports to make a decision, it'll send back the assignment with the rate limiting instructions.
// 
// The first report sent by the data plane is interpreted by the RLQS server as a "watch" request,
// indicating that the data plane instance is interested in receiving further updates for the
// ``BucketId``. From then on, RLQS server may push assignments to this instance at will, even if
// the instance is not sending usage reports. It's the responsibility of the RLQS server
// to determine when the data plane instance didn't send ``BucketId`` reports for too long,
// and to respond with the :ref:`AbandonAction
// <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction>`,
// indicating that the server has now stopped sending quota assignments for the ``BucketId`` bucket,
// and the data plane instance should :ref:`abandon
// <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.abandon_action>`
// it.
// 
// Refer to Rate Limit Quota :ref:`configuration overview <config_http_filters_rate_limit_quota>`
// for further details.

/**
 * Defines the Rate Limit Quota Service (RLQS).
 *
 * @generated from protobuf service envoy.service.rate_limit_quota.v3.RateLimitQuotaService
 */
export interface IRateLimitQuotaServiceClient {
    /**
     * Main communication channel: the data plane sends usage reports to the RLQS server,
     * and the server asynchronously responding with the assignments.
     *
     * @generated from protobuf rpc: StreamRateLimitQuotas(stream envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports) returns (stream envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse);
     */
    streamRateLimitQuotas(options?: RpcOptions): DuplexStreamingCall<RateLimitQuotaUsageReports, RateLimitQuotaResponse>;
}
// [#protodoc-title: Rate Limit Quota Service (RLQS)]

// The Rate Limit Quota Service (RLQS) is a Envoy global rate limiting service that allows to
// delegate rate limit decisions to a remote service. The service will aggregate the usage reports
// from multiple data plane instances, and distribute Rate Limit Assignments to each instance
// based on its business logic. The logic is outside of the scope of the protocol API.
// 
// The protocol is designed as a streaming-first API. It utilizes watch-like subscription model.
// The data plane groups requests into Quota Buckets as directed by the filter config,
// and periodically reports them to the RLQS server along with the Bucket identifier, :ref:`BucketId
// <envoy_v3_api_msg_service.rate_limit_quota.v3.BucketId>`. Once RLQS server has collected enough
// reports to make a decision, it'll send back the assignment with the rate limiting instructions.
// 
// The first report sent by the data plane is interpreted by the RLQS server as a "watch" request,
// indicating that the data plane instance is interested in receiving further updates for the
// ``BucketId``. From then on, RLQS server may push assignments to this instance at will, even if
// the instance is not sending usage reports. It's the responsibility of the RLQS server
// to determine when the data plane instance didn't send ``BucketId`` reports for too long,
// and to respond with the :ref:`AbandonAction
// <envoy_v3_api_msg_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.AbandonAction>`,
// indicating that the server has now stopped sending quota assignments for the ``BucketId`` bucket,
// and the data plane instance should :ref:`abandon
// <envoy_v3_api_field_service.rate_limit_quota.v3.RateLimitQuotaResponse.BucketAction.abandon_action>`
// it.
// 
// Refer to Rate Limit Quota :ref:`configuration overview <config_http_filters_rate_limit_quota>`
// for further details.

/**
 * Defines the Rate Limit Quota Service (RLQS).
 *
 * @generated from protobuf service envoy.service.rate_limit_quota.v3.RateLimitQuotaService
 */
export class RateLimitQuotaServiceClient implements IRateLimitQuotaServiceClient, ServiceInfo {
    typeName = RateLimitQuotaService.typeName;
    methods = RateLimitQuotaService.methods;
    options = RateLimitQuotaService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Main communication channel: the data plane sends usage reports to the RLQS server,
     * and the server asynchronously responding with the assignments.
     *
     * @generated from protobuf rpc: StreamRateLimitQuotas(stream envoy.service.rate_limit_quota.v3.RateLimitQuotaUsageReports) returns (stream envoy.service.rate_limit_quota.v3.RateLimitQuotaResponse);
     */
    streamRateLimitQuotas(options?: RpcOptions): DuplexStreamingCall<RateLimitQuotaUsageReports, RateLimitQuotaResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<RateLimitQuotaUsageReports, RateLimitQuotaResponse>("duplex", this._transport, method, opt);
    }
}
