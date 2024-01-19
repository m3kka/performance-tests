// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/data/tap/v2alpha/common.proto" (package "envoy.data.tap.v2alpha", syntax proto3)
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
// [#protodoc-title: Tap common data]

/**
 * Wrapper for tapped body data. This includes HTTP request/response body, transport socket received
 * and transmitted data, etc.
 *
 * @generated from protobuf message envoy.data.tap.v2alpha.Body
 */
export interface Body {
    /**
     * @generated from protobuf oneof: body_type
     */
    bodyType: {
        oneofKind: "asBytes";
        /**
         * Body data as bytes. By default, tap body data will be present in this field, as the proto
         * `bytes` type can contain any valid byte.
         *
         * @generated from protobuf field: bytes as_bytes = 1;
         */
        asBytes: Uint8Array;
    } | {
        oneofKind: "asString";
        /**
         * Body data as string. This field is only used when the :ref:`JSON_BODY_AS_STRING
         * <envoy_api_enum_value_service.tap.v2alpha.OutputSink.Format.JSON_BODY_AS_STRING>` sink
         * format type is selected. See the documentation for that option for why this is useful.
         *
         * @generated from protobuf field: string as_string = 2;
         */
        asString: string;
    } | {
        oneofKind: undefined;
    };
    /**
     * Specifies whether body data has been truncated to fit within the specified
     * :ref:`max_buffered_rx_bytes
     * <envoy_api_field_service.tap.v2alpha.OutputConfig.max_buffered_rx_bytes>` and
     * :ref:`max_buffered_tx_bytes
     * <envoy_api_field_service.tap.v2alpha.OutputConfig.max_buffered_tx_bytes>` settings.
     *
     * @generated from protobuf field: bool truncated = 3;
     */
    truncated: boolean;
}
// @generated message type with reflection information, may provide speed optimized methods
class Body$Type extends MessageType<Body> {
    constructor() {
        super("envoy.data.tap.v2alpha.Body", [
            { no: 1, name: "as_bytes", kind: "scalar", oneof: "bodyType", T: 12 /*ScalarType.BYTES*/ },
            { no: 2, name: "as_string", kind: "scalar", oneof: "bodyType", T: 9 /*ScalarType.STRING*/ },
            { no: 3, name: "truncated", kind: "scalar", T: 8 /*ScalarType.BOOL*/ }
        ]);
    }
    create(value?: PartialMessage<Body>): Body {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.bodyType = { oneofKind: undefined };
        message.truncated = false;
        if (value !== undefined)
            reflectionMergePartial<Body>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Body): Body {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bytes as_bytes */ 1:
                    message.bodyType = {
                        oneofKind: "asBytes",
                        asBytes: reader.bytes()
                    };
                    break;
                case /* string as_string */ 2:
                    message.bodyType = {
                        oneofKind: "asString",
                        asString: reader.string()
                    };
                    break;
                case /* bool truncated */ 3:
                    message.truncated = reader.bool();
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
    internalBinaryWrite(message: Body, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bytes as_bytes = 1; */
        if (message.bodyType.oneofKind === "asBytes")
            writer.tag(1, WireType.LengthDelimited).bytes(message.bodyType.asBytes);
        /* string as_string = 2; */
        if (message.bodyType.oneofKind === "asString")
            writer.tag(2, WireType.LengthDelimited).string(message.bodyType.asString);
        /* bool truncated = 3; */
        if (message.truncated !== false)
            writer.tag(3, WireType.Varint).bool(message.truncated);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.tap.v2alpha.Body
 */
export const Body = new Body$Type();