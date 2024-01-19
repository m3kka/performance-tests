// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/http/early_header_mutation/header_mutation/v3/header_mutation.proto" (package "envoy.extensions.http.early_header_mutation.header_mutation.v3", syntax proto3)
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
import { HeaderMutation as HeaderMutation$ } from "../../../../../config/common/mutation_rules/v3/mutation_rules";
// [#protodoc-title: Default early header mutation extension]
// [#extension: envoy.http.early_header_mutation.header_mutation]

/**
 * This extension allows for early header mutation by the substitution formatter.
 *
 * @generated from protobuf message envoy.extensions.http.early_header_mutation.header_mutation.v3.HeaderMutation
 */
export interface HeaderMutation {
    /**
     * @generated from protobuf field: repeated envoy.config.common.mutation_rules.v3.HeaderMutation mutations = 1;
     */
    mutations: HeaderMutation$[];
}
// @generated message type with reflection information, may provide speed optimized methods
class HeaderMutation$Type extends MessageType<HeaderMutation> {
    constructor() {
        super("envoy.extensions.http.early_header_mutation.header_mutation.v3.HeaderMutation", [
            { no: 1, name: "mutations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderMutation$, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<HeaderMutation>): HeaderMutation {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.mutations = [];
        if (value !== undefined)
            reflectionMergePartial<HeaderMutation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HeaderMutation): HeaderMutation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.config.common.mutation_rules.v3.HeaderMutation mutations */ 1:
                    message.mutations.push(HeaderMutation$.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: HeaderMutation, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.config.common.mutation_rules.v3.HeaderMutation mutations = 1; */
        for (let i = 0; i < message.mutations.length; i++)
            HeaderMutation$.internalBinaryWrite(message.mutations[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.http.early_header_mutation.header_mutation.v3.HeaderMutation
 */
export const HeaderMutation = new HeaderMutation$Type();