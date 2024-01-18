// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/quic/connection_id_generator/v3/envoy_deterministic_connection_id_generator.proto" (package "envoy.extensions.quic.connection_id_generator.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
// [#protodoc-title: QUIC connection ID generator config]
// [#extension: envoy.quic.deterministic_connection_id_generator]

/**
 * Configuration for a connection ID generator implementation which issues predictable CIDs with stable first 4 bytes.
 *
 * @generated from protobuf message envoy.extensions.quic.connection_id_generator.v3.DeterministicConnectionIdGeneratorConfig
 */
export interface DeterministicConnectionIdGeneratorConfig {
}
// @generated message type with reflection information, may provide speed optimized methods
class DeterministicConnectionIdGeneratorConfig$Type extends MessageType<DeterministicConnectionIdGeneratorConfig> {
    constructor() {
        super("envoy.extensions.quic.connection_id_generator.v3.DeterministicConnectionIdGeneratorConfig", []);
    }
    create(value?: PartialMessage<DeterministicConnectionIdGeneratorConfig>): DeterministicConnectionIdGeneratorConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<DeterministicConnectionIdGeneratorConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeterministicConnectionIdGeneratorConfig): DeterministicConnectionIdGeneratorConfig {
        return target ?? this.create();
    }
    internalBinaryWrite(message: DeterministicConnectionIdGeneratorConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.quic.connection_id_generator.v3.DeterministicConnectionIdGeneratorConfig
 */
export const DeterministicConnectionIdGeneratorConfig = new DeterministicConnectionIdGeneratorConfig$Type();
