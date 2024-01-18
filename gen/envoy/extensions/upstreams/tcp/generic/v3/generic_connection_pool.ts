// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/upstreams/tcp/generic/v3/generic_connection_pool.proto" (package "envoy.extensions.upstreams.tcp.generic.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: Generic Connection Pool]

/**
 * A connection pool which forwards downstream TCP as TCP or HTTP to upstream,
 * based on CONNECT configuration.
 * [#extension: envoy.upstreams.tcp.generic]
 *
 * @generated from protobuf message envoy.extensions.upstreams.tcp.generic.v3.GenericConnectionPoolProto
 */
export interface GenericConnectionPoolProto {
}
// @generated message type with reflection information, may provide speed optimized methods
class GenericConnectionPoolProto$Type extends MessageType<GenericConnectionPoolProto> {
    constructor() {
        super("envoy.extensions.upstreams.tcp.generic.v3.GenericConnectionPoolProto", []);
    }
    create(value?: PartialMessage<GenericConnectionPoolProto>): GenericConnectionPoolProto {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<GenericConnectionPoolProto>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GenericConnectionPoolProto): GenericConnectionPoolProto {
        return target ?? this.create();
    }
    internalBinaryWrite(message: GenericConnectionPoolProto, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.upstreams.tcp.generic.v3.GenericConnectionPoolProto
 */
export const GenericConnectionPoolProto = new GenericConnectionPoolProto$Type();
