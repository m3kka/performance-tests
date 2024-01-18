// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/metrics/v2/metrics_service.proto" (package "envoy.service.metrics.v2", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Node } from "../../../api/v2/core/base";
import { MetricFamily } from "../../../../io/prometheus/client/metrics";
/**
 * @generated from protobuf message envoy.service.metrics.v2.StreamMetricsResponse
 */
export interface StreamMetricsResponse {
}
/**
 * @generated from protobuf message envoy.service.metrics.v2.StreamMetricsMessage
 */
export interface StreamMetricsMessage {
    /**
     * Identifier data effectively is a structured metadata. As a performance optimization this will
     * only be sent in the first message on the stream.
     *
     * @generated from protobuf field: envoy.service.metrics.v2.StreamMetricsMessage.Identifier identifier = 1;
     */
    identifier?: StreamMetricsMessage_Identifier;
    /**
     * A list of metric entries
     *
     * @generated from protobuf field: repeated io.prometheus.client.MetricFamily envoy_metrics = 2;
     */
    envoyMetrics: MetricFamily[];
}
/**
 * @generated from protobuf message envoy.service.metrics.v2.StreamMetricsMessage.Identifier
 */
export interface StreamMetricsMessage_Identifier {
    /**
     * The node sending metrics over the stream.
     *
     * @generated from protobuf field: envoy.api.v2.core.Node node = 1;
     */
    node?: Node;
}
// @generated message type with reflection information, may provide speed optimized methods
class StreamMetricsResponse$Type extends MessageType<StreamMetricsResponse> {
    constructor() {
        super("envoy.service.metrics.v2.StreamMetricsResponse", []);
    }
    create(value?: PartialMessage<StreamMetricsResponse>): StreamMetricsResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamMetricsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamMetricsResponse): StreamMetricsResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StreamMetricsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.metrics.v2.StreamMetricsResponse
 */
export const StreamMetricsResponse = new StreamMetricsResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMetricsMessage$Type extends MessageType<StreamMetricsMessage> {
    constructor() {
        super("envoy.service.metrics.v2.StreamMetricsMessage", [
            { no: 1, name: "identifier", kind: "message", T: () => StreamMetricsMessage_Identifier },
            { no: 2, name: "envoy_metrics", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => MetricFamily }
        ]);
    }
    create(value?: PartialMessage<StreamMetricsMessage>): StreamMetricsMessage {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.envoyMetrics = [];
        if (value !== undefined)
            reflectionMergePartial<StreamMetricsMessage>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamMetricsMessage): StreamMetricsMessage {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.metrics.v2.StreamMetricsMessage.Identifier identifier */ 1:
                    message.identifier = StreamMetricsMessage_Identifier.internalBinaryRead(reader, reader.uint32(), options, message.identifier);
                    break;
                case /* repeated io.prometheus.client.MetricFamily envoy_metrics */ 2:
                    message.envoyMetrics.push(MetricFamily.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: StreamMetricsMessage, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.metrics.v2.StreamMetricsMessage.Identifier identifier = 1; */
        if (message.identifier)
            StreamMetricsMessage_Identifier.internalBinaryWrite(message.identifier, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated io.prometheus.client.MetricFamily envoy_metrics = 2; */
        for (let i = 0; i < message.envoyMetrics.length; i++)
            MetricFamily.internalBinaryWrite(message.envoyMetrics[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.metrics.v2.StreamMetricsMessage
 */
export const StreamMetricsMessage = new StreamMetricsMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamMetricsMessage_Identifier$Type extends MessageType<StreamMetricsMessage_Identifier> {
    constructor() {
        super("envoy.service.metrics.v2.StreamMetricsMessage.Identifier", [
            { no: 1, name: "node", kind: "message", T: () => Node, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<StreamMetricsMessage_Identifier>): StreamMetricsMessage_Identifier {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamMetricsMessage_Identifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamMetricsMessage_Identifier): StreamMetricsMessage_Identifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.Node node */ 1:
                    message.node = Node.internalBinaryRead(reader, reader.uint32(), options, message.node);
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
    internalBinaryWrite(message: StreamMetricsMessage_Identifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.Node node = 1; */
        if (message.node)
            Node.internalBinaryWrite(message.node, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.metrics.v2.StreamMetricsMessage.Identifier
 */
export const StreamMetricsMessage_Identifier = new StreamMetricsMessage_Identifier$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.metrics.v2.MetricsService
 */
export const MetricsService = new ServiceType("envoy.service.metrics.v2.MetricsService", [
    { name: "StreamMetrics", clientStreaming: true, options: {}, I: StreamMetricsMessage, O: StreamMetricsResponse }
]);
