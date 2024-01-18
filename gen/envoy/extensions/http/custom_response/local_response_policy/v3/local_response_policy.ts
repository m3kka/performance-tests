// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/http/custom_response/local_response_policy/v3/local_response_policy.proto" (package "envoy.extensions.http.custom_response.local_response_policy.v3", syntax proto3)
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
import { HeaderValueOption } from "../../../../../config/core/v3/base";
import { UInt32Value } from "../../../../../../google/protobuf/wrappers";
import { SubstitutionFormatString } from "../../../../../config/core/v3/substitution_format_string";
import { DataSource } from "../../../../../config/core/v3/base";
// [#protodoc-title: Local Response Policy for Custom Response]
// [#extension: envoy.http.custom_response.local_response_policy]

/**
 * Custom response policy to serve a locally stored response to the
 * downstream.
 *
 * @generated from protobuf message envoy.extensions.http.custom_response.local_response_policy.v3.LocalResponsePolicy
 */
export interface LocalResponsePolicy {
    /**
     * Optional new local reply body text. It will be used
     * in the `%LOCAL_REPLY_BODY%` command operator in the `body_format`.
     *
     * @generated from protobuf field: envoy.config.core.v3.DataSource body = 1;
     */
    body?: DataSource;
    /**
     * Optional body format to be used for this response. If `body_format` is  not
     * provided, and `body` is, the contents of `body` will be used to populate
     * the body of the local reply without formatting.
     *
     * @generated from protobuf field: envoy.config.core.v3.SubstitutionFormatString body_format = 2;
     */
    bodyFormat?: SubstitutionFormatString;
    /**
     * The new response status code if specified.
     *
     * @generated from protobuf field: google.protobuf.UInt32Value status_code = 3;
     */
    statusCode?: UInt32Value;
    /**
     * HTTP headers to add to the response. This allows the
     * response policy to append, to add or to override headers of
     * the original response for local body, or the custom response from the
     * remote body, before it is sent to a downstream client.
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.HeaderValueOption response_headers_to_add = 4;
     */
    responseHeadersToAdd: HeaderValueOption[];
}
// @generated message type with reflection information, may provide speed optimized methods
class LocalResponsePolicy$Type extends MessageType<LocalResponsePolicy> {
    constructor() {
        super("envoy.extensions.http.custom_response.local_response_policy.v3.LocalResponsePolicy", [
            { no: 1, name: "body", kind: "message", T: () => DataSource },
            { no: 2, name: "body_format", kind: "message", T: () => SubstitutionFormatString },
            { no: 3, name: "status_code", kind: "message", T: () => UInt32Value, options: { "validate.rules": { uint32: { lt: 600, gte: 200 } } } },
            { no: 4, name: "response_headers_to_add", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderValueOption, options: { "validate.rules": { repeated: { maxItems: "1000" } } } }
        ]);
    }
    create(value?: PartialMessage<LocalResponsePolicy>): LocalResponsePolicy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.responseHeadersToAdd = [];
        if (value !== undefined)
            reflectionMergePartial<LocalResponsePolicy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LocalResponsePolicy): LocalResponsePolicy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.DataSource body */ 1:
                    message.body = DataSource.internalBinaryRead(reader, reader.uint32(), options, message.body);
                    break;
                case /* envoy.config.core.v3.SubstitutionFormatString body_format */ 2:
                    message.bodyFormat = SubstitutionFormatString.internalBinaryRead(reader, reader.uint32(), options, message.bodyFormat);
                    break;
                case /* google.protobuf.UInt32Value status_code */ 3:
                    message.statusCode = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.statusCode);
                    break;
                case /* repeated envoy.config.core.v3.HeaderValueOption response_headers_to_add */ 4:
                    message.responseHeadersToAdd.push(HeaderValueOption.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: LocalResponsePolicy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.DataSource body = 1; */
        if (message.body)
            DataSource.internalBinaryWrite(message.body, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.SubstitutionFormatString body_format = 2; */
        if (message.bodyFormat)
            SubstitutionFormatString.internalBinaryWrite(message.bodyFormat, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.UInt32Value status_code = 3; */
        if (message.statusCode)
            UInt32Value.internalBinaryWrite(message.statusCode, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.HeaderValueOption response_headers_to_add = 4; */
        for (let i = 0; i < message.responseHeadersToAdd.length; i++)
            HeaderValueOption.internalBinaryWrite(message.responseHeadersToAdd[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.http.custom_response.local_response_policy.v3.LocalResponsePolicy
 */
export const LocalResponsePolicy = new LocalResponsePolicy$Type();
