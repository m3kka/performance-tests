// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/cors/v3/cors.proto" (package "envoy.extensions.filters.http.cors.v3", syntax proto3)
// tslint:disable
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { RuntimeFractionalPercent } from "../../../../../config/core/v3/base";
import { BoolValue } from "../../../../../../google/protobuf/wrappers";
import { StringMatcher } from "../../../../../type/matcher/v3/string";
// [#protodoc-title: Cors]
// CORS Filter :ref:`configuration overview <config_http_filters_cors>`.
// [#extension: envoy.filters.http.cors]

/**
 * Cors filter config. Set this in
 * ref:`http_filters <envoy_v3_api_field_extensions.filters.network.http_connection_manager.v3.HttpConnectionManager.http_filters>`
 * to enable the CORS filter.
 *
 * Please note that the :ref:`CorsPolicy <envoy_v3_api_msg_extensions.filters.http.cors.v3.CorsPolicy>`
 * must be configured in the ``RouteConfiguration`` as ``typed_per_filter_config`` at some level to make the filter work.
 *
 * @generated from protobuf message envoy.extensions.filters.http.cors.v3.Cors
 */
export interface Cors {
}
/**
 * Per route configuration for the CORS filter. This configuration should be configured in the ``RouteConfiguration`` as ``typed_per_filter_config`` at some level to
 * make the filter work.
 * [#next-free-field: 10]
 *
 * @generated from protobuf message envoy.extensions.filters.http.cors.v3.CorsPolicy
 */
export interface CorsPolicy {
    /**
     * Specifies string patterns that match allowed origins. An origin is allowed if any of the
     * string matchers match.
     *
     * @generated from protobuf field: repeated envoy.type.matcher.v3.StringMatcher allow_origin_string_match = 1;
     */
    allowOriginStringMatch: StringMatcher[];
    /**
     * Specifies the content for the ``access-control-allow-methods`` header.
     *
     * @generated from protobuf field: string allow_methods = 2;
     */
    allowMethods: string;
    /**
     * Specifies the content for the ``access-control-allow-headers`` header.
     *
     * @generated from protobuf field: string allow_headers = 3;
     */
    allowHeaders: string;
    /**
     * Specifies the content for the ``access-control-expose-headers`` header.
     *
     * @generated from protobuf field: string expose_headers = 4;
     */
    exposeHeaders: string;
    /**
     * Specifies the content for the ``access-control-max-age`` header.
     *
     * @generated from protobuf field: string max_age = 5;
     */
    maxAge: string;
    /**
     * Specifies whether the resource allows credentials.
     *
     * @generated from protobuf field: google.protobuf.BoolValue allow_credentials = 6;
     */
    allowCredentials?: BoolValue;
    /**
     * Specifies the % of requests for which the CORS filter is enabled.
     *
     * If neither ``filter_enabled``, nor ``shadow_enabled`` are specified, the CORS
     * filter will be enabled for 100% of the requests.
     *
     * If :ref:`runtime_key <envoy_v3_api_field_config.core.v3.RuntimeFractionalPercent.runtime_key>` is
     * specified, Envoy will lookup the runtime key to get the percentage of requests to filter.
     *
     * @generated from protobuf field: envoy.config.core.v3.RuntimeFractionalPercent filter_enabled = 7;
     */
    filterEnabled?: RuntimeFractionalPercent;
    /**
     * Specifies the % of requests for which the CORS policies will be evaluated and tracked, but not
     * enforced.
     *
     * This field is intended to be used when ``filter_enabled`` is off. That field have to explicitly disable
     * the filter in order for this setting to take effect.
     *
     * If :ref:`runtime_key <envoy_v3_api_field_config.core.v3.RuntimeFractionalPercent.runtime_key>` is specified,
     * Envoy will lookup the runtime key to get the percentage of requests for which it will evaluate
     * and track the request's ``Origin`` to determine if it's valid but will not enforce any policies.
     *
     * @generated from protobuf field: envoy.config.core.v3.RuntimeFractionalPercent shadow_enabled = 8;
     */
    shadowEnabled?: RuntimeFractionalPercent;
    /**
     * Specify whether allow requests whose target server's IP address is more private than that from
     * which the request initiator was fetched.
     *
     * More details refer to https://developer.chrome.com/blog/private-network-access-preflight.
     *
     * @generated from protobuf field: google.protobuf.BoolValue allow_private_network_access = 9;
     */
    allowPrivateNetworkAccess?: BoolValue;
}
// @generated message type with reflection information, may provide speed optimized methods
class Cors$Type extends MessageType<Cors> {
    constructor() {
        super("envoy.extensions.filters.http.cors.v3.Cors", [], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.http.cors.v2.Cors" } });
    }
    create(value?: PartialMessage<Cors>): Cors {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Cors>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Cors): Cors {
        return target ?? this.create();
    }
    internalBinaryWrite(message: Cors, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.cors.v3.Cors
 */
export const Cors = new Cors$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CorsPolicy$Type extends MessageType<CorsPolicy> {
    constructor() {
        super("envoy.extensions.filters.http.cors.v3.CorsPolicy", [
            { no: 1, name: "allow_origin_string_match", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => StringMatcher },
            { no: 2, name: "allow_methods", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "allow_headers", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 4, name: "expose_headers", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 5, name: "max_age", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 6, name: "allow_credentials", kind: "message", T: () => BoolValue },
            { no: 7, name: "filter_enabled", kind: "message", T: () => RuntimeFractionalPercent },
            { no: 8, name: "shadow_enabled", kind: "message", T: () => RuntimeFractionalPercent },
            { no: 9, name: "allow_private_network_access", kind: "message", T: () => BoolValue }
        ]);
    }
    create(value?: PartialMessage<CorsPolicy>): CorsPolicy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.allowOriginStringMatch = [];
        message.allowMethods = "";
        message.allowHeaders = "";
        message.exposeHeaders = "";
        message.maxAge = "";
        if (value !== undefined)
            reflectionMergePartial<CorsPolicy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CorsPolicy): CorsPolicy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.type.matcher.v3.StringMatcher allow_origin_string_match */ 1:
                    message.allowOriginStringMatch.push(StringMatcher.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string allow_methods */ 2:
                    message.allowMethods = reader.string();
                    break;
                case /* string allow_headers */ 3:
                    message.allowHeaders = reader.string();
                    break;
                case /* string expose_headers */ 4:
                    message.exposeHeaders = reader.string();
                    break;
                case /* string max_age */ 5:
                    message.maxAge = reader.string();
                    break;
                case /* google.protobuf.BoolValue allow_credentials */ 6:
                    message.allowCredentials = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.allowCredentials);
                    break;
                case /* envoy.config.core.v3.RuntimeFractionalPercent filter_enabled */ 7:
                    message.filterEnabled = RuntimeFractionalPercent.internalBinaryRead(reader, reader.uint32(), options, message.filterEnabled);
                    break;
                case /* envoy.config.core.v3.RuntimeFractionalPercent shadow_enabled */ 8:
                    message.shadowEnabled = RuntimeFractionalPercent.internalBinaryRead(reader, reader.uint32(), options, message.shadowEnabled);
                    break;
                case /* google.protobuf.BoolValue allow_private_network_access */ 9:
                    message.allowPrivateNetworkAccess = BoolValue.internalBinaryRead(reader, reader.uint32(), options, message.allowPrivateNetworkAccess);
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
    internalBinaryWrite(message: CorsPolicy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.type.matcher.v3.StringMatcher allow_origin_string_match = 1; */
        for (let i = 0; i < message.allowOriginStringMatch.length; i++)
            StringMatcher.internalBinaryWrite(message.allowOriginStringMatch[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string allow_methods = 2; */
        if (message.allowMethods !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.allowMethods);
        /* string allow_headers = 3; */
        if (message.allowHeaders !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.allowHeaders);
        /* string expose_headers = 4; */
        if (message.exposeHeaders !== "")
            writer.tag(4, WireType.LengthDelimited).string(message.exposeHeaders);
        /* string max_age = 5; */
        if (message.maxAge !== "")
            writer.tag(5, WireType.LengthDelimited).string(message.maxAge);
        /* google.protobuf.BoolValue allow_credentials = 6; */
        if (message.allowCredentials)
            BoolValue.internalBinaryWrite(message.allowCredentials, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.RuntimeFractionalPercent filter_enabled = 7; */
        if (message.filterEnabled)
            RuntimeFractionalPercent.internalBinaryWrite(message.filterEnabled, writer.tag(7, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.RuntimeFractionalPercent shadow_enabled = 8; */
        if (message.shadowEnabled)
            RuntimeFractionalPercent.internalBinaryWrite(message.shadowEnabled, writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.BoolValue allow_private_network_access = 9; */
        if (message.allowPrivateNetworkAccess)
            BoolValue.internalBinaryWrite(message.allowPrivateNetworkAccess, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.cors.v3.CorsPolicy
 */
export const CorsPolicy = new CorsPolicy$Type();
