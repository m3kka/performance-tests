// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/data/tap/v2alpha/wrapper.proto" (package "envoy.data.tap.v2alpha", syntax proto3)
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
import { SocketStreamedTraceSegment } from "./transport";
import { SocketBufferedTrace } from "./transport";
import { HttpStreamedTraceSegment } from "./http";
import { HttpBufferedTrace } from "./http";
// [#protodoc-title: Tap data wrappers]

/**
 * Wrapper for all fully buffered and streamed tap traces that Envoy emits. This is required for
 * sending traces over gRPC APIs or more easily persisting binary messages to files.
 *
 * @generated from protobuf message envoy.data.tap.v2alpha.TraceWrapper
 */
export interface TraceWrapper {
    /**
     * @generated from protobuf oneof: trace
     */
    trace: {
        oneofKind: "httpBufferedTrace";
        /**
         * An HTTP buffered tap trace.
         *
         * @generated from protobuf field: envoy.data.tap.v2alpha.HttpBufferedTrace http_buffered_trace = 1;
         */
        httpBufferedTrace: HttpBufferedTrace;
    } | {
        oneofKind: "httpStreamedTraceSegment";
        /**
         * An HTTP streamed tap trace segment.
         *
         * @generated from protobuf field: envoy.data.tap.v2alpha.HttpStreamedTraceSegment http_streamed_trace_segment = 2;
         */
        httpStreamedTraceSegment: HttpStreamedTraceSegment;
    } | {
        oneofKind: "socketBufferedTrace";
        /**
         * A socket buffered tap trace.
         *
         * @generated from protobuf field: envoy.data.tap.v2alpha.SocketBufferedTrace socket_buffered_trace = 3;
         */
        socketBufferedTrace: SocketBufferedTrace;
    } | {
        oneofKind: "socketStreamedTraceSegment";
        /**
         * A socket streamed tap trace segment.
         *
         * @generated from protobuf field: envoy.data.tap.v2alpha.SocketStreamedTraceSegment socket_streamed_trace_segment = 4;
         */
        socketStreamedTraceSegment: SocketStreamedTraceSegment;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class TraceWrapper$Type extends MessageType<TraceWrapper> {
    constructor() {
        super("envoy.data.tap.v2alpha.TraceWrapper", [
            { no: 1, name: "http_buffered_trace", kind: "message", oneof: "trace", T: () => HttpBufferedTrace },
            { no: 2, name: "http_streamed_trace_segment", kind: "message", oneof: "trace", T: () => HttpStreamedTraceSegment },
            { no: 3, name: "socket_buffered_trace", kind: "message", oneof: "trace", T: () => SocketBufferedTrace },
            { no: 4, name: "socket_streamed_trace_segment", kind: "message", oneof: "trace", T: () => SocketStreamedTraceSegment }
        ]);
    }
    create(value?: PartialMessage<TraceWrapper>): TraceWrapper {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.trace = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<TraceWrapper>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: TraceWrapper): TraceWrapper {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.data.tap.v2alpha.HttpBufferedTrace http_buffered_trace */ 1:
                    message.trace = {
                        oneofKind: "httpBufferedTrace",
                        httpBufferedTrace: HttpBufferedTrace.internalBinaryRead(reader, reader.uint32(), options, (message.trace as any).httpBufferedTrace)
                    };
                    break;
                case /* envoy.data.tap.v2alpha.HttpStreamedTraceSegment http_streamed_trace_segment */ 2:
                    message.trace = {
                        oneofKind: "httpStreamedTraceSegment",
                        httpStreamedTraceSegment: HttpStreamedTraceSegment.internalBinaryRead(reader, reader.uint32(), options, (message.trace as any).httpStreamedTraceSegment)
                    };
                    break;
                case /* envoy.data.tap.v2alpha.SocketBufferedTrace socket_buffered_trace */ 3:
                    message.trace = {
                        oneofKind: "socketBufferedTrace",
                        socketBufferedTrace: SocketBufferedTrace.internalBinaryRead(reader, reader.uint32(), options, (message.trace as any).socketBufferedTrace)
                    };
                    break;
                case /* envoy.data.tap.v2alpha.SocketStreamedTraceSegment socket_streamed_trace_segment */ 4:
                    message.trace = {
                        oneofKind: "socketStreamedTraceSegment",
                        socketStreamedTraceSegment: SocketStreamedTraceSegment.internalBinaryRead(reader, reader.uint32(), options, (message.trace as any).socketStreamedTraceSegment)
                    };
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
    internalBinaryWrite(message: TraceWrapper, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.data.tap.v2alpha.HttpBufferedTrace http_buffered_trace = 1; */
        if (message.trace.oneofKind === "httpBufferedTrace")
            HttpBufferedTrace.internalBinaryWrite(message.trace.httpBufferedTrace, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.tap.v2alpha.HttpStreamedTraceSegment http_streamed_trace_segment = 2; */
        if (message.trace.oneofKind === "httpStreamedTraceSegment")
            HttpStreamedTraceSegment.internalBinaryWrite(message.trace.httpStreamedTraceSegment, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.tap.v2alpha.SocketBufferedTrace socket_buffered_trace = 3; */
        if (message.trace.oneofKind === "socketBufferedTrace")
            SocketBufferedTrace.internalBinaryWrite(message.trace.socketBufferedTrace, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* envoy.data.tap.v2alpha.SocketStreamedTraceSegment socket_streamed_trace_segment = 4; */
        if (message.trace.oneofKind === "socketStreamedTraceSegment")
            SocketStreamedTraceSegment.internalBinaryWrite(message.trace.socketStreamedTraceSegment, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.data.tap.v2alpha.TraceWrapper
 */
export const TraceWrapper = new TraceWrapper$Type();
