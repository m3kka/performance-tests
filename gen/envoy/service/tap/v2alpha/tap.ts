// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/tap/v2alpha/tap.proto" (package "envoy.service.tap.v2alpha", syntax proto3)
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
import { TraceWrapper } from "../../../data/tap/v2alpha/wrapper";
/**
 * [#not-implemented-hide:] Stream message for the Tap API. Envoy will open a stream to the server
 * and stream taps without ever expecting a response.
 *
 * @generated from protobuf message envoy.service.tap.v2alpha.StreamTapsRequest
 */
export interface StreamTapsRequest {
    /**
     * Identifier data effectively is a structured metadata. As a performance optimization this will
     * only be sent in the first message on the stream.
     *
     * @generated from protobuf field: envoy.service.tap.v2alpha.StreamTapsRequest.Identifier identifier = 1;
     */
    identifier?: StreamTapsRequest_Identifier;
    /**
     * The trace id. this can be used to merge together a streaming trace. Note that the trace_id
     * is not guaranteed to be spatially or temporally unique.
     *
     * @generated from protobuf field: uint64 trace_id = 2;
     */
    traceId: bigint;
    /**
     * The trace data.
     *
     * @generated from protobuf field: envoy.data.tap.v2alpha.TraceWrapper trace = 3;
     */
    trace?: TraceWrapper;
}
/**
 * @generated from protobuf message envoy.service.tap.v2alpha.StreamTapsRequest.Identifier
 */
export interface StreamTapsRequest_Identifier {
    /**
     * The node sending taps over the stream.
     *
     * @generated from protobuf field: envoy.api.v2.core.Node node = 1;
     */
    node?: Node;
    /**
     * The opaque identifier that was set in the :ref:`output config
     * <envoy_api_field_service.tap.v2alpha.StreamingGrpcSink.tap_id>`.
     *
     * @generated from protobuf field: string tap_id = 2;
     */
    tapId: string;
}
/**
 * [#not-implemented-hide:]
 *
 * @generated from protobuf message envoy.service.tap.v2alpha.StreamTapsResponse
 */
export interface StreamTapsResponse {
}
// @generated message type with reflection information, may provide speed optimized methods
class StreamTapsRequest$Type extends MessageType<StreamTapsRequest> {
    constructor() {
        super("envoy.service.tap.v2alpha.StreamTapsRequest", [
            { no: 1, name: "identifier", kind: "message", T: () => StreamTapsRequest_Identifier },
            { no: 2, name: "trace_id", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "trace", kind: "message", T: () => TraceWrapper }
        ]);
    }
    create(value?: PartialMessage<StreamTapsRequest>): StreamTapsRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.traceId = 0n;
        if (value !== undefined)
            reflectionMergePartial<StreamTapsRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTapsRequest): StreamTapsRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.tap.v2alpha.StreamTapsRequest.Identifier identifier */ 1:
                    message.identifier = StreamTapsRequest_Identifier.internalBinaryRead(reader, reader.uint32(), options, message.identifier);
                    break;
                case /* uint64 trace_id */ 2:
                    message.traceId = reader.uint64().toBigInt();
                    break;
                case /* envoy.data.tap.v2alpha.TraceWrapper trace */ 3:
                    message.trace = TraceWrapper.internalBinaryRead(reader, reader.uint32(), options, message.trace);
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
    internalBinaryWrite(message: StreamTapsRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.tap.v2alpha.StreamTapsRequest.Identifier identifier = 1; */
        if (message.identifier)
            StreamTapsRequest_Identifier.internalBinaryWrite(message.identifier, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* uint64 trace_id = 2; */
        if (message.traceId !== 0n)
            writer.tag(2, WireType.Varint).uint64(message.traceId);
        /* envoy.data.tap.v2alpha.TraceWrapper trace = 3; */
        if (message.trace)
            TraceWrapper.internalBinaryWrite(message.trace, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.tap.v2alpha.StreamTapsRequest
 */
export const StreamTapsRequest = new StreamTapsRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamTapsRequest_Identifier$Type extends MessageType<StreamTapsRequest_Identifier> {
    constructor() {
        super("envoy.service.tap.v2alpha.StreamTapsRequest.Identifier", [
            { no: 1, name: "node", kind: "message", T: () => Node, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "tap_id", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<StreamTapsRequest_Identifier>): StreamTapsRequest_Identifier {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.tapId = "";
        if (value !== undefined)
            reflectionMergePartial<StreamTapsRequest_Identifier>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTapsRequest_Identifier): StreamTapsRequest_Identifier {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.api.v2.core.Node node */ 1:
                    message.node = Node.internalBinaryRead(reader, reader.uint32(), options, message.node);
                    break;
                case /* string tap_id */ 2:
                    message.tapId = reader.string();
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
    internalBinaryWrite(message: StreamTapsRequest_Identifier, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.api.v2.core.Node node = 1; */
        if (message.node)
            Node.internalBinaryWrite(message.node, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string tap_id = 2; */
        if (message.tapId !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.tapId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.tap.v2alpha.StreamTapsRequest.Identifier
 */
export const StreamTapsRequest_Identifier = new StreamTapsRequest_Identifier$Type();
// @generated message type with reflection information, may provide speed optimized methods
class StreamTapsResponse$Type extends MessageType<StreamTapsResponse> {
    constructor() {
        super("envoy.service.tap.v2alpha.StreamTapsResponse", []);
    }
    create(value?: PartialMessage<StreamTapsResponse>): StreamTapsResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<StreamTapsResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: StreamTapsResponse): StreamTapsResponse {
        return target ?? this.create();
    }
    internalBinaryWrite(message: StreamTapsResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.tap.v2alpha.StreamTapsResponse
 */
export const StreamTapsResponse = new StreamTapsResponse$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.tap.v2alpha.TapSinkService
 */
export const TapSinkService = new ServiceType("envoy.service.tap.v2alpha.TapSinkService", [
    { name: "StreamTaps", clientStreaming: true, options: {}, I: StreamTapsRequest, O: StreamTapsResponse }
]);
