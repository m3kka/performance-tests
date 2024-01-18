// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/event_reporting/v2alpha/event_reporting_service.proto" (package "envoy.service.event_reporting.v2alpha", syntax proto3)
// tslint:disable
import { ServiceType } from "@protobuf-ts/runtime-rpc";
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { Node } from "../../../api/v2/core/base";
import { Any } from "../../../../google/protobuf/any";
/**
 * [#not-implemented-hide:]
 * An events envoy sends to the management server.
 *
 * @generated from protobuf message envoy.service.event_reporting.v2alpha.StreamEventsRequest
 */
export interface StreamEventsRequest {
    /**
     * Identifier data that will only be sent in the first message on the stream. This is effectively
     * structured metadata and is a performance optimization.
     *
     * @generated from protobuf field: envoy.service.event_reporting.v2alpha.StreamEventsRequest.Identifier identifier = 1;
     */
    identifier?: StreamEventsRequest_Identifier;
    /**
     * Batch of events. When the stream is already active, it will be the events occurred
     * since the last message had been sent. If the server receives unknown event type, it should
     * silently ignore it.
     *
     * The following events are supported:
     *
     * * :ref:`HealthCheckEvent <envoy_api_msg_data.core.v2alpha.HealthCheckEvent>`
     * * :ref:`OutlierDetectionEvent <envoy_api_msg_data.cluster.v2alpha.OutlierDetectionEvent>`
     *
     * @generated from protobuf field: repeated google.protobuf.Any events = 2;
     */
    events: Any[];
}
/**
 * @generated from protobuf message envoy.service.event_reporting.v2alpha.StreamEventsRequest.Identifier
 */
export interface StreamEventsRequest_Identifier {
    /**
     * The node sending the event messages over the stream.
     *
     * @generated from protobuf field: envoy.api.v2.core.Node node = 1;
     */
    node?: Node;
}
/**
 * [#not-implemented-hide:]
 * The management server may send envoy a StreamEventsResponse to tell which events the server
 * is interested in. In future, with aggregated event reporting service, this message will
 * contain, for example, clusters the envoy should send events for, or event types the server
 * wants to process.
 *
 * @generated from protobuf message envoy.service.event_reporting.v2alpha.StreamEventsResponse
 */
export interface StreamEventsResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class StreamEventsRequest$Type extends MessageType<StreamEventsRequest> {
    constructor() {
        super("envoy.service.event_reporting.v2alpha.StreamEventsRequest", [
            { no: 1, name: "identifier", kind: "message", T: () => StreamEventsRequest_Identifier },
            { no: 2, name: "events", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Any, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<StreamEventsRequest>): StreamEventsRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.events = [];
        if (value !== undefined)
            reflectionMergePartial<StreamEventsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamEventsRequest): StreamEventsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.event_reporting.v2alpha.StreamEventsRequest.Identifier identifier */ 1:
                    message.identifier = StreamEventsRequest_Identifier.internalBinaryRead(reader, reader.uint32(), options, message.identifier);
                    break;
                case /* repeated google.protobuf.Any events */ 2:
                    message.events.push(Any.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: StreamEventsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.event_reporting.v2alpha.StreamEventsRequest.Identifier identifier = 1; */
        if (message.identifier)
            StreamEventsRequest_Identifier.internalBinaryWrite(message.identifier, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated google.protobuf.Any events = 2; */
        for (let i = 0; i < message.events.length; i++)
            Any.internalBinaryWrite(message.events[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.event_reporting.v2alpha.StreamEventsRequest
 */
export const StreamEventsRequest = new StreamEventsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamEventsRequest_Identifier$Type extends MessageType<StreamEventsRequest_Identifier> {
    constructor() {
        super("envoy.service.event_reporting.v2alpha.StreamEventsRequest.Identifier", [
            { no: 1, name: "node", kind: "message", T: () => Node, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<StreamEventsRequest_Identifier>): StreamEventsRequest_Identifier {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamEventsRequest_Identifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamEventsRequest_Identifier): StreamEventsRequest_Identifier {
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
    internalBinaryWrite(message: StreamEventsRequest_Identifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
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
 * @generated MessageType for protobuf message envoy.service.event_reporting.v2alpha.StreamEventsRequest.Identifier
 */
export const StreamEventsRequest_Identifier = new StreamEventsRequest_Identifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamEventsResponse$Type extends MessageType<StreamEventsResponse> {
    constructor() {
        super("envoy.service.event_reporting.v2alpha.StreamEventsResponse", []);
    }
    create(value?: PartialMessage<StreamEventsResponse>): StreamEventsResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamEventsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamEventsResponse): StreamEventsResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StreamEventsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.event_reporting.v2alpha.StreamEventsResponse
 */
export const StreamEventsResponse = new StreamEventsResponse$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.event_reporting.v2alpha.EventReportingService
 */
export const EventReportingService = new ServiceType("envoy.service.event_reporting.v2alpha.EventReportingService", [
    { name: "StreamEvents", serverStreaming: true, clientStreaming: true, options: {}, I: StreamEventsRequest, O: StreamEventsResponse }
]);
