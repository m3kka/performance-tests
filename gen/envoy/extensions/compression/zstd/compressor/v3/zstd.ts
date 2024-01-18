// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/compression/zstd/compressor/v3/zstd.proto" (package "envoy.extensions.compression.zstd.compressor.v3", syntax proto3)
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
import { DataSource } from "../../../../../config/core/v3/base";
import { UInt32Value } from "../../../../../../google/protobuf/wrappers";
// [#protodoc-title: Zstd Compressor]
// [#extension: envoy.compression.zstd.compressor]

/**
 * [#next-free-field: 6]
 *
 * @generated from protobuf message envoy.extensions.compression.zstd.compressor.v3.Zstd
 */
export interface Zstd {
    /**
     * Set compression parameters according to pre-defined compression level table.
     * Note that exact compression parameters are dynamically determined,
     * depending on both compression level and source content size (when known).
     * Value 0 means default, and default level is 3.
     * Setting a level does not automatically set all other compression parameters
     * to default. Setting this will however eventually dynamically impact the compression
     * parameters which have not been manually set. The manually set
     * ones will 'stick'.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value compression_level = 1;
     */
    compressionLevel?: UInt32Value;
    /**
     * A 32-bits checksum of content is written at end of frame. If not set, defaults to false.
     *
     * @generated from protobuf field: bool enable_checksum = 2;
     */
    enableChecksum: boolean;
    /**
     * The higher the value of selected strategy, the more complex it is,
     * resulting in stronger and slower compression.
     * Special: value 0 means "use default strategy".
     *
     * @generated from protobuf field: envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy strategy = 3;
     */
    strategy: Zstd_Strategy;
    /**
     * A dictionary for compression. Zstd offers dictionary compression, which greatly improves
     * efficiency on small files and messages. Each dictionary will be generated with a dictionary ID
     * that can be used to search the same dictionary during decompression.
     * Please refer to `zstd manual <https://github.com/facebook/zstd/blob/dev/programs/zstd.1.md#dictionary-builder>`_
     * to train a specific dictionary for compression.
     *
     * @generated from protobuf field: envoy.config.core.v3.DataSource dictionary = 4;
     */
    dictionary?: DataSource;
    /**
     * Value for compressor's next output buffer. If not set, defaults to 4096.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value chunk_size = 5;
     */
    chunkSize?: UInt32Value;
}
/**
 * Reference to http://facebook.github.io/zstd/zstd_manual.html
 *
 * @generated from protobuf enum envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy
 */
export enum Zstd_Strategy {
    /**
     * @generated from protobuf enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * @generated from protobuf enum value: FAST = 1;
     */
    FAST = 1,
    /**
     * @generated from protobuf enum value: DFAST = 2;
     */
    DFAST = 2,
    /**
     * @generated from protobuf enum value: GREEDY = 3;
     */
    GREEDY = 3,
    /**
     * @generated from protobuf enum value: LAZY = 4;
     */
    LAZY = 4,
    /**
     * @generated from protobuf enum value: LAZY2 = 5;
     */
    LAZY2 = 5,
    /**
     * @generated from protobuf enum value: BTLAZY2 = 6;
     */
    BTLAZY2 = 6,
    /**
     * @generated from protobuf enum value: BTOPT = 7;
     */
    BTOPT = 7,
    /**
     * @generated from protobuf enum value: BTULTRA = 8;
     */
    BTULTRA = 8,
    /**
     * @generated from protobuf enum value: BTULTRA2 = 9;
     */
    BTULTRA2 = 9
}
// @generated message type with reflection information, may provide speed optimized methods
class Zstd$Type extends MessageType<Zstd> {
    constructor() {
        super("envoy.extensions.compression.zstd.compressor.v3.Zstd", [
            { no: 1, name: "compression_level", kind: "message", T: () => UInt32Value },
            { no: 2, name: "enable_checksum", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "strategy", kind: "enum", T: () => ["envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy", Zstd_Strategy], options: { "validate.rules": { enum: { definedOnly: true } } } },
            { no: 4, name: "dictionary", kind: "message", T: () => DataSource },
            { no: 5, name: "chunk_size", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { lte: 65536, gte: 4096 } } } }
        ]);
    }
    create(value?: PartialMessage<Zstd>): Zstd {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.enableChecksum = false;
        message.strategy = 0;
        if (value !== undefined)
            reflectionMergePartial<Zstd>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Zstd): Zstd {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.UInt32Value compression_level */ 1:
                    message.compressionLevel = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.compressionLevel);
                    break;
                case /* bool enable_checksum */ 2:
                    message.enableChecksum = reader.bool();
                    break;
                case /* envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy strategy */ 3:
                    message.strategy = reader.int32();
                    break;
                case /* envoy.config.core.v3.DataSource dictionary */ 4:
                    message.dictionary = DataSource.internalBinaryRead(reader, reader.uint32(), options, message.dictionary);
                    break;
                case /* google.protobuf.UInt32Value chunk_size */ 5:
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
    internalBinaryWrite(message: Zstd, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.UInt32Value compression_level = 1; */
        if (message.compressionLevel)
            UInt32Value.internalBinaryWrite(message.compressionLevel, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* bool enable_checksum = 2; */
        if (message.enableChecksum !== false)
            writer.tag(2, WireType.Varint).bool(message.enableChecksum);
        /* envoy.extensions.compression.zstd.compressor.v3.Zstd.Strategy strategy = 3; */
        if (message.strategy !== 0)
            writer.tag(3, WireType.Varint).int32(message.strategy);
        /* envoy.config.core.v3.DataSource dictionary = 4; */
        if (message.dictionary)
            DataSource.internalBinaryWrite(message.dictionary, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value chunk_size = 5; */
        if (message.chunkSize)
            UInt32Value.internalBinaryWrite(message.chunkSize, writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.compression.zstd.compressor.v3.Zstd
 */
export const Zstd = new Zstd$Type();
