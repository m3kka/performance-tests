// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/bandwidth_limit/v3/bandwidth_limit.proto" (package "envoy.extensions.filters.http.bandwidth_limit.v3", syntax proto3)
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
import { RuntimeFeatureFlag } from "../../../../../config/core/v3/base";
import { Duration } from "../../../../../../google/protobuf/duration";
import { UInt64Value } from "../../../../../../google/protobuf/wrappers";
// [#protodoc-title: Bandwidth limit]
// Bandwidth limit :ref:`configuration overview <config_http_filters_bandwidth_limit>`.
// [#extension: envoy.filters.http.bandwidth_limit]

/**
 * [#next-free-field: 8]
 *
 * @generated from protobuf message envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit
 */
export interface BandwidthLimit {
    /**
     * The human readable prefix to use when emitting stats.
     *
     * @generated from protobuf field: string stat_prefix = 1;
     */
    statPrefix: string;
    /**
     * The enable mode for the bandwidth limit filter.
     * Default is Disabled.
     *
     * @generated from protobuf field: envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit.EnableMode enable_mode = 2;
     */
    enableMode: BandwidthLimit_EnableMode;
    /**
     * The limit supplied in KiB/s.
     *
     * .. note::
     *   It's fine for the limit to be unset for the global configuration since the bandwidth limit
     *   can be applied at a the virtual host or route level. Thus, the limit must be set for the
     *   per route configuration otherwise the config will be rejected.
     *
     * .. note::
     *   When using per route configuration, the limit becomes unique to that route.
     *
     *
     * @generated from protobuf field: google.protobuf.UInt64Value limit_kbps = 3;
     */
    limitKbps?: UInt64Value;
    /**
     * Optional Fill interval in milliseconds for the token refills. Defaults to 50ms.
     * It must be at least 20ms to avoid too aggressive refills.
     *
     * @generated from protobuf field: google.protobuf.Duration fill_interval = 4;
     */
    fillInterval?: Duration;
    /**
     * Runtime flag that controls whether the filter is enabled or not. If not specified, defaults
     * to enabled.
     *
     * @generated from protobuf field: envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled = 5;
     */
    runtimeEnabled?: RuntimeFeatureFlag;
    /**
     * Enable response trailers.
     *
     * .. note::
     *
     *   If set true, the following 4 trailers will be added, prefixed by ``response_trailer_prefix``:
     *   * bandwidth-request-delay-ms: delay time in milliseconds it took for the request stream transfer including request body transfer time and the time added by the filter.
     *   * bandwidth-response-delay-ms: delay time in milliseconds it took for the response stream transfer including response body transfer time and the time added by the filter.
     *   * bandwidth-request-filter-delay-ms: delay time in milliseconds in request stream transfer added by the filter.
     *   * bandwidth-response-filter-delay-ms: delay time in milliseconds that added by the filter.
     *   If :ref:`enable_mode <envoy_v3_api_field_extensions.filters.http.bandwidth_limit.v3.BandwidthLimit.enable_mode>` is ``DISABLED`` or ``REQUEST``, the trailers will not be set.
     *   If both the request and response delay time is 0, the trailers will not be set.
     *
     *
     * @generated from protobuf field: bool enable_response_trailers = 6;
     */
    enableResponseTrailers: boolean;
    /**
     * Optional The prefix for the response trailers.
     *
     * @generated from protobuf field: string response_trailer_prefix = 7;
     */
    responseTrailerPrefix: string;
}
/**
 * Defines the mode for the bandwidth limit filter.
 * Values represent bitmask.
 *
 * @generated from protobuf enum envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit.EnableMode
 */
export enum BandwidthLimit_EnableMode {
    /**
     * Filter is disabled.
     *
     * @generated from protobuf enum value: DISABLED = 0;
     */
    DISABLED = 0,
    /**
     * Filter enabled only for incoming traffic.
     *
     * @generated from protobuf enum value: REQUEST = 1;
     */
    REQUEST = 1,
    /**
     * Filter enabled only for outgoing traffic.
     *
     * @generated from protobuf enum value: RESPONSE = 2;
     */
    RESPONSE = 2,
    /**
     * Filter enabled for both incoming and outgoing traffic.
     *
     * @generated from protobuf enum value: REQUEST_AND_RESPONSE = 3;
     */
    REQUEST_AND_RESPONSE = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class BandwidthLimit$Type extends MessageType<BandwidthLimit> {
    constructor() {
        super("envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit", [
            { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "enable_mode", kind: "enum", T: () => ["envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit.EnableMode", BandwidthLimit_EnableMode], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 3, name: "limit_kbps", kind: "message", T: () => UInt64Value, options: { "validate.rules": { uint64: { gte: "1" } } } },
            { no: 4, name: "fill_interval", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { lte: { seconds: "1" }, gte: { nanos: 20000000 } } } } },
            { no: 5, name: "runtime_enabled", kind: "message", T: () => RuntimeFeatureFlag },
            { no: 6, name: "enable_response_trailers", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 7, name: "response_trailer_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { wellKnownRegex: "HTTP_HEADER_NAME", strict: false } } } }
        ]);
    }
    create(value?: PartialMessage<BandwidthLimit>): BandwidthLimit {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.statPrefix = "";
        message.enableMode = 0;
        message.enableResponseTrailers = false;
        message.responseTrailerPrefix = "";
        if (value !== undefined)
            reflectionMergePartial<BandwidthLimit>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: BandwidthLimit): BandwidthLimit {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string stat_prefix */ 1:
                    message.statPrefix = reader.string();
                    break;
                case /* envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit.EnableMode enable_mode */ 2:
                    message.enableMode = reader.int32();
                    break;
                case /* google.protobuf.UInt64Value limit_kbps */ 3:
                    message.limitKbps = UInt64Value.internalBinaryRead(reader, reader.uint32(), options, message.limitKbps);
                    break;
                case /* google.protobuf.Duration fill_interval */ 4:
                    message.fillInterval = Duration.internalBinaryRead(reader, reader.uint32(), options, message.fillInterval);
                    break;
                case /* envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled */ 5:
                    message.runtimeEnabled = RuntimeFeatureFlag.internalBinaryRead(reader, reader.uint32(), options, message.runtimeEnabled);
                    break;
                case /* bool enable_response_trailers */ 6:
                    message.enableResponseTrailers = reader.bool();
                    break;
                case /* string response_trailer_prefix */ 7:
                    message.responseTrailerPrefix = reader.string();
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
    internalBinaryWrite(message: BandwidthLimit, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string stat_prefix = 1; */
        if (message.statPrefix !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.statPrefix);
        /* envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit.EnableMode enable_mode = 2; */
        if (message.enableMode !== 0)
            writer.tag(2, WireType.Varint).int32(message.enableMode);
        /* google.protobuf.UInt64Value limit_kbps = 3; */
        if (message.limitKbps)
            UInt64Value.internalBinaryWrite(message.limitKbps, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration fill_interval = 4; */
        if (message.fillInterval)
            Duration.internalBinaryWrite(message.fillInterval, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.RuntimeFeatureFlag runtime_enabled = 5; */
        if (message.runtimeEnabled)
            RuntimeFeatureFlag.internalBinaryWrite(message.runtimeEnabled, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* bool enable_response_trailers = 6; */
        if (message.enableResponseTrailers !== false)
            writer.tag(6, WireType.Varint).bool(message.enableResponseTrailers);
        /* string response_trailer_prefix = 7; */
        if (message.responseTrailerPrefix !== "")
            writer.tag(7, WireType.LengthDelimited).string(message.responseTrailerPrefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.bandwidth_limit.v3.BandwidthLimit
 */
export const BandwidthLimit = new BandwidthLimit$Type();
