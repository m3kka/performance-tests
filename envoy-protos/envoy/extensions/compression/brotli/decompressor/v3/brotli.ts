// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/compression/brotli/decompressor/v3/brotli.proto" (package "envoy.extensions.compression.brotli.decompressor.v3", syntax proto3)
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
import { UInt32Value } from "../../../../../../google/protobuf/wrappers";
// [#protodoc-title: Brotli Decompressor]
// [#extension: envoy.compression.brotli.decompressor]

/**
 * @generated from protobuf message envoy.extensions.compression.brotli.decompressor.v3.Brotli
 */
export interface Brotli {
    /**
     * If true, disables "canny" ring buffer allocation strategy.
     * Ring buffer is allocated according to window size, despite the real size of the content.
     *
     * @generated from protobuf field: bool disable_ring_buffer_reallocation = 1;
     */
    disableRingBufferReallocation: boolean;
    /**
     * Value for decompressor's next output buffer. If not set, defaults to 4096.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value chunk_size = 2;
     */
    chunkSize?: UInt32Value;
}
// @generated message type with reflection information, may provide speed optimized methods
class Brotli$Type extends MessageType<Brotli> {
    constructor() {
        super("envoy.extensions.compression.brotli.decompressor.v3.Brotli", [
            { no: 1, name: "disable_ring_buffer_reallocation", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "chunk_size", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { lte: 65536, gte: 4096 } } } }
        ]);
    }
    create(value?: PartialMessage<Brotli>): Brotli {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.disableRingBufferReallocation = false;
        if (value !== undefined)
            reflectionMergePartial<Brotli>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Brotli): Brotli {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool disable_ring_buffer_reallocation */ 1:
                    message.disableRingBufferReallocation = reader.bool();
                    break;
                case /* google.protobuf.UInt32Value chunk_size */ 2:
                    message.chunkSize = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.chunkSize);
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
    internalBinaryWrite(message: Brotli, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool disable_ring_buffer_reallocation = 1; */
        if (message.disableRingBufferReallocation !== false)
            writer.tag(1, WireType.Varint).bool(message.disableRingBufferReallocation);
        /* google.protobuf.UInt32Value chunk_size = 2; */
        if (message.chunkSize)
            UInt32Value.internalBinaryWrite(message.chunkSize, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.compression.brotli.decompressor.v3.Brotli
 */
export const Brotli = new Brotli$Type();