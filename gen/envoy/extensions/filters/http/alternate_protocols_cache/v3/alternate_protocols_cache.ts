// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/alternate_protocols_cache/v3/alternate_protocols_cache.proto" (package "envoy.extensions.filters.http.alternate_protocols_cache.v3", syntax proto3)
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
import { AlternateProtocolsCacheOptions } from "../../../../../config/core/v3/protocol";
// [#protodoc-title: Alternate Protocols Cache]

/**
 * Configuration for the alternate protocols cache HTTP filter.
 * [#extension: envoy.filters.http.alternate_protocols_cache]
 *
 * @generated from protobuf message envoy.extensions.filters.http.alternate_protocols_cache.v3.FilterConfig
 */
export interface FilterConfig {
    /**
     * If set, causes the use of the alternate protocols cache, which is responsible for
     * parsing and caching HTTP Alt-Svc headers. This enables the use of HTTP/3 for upstream
     * servers that advertise supporting it.
     * TODO(RyanTheOptimist): Make this field required when HTTP/3 is enabled via auto_http.
     *
     * @generated from protobuf field: envoy.config.core.v3.AlternateProtocolsCacheOptions alternate_protocols_cache_options = 1;
     */
    alternateProtocolsCacheOptions?: AlternateProtocolsCacheOptions;
}
// @generated message type with reflection information, may provide speed optimized methods
class FilterConfig$Type extends MessageType<FilterConfig> {
    constructor() {
        super("envoy.extensions.filters.http.alternate_protocols_cache.v3.FilterConfig", [
            { no: 1, name: "alternate_protocols_cache_options", kind: "message", T: () => AlternateProtocolsCacheOptions }
        ]);
    }
    create(value?: PartialMessage<FilterConfig>): FilterConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<FilterConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: FilterConfig): FilterConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.AlternateProtocolsCacheOptions alternate_protocols_cache_options */ 1:
                    message.alternateProtocolsCacheOptions = AlternateProtocolsCacheOptions.internalBinaryRead(reader, reader.uint32(), options, message.alternateProtocolsCacheOptions);
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
    internalBinaryWrite(message: FilterConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.AlternateProtocolsCacheOptions alternate_protocols_cache_options = 1; */
        if (message.alternateProtocolsCacheOptions)
            AlternateProtocolsCacheOptions.internalBinaryWrite(message.alternateProtocolsCacheOptions, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.alternate_protocols_cache.v3.FilterConfig
 */
export const FilterConfig = new FilterConfig$Type();
