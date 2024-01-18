// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/http/original_ip_detection/xff/v3/xff.proto" (package "envoy.extensions.http.original_ip_detection.xff.v3", syntax proto3)
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
// [#protodoc-title: XFF original IP detection extension]

/**
 * This extension allows for the original downstream remote IP to be detected
 * by reading the :ref:`config_http_conn_man_headers_x-forwarded-for` header.
 *
 * [#extension: envoy.http.original_ip_detection.xff]
 *
 * @generated from protobuf message envoy.extensions.http.original_ip_detection.xff.v3.XffConfig
 */
export interface XffConfig {
    /**
     * The number of additional ingress proxy hops from the right side of the
     * :ref:`config_http_conn_man_headers_x-forwarded-for` HTTP header to trust when
     * determining the origin client's IP address. The default is zero if this option
     * is not specified. See the documentation for
     * :ref:`config_http_conn_man_headers_x-forwarded-for` for more information.
     *
     * @generated from protobuf field: uint32 xff_num_trusted_hops = 1;
     */
    xffNumTrustedHops: number;
}
// @generated message type with reflection information, may provide speed optimized methods
class XffConfig$Type extends MessageType<XffConfig> {
    constructor() {
        super("envoy.extensions.http.original_ip_detection.xff.v3.XffConfig", [
            { no: 1, name: "xff_num_trusted_hops", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]);
    }
    create(value?: PartialMessage<XffConfig>): XffConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.xffNumTrustedHops = 0;
        if (value !== undefined)
            reflectionMergePartial<XffConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: XffConfig): XffConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* uint32 xff_num_trusted_hops */ 1:
                    message.xffNumTrustedHops = reader.uint32();
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
    internalBinaryWrite(message: XffConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* uint32 xff_num_trusted_hops = 1; */
        if (message.xffNumTrustedHops !== 0)
            writer.tag(1, WireType.Varint).uint32(message.xffNumTrustedHops);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.http.original_ip_detection.xff.v3.XffConfig
 */
export const XffConfig = new XffConfig$Type();
