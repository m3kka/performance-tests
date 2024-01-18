// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/http/header_mutation/v3/header_mutation.proto" (package "envoy.extensions.filters.http.header_mutation.v3", syntax proto3)
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
// [#protodoc-title: Header mutation filter configuration]
// [#extension: envoy.filters.http.header_mutation]

/**
 * @generated from protobuf message envoy.extensions.filters.http.header_mutation.v3.Mutations
 */
export interface Mutations {
    /**
     * The request mutations are applied before the request is forwarded to the upstream cluster.
     *
     * @generated from protobuf field: repeated envoy.config.common.mutation_rules.v3.HeaderMutation request_mutations = 1;
     */
    requestMutations: HeaderMutation$[];
    /**
     * The response mutations are applied before the response is sent to the downstream client.
     *
     * @generated from protobuf field: repeated envoy.config.common.mutation_rules.v3.HeaderMutation response_mutations = 2;
     */
    responseMutations: HeaderMutation$[];
}
/**
 * Per route configuration for the header mutation filter. If this is configured at multiple levels
 * (route level, virtual host level, and route table level), only the most specific one will be used.
 *
 * @generated from protobuf message envoy.extensions.filters.http.header_mutation.v3.HeaderMutationPerRoute
 */
export interface HeaderMutationPerRoute {
    /**
     * @generated from protobuf field: envoy.extensions.filters.http.header_mutation.v3.Mutations mutations = 1;
     */
    mutations?: Mutations;
}
/**
 * Configuration for the header mutation filter. The mutation rules in the filter configuration will
 * always be applied first and then the per-route mutation rules, if both are specified.
 *
 * @generated from protobuf message envoy.extensions.filters.http.header_mutation.v3.HeaderMutation
 */
export interface HeaderMutation {
    /**
     * @generated from protobuf field: envoy.extensions.filters.http.header_mutation.v3.Mutations mutations = 1;
     */
    mutations?: Mutations;
}
// @generated message type with reflection information, may provide speed optimized methods
class Mutations$Type extends MessageType<Mutations> {
    constructor() {
        super("envoy.extensions.filters.http.header_mutation.v3.Mutations", [
            { no: 1, name: "request_mutations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderMutation$ },
            { no: 2, name: "response_mutations", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderMutation$ }
        ]);
    }
    create(value?: PartialMessage<Mutations>): Mutations {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.requestMutations = [];
        message.responseMutations = [];
        if (value !== undefined)
            reflectionMergePartial<Mutations>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Mutations): Mutations {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.config.common.mutation_rules.v3.HeaderMutation request_mutations */ 1:
                    message.requestMutations.push(HeaderMutation$.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.config.common.mutation_rules.v3.HeaderMutation response_mutations */ 2:
                    message.responseMutations.push(HeaderMutation$.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: Mutations, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.config.common.mutation_rules.v3.HeaderMutation request_mutations = 1; */
        for (let i = 0; i < message.requestMutations.length; i++)
            HeaderMutation$.internalBinaryWrite(message.requestMutations[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.common.mutation_rules.v3.HeaderMutation response_mutations = 2; */
        for (let i = 0; i < message.responseMutations.length; i++)
            HeaderMutation$.internalBinaryWrite(message.responseMutations[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.header_mutation.v3.Mutations
 */
export const Mutations = new Mutations$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HeaderMutationPerRoute$Type extends MessageType<HeaderMutationPerRoute> {
    constructor() {
        super("envoy.extensions.filters.http.header_mutation.v3.HeaderMutationPerRoute", [
            { no: 1, name: "mutations", kind: "message", T: () => Mutations }
        ]);
    }
    create(value?: PartialMessage<HeaderMutationPerRoute>): HeaderMutationPerRoute {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<HeaderMutationPerRoute>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HeaderMutationPerRoute): HeaderMutationPerRoute {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.http.header_mutation.v3.Mutations mutations */ 1:
                    message.mutations = Mutations.internalBinaryRead(reader, reader.uint32(), options, message.mutations);
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
    internalBinaryWrite(message: HeaderMutationPerRoute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.filters.http.header_mutation.v3.Mutations mutations = 1; */
        if (message.mutations)
            Mutations.internalBinaryWrite(message.mutations, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.header_mutation.v3.HeaderMutationPerRoute
 */
export const HeaderMutationPerRoute = new HeaderMutationPerRoute$Type();
// @generated message type with reflection information, may provide speed optimized methods
class HeaderMutation$Type extends MessageType<HeaderMutation> {
    constructor() {
        super("envoy.extensions.filters.http.header_mutation.v3.HeaderMutation", [
            { no: 1, name: "mutations", kind: "message", T: () => Mutations }
        ]);
    }
    create(value?: PartialMessage<HeaderMutation>): HeaderMutation {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<HeaderMutation>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: HeaderMutation): HeaderMutation {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.http.header_mutation.v3.Mutations mutations */ 1:
                    message.mutations = Mutations.internalBinaryRead(reader, reader.uint32(), options, message.mutations);
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
        /* envoy.extensions.filters.http.header_mutation.v3.Mutations mutations = 1; */
        if (message.mutations)
            Mutations.internalBinaryWrite(message.mutations, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.http.header_mutation.v3.HeaderMutation
 */
export const HeaderMutation = new HeaderMutation$Type();
