// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/filter/network/kafka_broker/v2alpha1/kafka_broker.proto" (package "envoy.config.filter.network.kafka_broker.v2alpha1", syntax proto3)
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
// [#protodoc-title: Kafka Broker]
// Kafka Broker :ref:`configuration overview <config_network_filters_kafka_broker>`.
// [#extension: envoy.filters.network.kafka_broker]

/**
 * @generated from protobuf message envoy.config.filter.network.kafka_broker.v2alpha1.KafkaBroker
 */
export interface KafkaBroker {
    /**
     * The prefix to use when emitting :ref:`statistics <config_network_filters_kafka_broker_stats>`.
     *
     * @generated from protobuf field: string stat_prefix = 1;
     */
    statPrefix: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class KafkaBroker$Type extends MessageType<KafkaBroker> {
    constructor() {
        super("envoy.config.filter.network.kafka_broker.v2alpha1.KafkaBroker", [
            { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<KafkaBroker>): KafkaBroker {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.statPrefix = "";
        if (value !== undefined)
            reflectionMergePartial<KafkaBroker>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: KafkaBroker): KafkaBroker {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string stat_prefix */ 1:
                    message.statPrefix = reader.string();
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
    internalBinaryWrite(message: KafkaBroker, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string stat_prefix = 1; */
        if (message.statPrefix !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.statPrefix);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.filter.network.kafka_broker.v2alpha1.KafkaBroker
 */
export const KafkaBroker = new KafkaBroker$Type();
