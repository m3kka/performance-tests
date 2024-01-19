// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/service/auth/v2/external_auth.proto" (package "envoy.service.auth.v2", syntax proto3)
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
import { Status } from "../../../../google/rpc/status";
import { HeaderValueOption } from "../../../api/v2/core/base";
import { HttpStatus } from "../../../type/http_status";
import { AttributeContext } from "./attribute_context";
/**
 * @generated from protobuf message envoy.service.auth.v2.CheckRequest
 */
export interface CheckRequest {
    /**
     * The request attributes.
     *
     * @generated from protobuf field: envoy.service.auth.v2.AttributeContext attributes = 1;
     */
    attributes?: AttributeContext;
}
/**
 * HTTP attributes for a denied response.
 *
 * @generated from protobuf message envoy.service.auth.v2.DeniedHttpResponse
 */
export interface DeniedHttpResponse {
    /**
     * This field allows the authorization service to send a HTTP response status
     * code to the downstream client other than 403 (Forbidden).
     *
     * @generated from protobuf field: envoy.type.HttpStatus status = 1;
     */
    status?: HttpStatus;
    /**
     * This field allows the authorization service to send HTTP response headers
     * to the downstream client. Note that the `append` field in `HeaderValueOption` defaults to
     * false when used in this message.
     *
     * @generated from protobuf field: repeated envoy.api.v2.core.HeaderValueOption headers = 2;
     */
    headers: HeaderValueOption[];
    /**
     * This field allows the authorization service to send a response body data
     * to the downstream client.
     *
     * @generated from protobuf field: string body = 3;
     */
    body: string;
}
/**
 * HTTP attributes for an ok response.
 *
 * @generated from protobuf message envoy.service.auth.v2.OkHttpResponse
 */
export interface OkHttpResponse {
    /**
     * HTTP entity headers in addition to the original request headers. This allows the authorization
     * service to append, to add or to override headers from the original request before
     * dispatching it to the upstream. Note that the `append` field in `HeaderValueOption` defaults to
     * false when used in this message. By setting the `append` field to `true`,
     * the filter will append the correspondent header value to the matched request header.
     * By leaving `append` as false, the filter will either add a new header, or override an existing
     * one if there is a match.
     *
     * @generated from protobuf field: repeated envoy.api.v2.core.HeaderValueOption headers = 2;
     */
    headers: HeaderValueOption[];
}
/**
 * Intended for gRPC and Network Authorization servers `only`.
 *
 * @generated from protobuf message envoy.service.auth.v2.CheckResponse
 */
export interface CheckResponse {
    /**
     * Status `OK` allows the request. Any other status indicates the request should be denied.
     *
     * @generated from protobuf field: google.rpc.Status status = 1;
     */
    status?: Status;
    /**
     * @generated from protobuf oneof: http_response
     */
    httpResponse: {
        oneofKind: "deniedResponse";
        /**
         * Supplies http attributes for a denied response.
         *
         * @generated from protobuf field: envoy.service.auth.v2.DeniedHttpResponse denied_response = 2;
         */
        deniedResponse: DeniedHttpResponse;
    } | {
        oneofKind: "okResponse";
        /**
         * Supplies http attributes for an ok response.
         *
         * @generated from protobuf field: envoy.service.auth.v2.OkHttpResponse ok_response = 3;
         */
        okResponse: OkHttpResponse;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class CheckRequest$Type extends MessageType<CheckRequest> {
    constructor() {
        super("envoy.service.auth.v2.CheckRequest", [
            { no: 1, name: "attributes", kind: "message", T: () => AttributeContext }
        ]);
    }
    create(value?: PartialMessage<CheckRequest>): CheckRequest {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<CheckRequest>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckRequest): CheckRequest {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.service.auth.v2.AttributeContext attributes */ 1:
                    message.attributes = AttributeContext.internalBinaryRead(reader, reader.uint32(), options, message.attributes);
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
    internalBinaryWrite(message: CheckRequest, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.service.auth.v2.AttributeContext attributes = 1; */
        if (message.attributes)
            AttributeContext.internalBinaryWrite(message.attributes, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.auth.v2.CheckRequest
 */
export const CheckRequest = new CheckRequest$Type();
// @generated message type with reflection information, may provide speed optimized methods
class DeniedHttpResponse$Type extends MessageType<DeniedHttpResponse> {
    constructor() {
        super("envoy.service.auth.v2.DeniedHttpResponse", [
            { no: 1, name: "status", kind: "message", T: () => HttpStatus, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValueOption },
            { no: 3, name: "body", kind: "scalar", T: 9 /*ScalarType.STRING*/ }
        ]);
    }
    create(value?: PartialMessage<DeniedHttpResponse>): DeniedHttpResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.headers = [];
        message.body = "";
        if (value !== undefined)
            reflectionMergePartial<DeniedHttpResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: DeniedHttpResponse): DeniedHttpResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.HttpStatus status */ 1:
                    message.status = HttpStatus.internalBinaryRead(reader, reader.uint32(), options, message.status);
                    break;
                case /* repeated envoy.api.v2.core.HeaderValueOption headers */ 2:
                    message.headers.push(HeaderValueOption.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* string body */ 3:
                    message.body = reader.string();
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
    internalBinaryWrite(message: DeniedHttpResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.HttpStatus status = 1; */
        if (message.status)
            HttpStatus.internalBinaryWrite(message.status, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.api.v2.core.HeaderValueOption headers = 2; */
        for (let i = 0; i < message.headers.length; i++)
            HeaderValueOption.internalBinaryWrite(message.headers[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* string body = 3; */
        if (message.body !== "")
            writer.tag(3, WireType.LengthDelimited).string(message.body);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.auth.v2.DeniedHttpResponse
 */
export const DeniedHttpResponse = new DeniedHttpResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class OkHttpResponse$Type extends MessageType<OkHttpResponse> {
    constructor() {
        super("envoy.service.auth.v2.OkHttpResponse", [
            { no: 2, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValueOption }
        ]);
    }
    create(value?: PartialMessage<OkHttpResponse>): OkHttpResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.headers = [];
        if (value !== undefined)
            reflectionMergePartial<OkHttpResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: OkHttpResponse): OkHttpResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.api.v2.core.HeaderValueOption headers */ 2:
                    message.headers.push(HeaderValueOption.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: OkHttpResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.api.v2.core.HeaderValueOption headers = 2; */
        for (let i = 0; i < message.headers.length; i++)
            HeaderValueOption.internalBinaryWrite(message.headers[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.auth.v2.OkHttpResponse
 */
export const OkHttpResponse = new OkHttpResponse$Type();
// @generated message type with reflection information, may provide speed optimized methods
class CheckResponse$Type extends MessageType<CheckResponse> {
    constructor() {
        super("envoy.service.auth.v2.CheckResponse", [
            { no: 1, name: "status", kind: "message", T: () => Status },
            { no: 2, name: "denied_response", kind: "message", oneof: "httpResponse", T: () => DeniedHttpResponse },
            { no: 3, name: "ok_response", kind: "message", oneof: "httpResponse", T: () => OkHttpResponse }
        ]);
    }
    create(value?: PartialMessage<CheckResponse>): CheckResponse {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.httpResponse = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<CheckResponse>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CheckResponse): CheckResponse {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.rpc.Status status */ 1:
                    message.status = Status.internalBinaryRead(reader, reader.uint32(), options, message.status);
                    break;
                case /* envoy.service.auth.v2.DeniedHttpResponse denied_response */ 2:
                    message.httpResponse = {
                        oneofKind: "deniedResponse",
                        deniedResponse: DeniedHttpResponse.internalBinaryRead(reader, reader.uint32(), options, (message.httpResponse as any).deniedResponse)
                    };
                    break;
                case /* envoy.service.auth.v2.OkHttpResponse ok_response */ 3:
                    message.httpResponse = {
                        oneofKind: "okResponse",
                        okResponse: OkHttpResponse.internalBinaryRead(reader, reader.uint32(), options, (message.httpResponse as any).okResponse)
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
    internalBinaryWrite(message: CheckResponse, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.rpc.Status status = 1; */
        if (message.status)
            Status.internalBinaryWrite(message.status, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.auth.v2.DeniedHttpResponse denied_response = 2; */
        if (message.httpResponse.oneofKind === "deniedResponse")
            DeniedHttpResponse.internalBinaryWrite(message.httpResponse.deniedResponse, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* envoy.service.auth.v2.OkHttpResponse ok_response = 3; */
        if (message.httpResponse.oneofKind === "okResponse")
            OkHttpResponse.internalBinaryWrite(message.httpResponse.okResponse, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.service.auth.v2.CheckResponse
 */
export const CheckResponse = new CheckResponse$Type();
/**
 * @generated ServiceType for protobuf service envoy.service.auth.v2.Authorization
 */
export const Authorization = new ServiceType("envoy.service.auth.v2.Authorization", [
    { name: "Check", options: {}, I: CheckRequest, O: CheckResponse }
]);