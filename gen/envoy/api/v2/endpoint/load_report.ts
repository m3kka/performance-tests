// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/endpoint/load_report.proto" (package "envoy.api.v2.endpoint", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Duration } from "../../../../google/protobuf/duration";
import { Struct } from "../../../../google/protobuf/struct";
import { Address } from "../core/address";
import { Locality } from "../core/base";
/**
 * These are stats Envoy reports to GLB every so often. Report frequency is
 * defined by
 * :ref:`LoadStatsResponse.load_reporting_interval<envoy_api_field_service.load_stats.v2.LoadStatsResponse.load_reporting_interval>`.
 * Stats per upstream region/zone and optionally per subzone.
 * [#not-implemented-hide:] Not configuration. TBD how to doc proto APIs.
 * [#next-free-field: 9]
 *
 * @generated from protobuf message envoy.api.v2.endpoint.UpstreamLocalityStats
 */
export interface UpstreamLocalityStats {
    /**
     * Name of zone, region and optionally endpoint group these metrics were
     * collected from. Zone and region names could be empty if unknown.
     *
     * @generated from protobuf field: envoy.api.v2.core.Locality locality = 1;
     */
    locality?: Locality;
    /**
     * The total number of requests successfully completed by the endpoints in the
     * locality.
     *
     * @generated from protobuf field: uint64 total_successful_requests = 2;
     */
    totalSuccessfulRequests: bigint;
    /**
     * The total number of unfinished requests
     *
     * @generated from protobuf field: uint64 total_requests_in_progress = 3;
     */
    totalRequestsInProgress: bigint;
    /**
     * The total number of requests that failed due to errors at the endpoint,
     * aggregated over all endpoints in the locality.
     *
     * @generated from protobuf field: uint64 total_error_requests = 4;
     */
    totalErrorRequests: bigint;
    /**
     * The total number of requests that were issued by this Envoy since
     * the last report. This information is aggregated over all the
     * upstream endpoints in the locality.
     *
     * @generated from protobuf field: uint64 total_issued_requests = 8;
     */
    totalIssuedRequests: bigint;
    /**
     * Stats for multi-dimensional load balancing.
     *
     * @generated from protobuf field: repeated envoy.api.v2.endpoint.EndpointLoadMetricStats load_metric_stats = 5;
     */
    loadMetricStats: EndpointLoadMetricStats[];
    /**
     * Endpoint granularity stats information for this locality. This information
     * is populated if the Server requests it by setting
     * :ref:`LoadStatsResponse.report_endpoint_granularity<envoy_api_field_service.load_stats.v2.LoadStatsResponse.report_endpoint_granularity>`.
     *
     * @generated from protobuf field: repeated envoy.api.v2.endpoint.UpstreamEndpointStats upstream_endpoint_stats = 7;
     */
    upstreamEndpointStats: UpstreamEndpointStats[];
    /**
     * [#not-implemented-hide:] The priority of the endpoint group these metrics
     * were collected from.
     *
     * @generated from protobuf field: uint32 priority = 6;
     */
    priority: number;
}
/**
 * [#not-implemented-hide:] Not configuration. TBD how to doc proto APIs.
 * [#next-free-field: 8]
 *
 * @generated from protobuf message envoy.api.v2.endpoint.UpstreamEndpointStats
 */
export interface UpstreamEndpointStats {
    /**
     * Upstream host address.
     *
     * @generated from protobuf field: envoy.api.v2.core.Address address = 1;
     */
    address?: Address;
    /**
     * Opaque and implementation dependent metadata of the
     * endpoint. Envoy will pass this directly to the management server.
     *
     * @generated from protobuf field: google.protobuf.Struct metadata = 6;
     */
    metadata?: Struct;
    /**
     * The total number of requests successfully completed by the endpoints in the
     * locality. These include non-5xx responses for HTTP, where errors
     * originate at the client and the endpoint responded successfully. For gRPC,
     * the grpc-status values are those not covered by total_error_requests below.
     *
     * @generated from protobuf field: uint64 total_successful_requests = 2;
     */
    totalSuccessfulRequests: bigint;
    /**
     * The total number of unfinished requests for this endpoint.
     *
     * @generated from protobuf field: uint64 total_requests_in_progress = 3;
     */
    totalRequestsInProgress: bigint;
    /**
     * The total number of requests that failed due to errors at the endpoint.
     * For HTTP these are responses with 5xx status codes and for gRPC the
     * grpc-status values:
     *
     *   - DeadlineExceeded
     *   - Unimplemented
     *   - Internal
     *   - Unavailable
     *   - Unknown
     *   - DataLoss
     *
     * @generated from protobuf field: uint64 total_error_requests = 4;
     */
    totalErrorRequests: bigint;
    /**
     * The total number of requests that were issued to this endpoint
     * since the last report. A single TCP connection, HTTP or gRPC
     * request or stream is counted as one request.
     *
     * @generated from protobuf field: uint64 total_issued_requests = 7;
     */
    totalIssuedRequests: bigint;
    /**
     * Stats for multi-dimensional load balancing.
     *
     * @generated from protobuf field: repeated envoy.api.v2.endpoint.EndpointLoadMetricStats load_metric_stats = 5;
     */
    loadMetricStats: EndpointLoadMetricStats[];
}
/**
 * [#not-implemented-hide:] Not configuration. TBD how to doc proto APIs.
 *
 * @generated from protobuf message envoy.api.v2.endpoint.EndpointLoadMetricStats
 */
export interface EndpointLoadMetricStats {
    /**
     * Name of the metric; may be empty.
     *
     * @generated from protobuf field: string metric_name = 1;
     */
    metricName: string;
    /**
     * Number of calls that finished and included this metric.
     *
     * @generated from protobuf field: uint64 num_requests_finished_with_metric = 2;
     */
    numRequestsFinishedWithMetric: bigint;
    /**
     * Sum of metric values across all calls that finished with this metric for
     * load_reporting_interval.
     *
     * @generated from protobuf field: double total_metric_value = 3;
     */
    totalMetricValue: number;
}
/**
 * Per cluster load stats. Envoy reports these stats a management server in a
 * :ref:`LoadStatsRequest<envoy_api_msg_service.load_stats.v2.LoadStatsRequest>`
 * [#not-implemented-hide:] Not configuration. TBD how to doc proto APIs.
 * Next ID: 7
 * [#next-free-field: 7]
 *
 * @generated from protobuf message envoy.api.v2.endpoint.ClusterStats
 */
export interface ClusterStats {
    /**
     * The name of the cluster.
     *
     * @generated from protobuf field: string cluster_name = 1;
     */
    clusterName: string;
    /**
     * The eds_cluster_config service_name of the cluster.
     * It's possible that two clusters send the same service_name to EDS,
     * in that case, the management server is supposed to do aggregation on the load reports.
     *
     * @generated from protobuf field: string cluster_service_name = 6;
     */
    clusterServiceName: string;
    /**
     * Need at least one.
     *
     * @generated from protobuf field: repeated envoy.api.v2.endpoint.UpstreamLocalityStats upstream_locality_stats = 2;
     */
    upstreamLocalityStats: UpstreamLocalityStats[];
    /**
     * Cluster-level stats such as total_successful_requests may be computed by
     * summing upstream_locality_stats. In addition, below there are additional
     * cluster-wide stats.
     *
     * The total number of dropped requests. This covers requests
     * deliberately dropped by the drop_overload policy and circuit breaking.
     *
     * @generated from protobuf field: uint64 total_dropped_requests = 3;
     */
    totalDroppedRequests: bigint;
    /**
     * Information about deliberately dropped requests for each category specified
     * in the DropOverload policy.
     *
     * @generated from protobuf field: repeated envoy.api.v2.endpoint.ClusterStats.DroppedRequests dropped_requests = 5;
     */
    droppedRequests: ClusterStats_DroppedRequests[];
    /**
     * Period over which the actual load report occurred. This will be guaranteed to include every
     * request reported. Due to system load and delays between the *LoadStatsRequest* sent from Envoy
     * and the *LoadStatsResponse* message sent from the management server, this may be longer than
     * the requested load reporting interval in the *LoadStatsResponse*.
     *
     * @generated from protobuf field: google.protobuf.Duration load_report_interval = 4;
     */
    loadReportInterval?: Duration;
}
/**
 * @generated from protobuf message envoy.api.v2.endpoint.ClusterStats.DroppedRequests
 */
export interface ClusterStats_DroppedRequests {
    /**
     * Identifier for the policy specifying the drop.
     *
     * @generated from protobuf field: string category = 1;
     */
    category: string;
    /**
     * Total number of deliberately dropped requests for the category.
     *
     * @generated from protobuf field: uint64 dropped_count = 2;
     */
    droppedCount: bigint;
}
// @generated message type with reflection information, may provide speed optimized methods
class UpstreamLocalityStats$Type extends MessageType<UpstreamLocalityStats> {
    constructor() {
        super("envoy.api.v2.endpoint.UpstreamLocalityStats", [
            { no: 1, name: "locality", kind: "message", T: () => Locality },
            { no: 2, name: "total_successful_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "total_requests_in_progress", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "total_error_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "total_issued_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "load_metric_stats", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EndpointLoadMetricStats },
            { no: 7, name: "upstream_endpoint_stats", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UpstreamEndpointStats },
            { no: 6, name: "priority", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<UpstreamLocalityStats>): UpstreamLocalityStats {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.totalSuccessfulRequests = 0n;
        message.totalRequestsInProgress = 0n;
        message.totalErrorRequests = 0n;
        message.totalIssuedRequests = 0n;
        message.loadMetricStats = [];
        message.upstreamEndpointStats = [];
        message.priority = 0;
        if (value !== undefined)
            reflectionMergePartial<UpstreamLocalityStats>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpstreamLocalityStats): UpstreamLocalityStats {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.Locality locality */ 1:
                    message.locality = Locality.internalBinaryRead(reader, reader.uint32(), options, message.locality);
                    break;
                case /* uint64 total_successful_requests */ 2:
                    message.totalSuccessfulRequests = reader.uint64().toBigInt();
                    break;
                case /* uint64 total_requests_in_progress */ 3:
                    message.totalRequestsInProgress = reader.uint64().toBigInt();
                    break;
                case /* uint64 total_error_requests */ 4:
                    message.totalErrorRequests = reader.uint64().toBigInt();
                    break;
                case /* uint64 total_issued_requests */ 8:
                    message.totalIssuedRequests = reader.uint64().toBigInt();
                    break;
                case /* repeated envoy.api.v2.endpoint.EndpointLoadMetricStats load_metric_stats */ 5:
                    message.loadMetricStats.push(EndpointLoadMetricStats.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.api.v2.endpoint.UpstreamEndpointStats upstream_endpoint_stats */ 7:
                    message.upstreamEndpointStats.push(UpstreamEndpointStats.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 priority */ 6:
                    message.priority = reader.uint32();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpstreamLocalityStats, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.Locality locality = 1; */
        if (message.locality)
            Locality.internalBinaryWrite(message.locality, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint64 total_successful_requests = 2; */
        if (message.totalSuccessfulRequests !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.totalSuccessfulRequests);
        /* uint64 total_requests_in_progress = 3; */
        if (message.totalRequestsInProgress !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.totalRequestsInProgress);
        /* uint64 total_error_requests = 4; */
        if (message.totalErrorRequests !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.totalErrorRequests);
        /* uint64 total_issued_requests = 8; */
        if (message.totalIssuedRequests !== 0n)
            writer.tag(8, WireType.Varint).uint64(message.totalIssuedRequests);
        /* repeated envoy.api.v2.endpoint.EndpointLoadMetricStats load_metric_stats = 5; */
        for (let i = 0; i < message.loadMetricStats.length; i++)
            EndpointLoadMetricStats.internalBinaryWrite(message.loadMetricStats[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.api.v2.endpoint.UpstreamEndpointStats upstream_endpoint_stats = 7; */
        for (let i = 0; i < message.upstreamEndpointStats.length; i++)
            UpstreamEndpointStats.internalBinaryWrite(message.upstreamEndpointStats[i], writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* uint32 priority = 6; */
        if (message.priority !== 0)
            writer.tag(6, WireType.Varint).uint32(message.priority);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.endpoint.UpstreamLocalityStats
 */
export const UpstreamLocalityStats = new UpstreamLocalityStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UpstreamEndpointStats$Type extends MessageType<UpstreamEndpointStats> {
    constructor() {
        super("envoy.api.v2.endpoint.UpstreamEndpointStats", [
            { no: 1, name: "address", kind: "message", T: () => Address },
            { no: 6, name: "metadata", kind: "message", T: () => Struct },
            { no: 2, name: "total_successful_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "total_requests_in_progress", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "total_error_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "total_issued_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "load_metric_stats", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => EndpointLoadMetricStats }
        ]);
    }
    create(value?: PartialMessage<UpstreamEndpointStats>): UpstreamEndpointStats {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.totalSuccessfulRequests = 0n;
        message.totalRequestsInProgress = 0n;
        message.totalErrorRequests = 0n;
        message.totalIssuedRequests = 0n;
        message.loadMetricStats = [];
        if (value !== undefined)
            reflectionMergePartial<UpstreamEndpointStats>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UpstreamEndpointStats): UpstreamEndpointStats {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.Address address */ 1:
                    message.address = Address.internalBinaryRead(reader, reader.uint32(), options, message.address);
                    break;
                case /* google.protobuf.Struct metadata */ 6:
                    message.metadata = Struct.internalBinaryRead(reader, reader.uint32(), options, message.metadata);
                    break;
                case /* uint64 total_successful_requests */ 2:
                    message.totalSuccessfulRequests = reader.uint64().toBigInt();
                    break;
                case /* uint64 total_requests_in_progress */ 3:
                    message.totalRequestsInProgress = reader.uint64().toBigInt();
                    break;
                case /* uint64 total_error_requests */ 4:
                    message.totalErrorRequests = reader.uint64().toBigInt();
                    break;
                case /* uint64 total_issued_requests */ 7:
                    message.totalIssuedRequests = reader.uint64().toBigInt();
                    break;
                case /* repeated envoy.api.v2.endpoint.EndpointLoadMetricStats load_metric_stats */ 5:
                    message.loadMetricStats.push(EndpointLoadMetricStats.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: UpstreamEndpointStats, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.Address address = 1; */
        if (message.address)
            Address.internalBinaryWrite(message.address, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Struct metadata = 6; */
        if (message.metadata)
            Struct.internalBinaryWrite(message.metadata, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* uint64 total_successful_requests = 2; */
        if (message.totalSuccessfulRequests !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.totalSuccessfulRequests);
        /* uint64 total_requests_in_progress = 3; */
        if (message.totalRequestsInProgress !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.totalRequestsInProgress);
        /* uint64 total_error_requests = 4; */
        if (message.totalErrorRequests !== 0n)
            writer.tag(4, WireType.Varint).uint64(message.totalErrorRequests);
        /* uint64 total_issued_requests = 7; */
        if (message.totalIssuedRequests !== 0n)
            writer.tag(7, WireType.Varint).uint64(message.totalIssuedRequests);
        /* repeated envoy.api.v2.endpoint.EndpointLoadMetricStats load_metric_stats = 5; */
        for (let i = 0; i < message.loadMetricStats.length; i++)
            EndpointLoadMetricStats.internalBinaryWrite(message.loadMetricStats[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.endpoint.UpstreamEndpointStats
 */
export const UpstreamEndpointStats = new UpstreamEndpointStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class EndpointLoadMetricStats$Type extends MessageType<EndpointLoadMetricStats> {
    constructor() {
        super("envoy.api.v2.endpoint.EndpointLoadMetricStats", [
            { no: 1, name: "metric_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "num_requests_finished_with_metric", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "total_metric_value", kind: "scalar", T: 1 /*ScalarType.DOUBLE*/ }
        ]);
    }
    create(value?: PartialMessage<EndpointLoadMetricStats>): EndpointLoadMetricStats {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.metricName = "";
        message.numRequestsFinishedWithMetric = 0n;
        message.totalMetricValue = 0;
        if (value !== undefined)
            reflectionMergePartial<EndpointLoadMetricStats>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: EndpointLoadMetricStats): EndpointLoadMetricStats {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string metric_name */ 1:
                    message.metricName = reader.string();
                    break;
                case /* uint64 num_requests_finished_with_metric */ 2:
                    message.numRequestsFinishedWithMetric = reader.uint64().toBigInt();
                    break;
                case /* double total_metric_value */ 3:
                    message.totalMetricValue = reader.double();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: EndpointLoadMetricStats, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string metric_name = 1; */
        if (message.metricName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.metricName);
        /* uint64 num_requests_finished_with_metric = 2; */
        if (message.numRequestsFinishedWithMetric !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.numRequestsFinishedWithMetric);
        /* double total_metric_value = 3; */
        if (message.totalMetricValue !== 0)
            writer.tag(3, WireType.Bit64).double(message.totalMetricValue);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.endpoint.EndpointLoadMetricStats
 */
export const EndpointLoadMetricStats = new EndpointLoadMetricStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClusterStats$Type extends MessageType<ClusterStats> {
    constructor() {
        super("envoy.api.v2.endpoint.ClusterStats", [
            { no: 1, name: "cluster_name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 6, name: "cluster_service_name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "upstream_locality_stats", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UpstreamLocalityStats, options: { "validate.rules": { repeated: { minItems: "1" } } } },
            { no: 3, name: "total_dropped_requests", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "dropped_requests", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => ClusterStats_DroppedRequests },
            { no: 4, name: "load_report_interval", kind: "message", T: () => Duration }
        ]);
    }
    create(value?: PartialMessage<ClusterStats>): ClusterStats {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.clusterName = "";
        message.clusterServiceName = "";
        message.upstreamLocalityStats = [];
        message.totalDroppedRequests = 0n;
        message.droppedRequests = [];
        if (value !== undefined)
            reflectionMergePartial<ClusterStats>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClusterStats): ClusterStats {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cluster_name */ 1:
                    message.clusterName = reader.string();
                    break;
                case /* string cluster_service_name */ 6:
                    message.clusterServiceName = reader.string();
                    break;
                case /* repeated envoy.api.v2.endpoint.UpstreamLocalityStats upstream_locality_stats */ 2:
                    message.upstreamLocalityStats.push(UpstreamLocalityStats.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint64 total_dropped_requests */ 3:
                    message.totalDroppedRequests = reader.uint64().toBigInt();
                    break;
                case /* repeated envoy.api.v2.endpoint.ClusterStats.DroppedRequests dropped_requests */ 5:
                    message.droppedRequests.push(ClusterStats_DroppedRequests.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* google.protobuf.Duration load_report_interval */ 4:
                    message.loadReportInterval = Duration.internalBinaryRead(reader, reader.uint32(), options, message.loadReportInterval);
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ClusterStats, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string cluster_name = 1; */
        if (message.clusterName !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.clusterName);
        /* string cluster_service_name = 6; */
        if (message.clusterServiceName !== "")
            writer.tag(6, WireType.LengthDelimited).string(message.clusterServiceName);
        /* repeated envoy.api.v2.endpoint.UpstreamLocalityStats upstream_locality_stats = 2; */
        for (let i = 0; i < message.upstreamLocalityStats.length; i++)
            UpstreamLocalityStats.internalBinaryWrite(message.upstreamLocalityStats[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* uint64 total_dropped_requests = 3; */
        if (message.totalDroppedRequests !== 0n)
            writer.tag(3, WireType.Varint).uint64(message.totalDroppedRequests);
        /* repeated envoy.api.v2.endpoint.ClusterStats.DroppedRequests dropped_requests = 5; */
        for (let i = 0; i < message.droppedRequests.length; i++)
            ClusterStats_DroppedRequests.internalBinaryWrite(message.droppedRequests[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration load_report_interval = 4; */
        if (message.loadReportInterval)
            Duration.internalBinaryWrite(message.loadReportInterval, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.endpoint.ClusterStats
 */
export const ClusterStats = new ClusterStats$Type();
// @generated message type with reflection information, may provide speed optimized methods
class ClusterStats_DroppedRequests$Type extends MessageType<ClusterStats_DroppedRequests> {
    constructor() {
        super("envoy.api.v2.endpoint.ClusterStats.DroppedRequests", [
            { no: 1, name: "category", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "dropped_count", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]);
    }
    create(value?: PartialMessage<ClusterStats_DroppedRequests>): ClusterStats_DroppedRequests {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.category = "";
        message.droppedCount = 0n;
        if (value !== undefined)
            reflectionMergePartial<ClusterStats_DroppedRequests>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClusterStats_DroppedRequests): ClusterStats_DroppedRequests {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string category */ 1:
                    message.category = reader.string();
                    break;
                case /* uint64 dropped_count */ 2:
                    message.droppedCount = reader.uint64().toBigInt();
                    break;
                default:
                    let u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error(`Unknown field ${fieldNo} (wire type ${wireType}) for ${this.typeName}`);
                    let d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    }
    internalBinaryWrite(message: ClusterStats_DroppedRequests, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string category = 1; */
        if (message.category !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.category);
        /* uint64 dropped_count = 2; */
        if (message.droppedCount !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.droppedCount);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.endpoint.ClusterStats.DroppedRequests
 */
export const ClusterStats_DroppedRequests = new ClusterStats_DroppedRequests$Type();
