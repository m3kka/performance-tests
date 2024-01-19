// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/api/v2/core/grpc_method_list.proto" (package "envoy.api.v2.core", syntax proto3)
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
// [#protodoc-title: gRPC method list]

/**
 * A list of gRPC methods which can be used as an allowlist, for example.
 *
 * @generated from protobuf message envoy.api.v2.core.GrpcMethodList
 */
export interface GrpcMethodList {
    /**
     * @generated from protobuf field: repeated envoy.api.v2.core.GrpcMethodList.Service services = 1;
     */
    services: GrpcMethodList_Service[];
}
/**
 * @generated from protobuf message envoy.api.v2.core.GrpcMethodList.Service
 */
export interface GrpcMethodList_Service {
    /**
     * The name of the gRPC service.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The names of the gRPC methods in this service.
     *
     * @generated from protobuf field: repeated string method_names = 2;
     */
    methodNames: string[];
}
// @generated message type with reflection information, may provide speed optimized methods
class GrpcMethodList$Type extends MessageType<GrpcMethodList> {
    constructor() {
        super("envoy.api.v2.core.GrpcMethodList", [
            { no: 1, name: "services", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => GrpcMethodList_Service }
        ]);
    }
    create(value?: PartialMessage<GrpcMethodList>): GrpcMethodList {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.services = [];
        if (value !== undefined)
            reflectionMergePartial<GrpcMethodList>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GrpcMethodList): GrpcMethodList {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* repeated envoy.api.v2.core.GrpcMethodList.Service services */ 1:
                    message.services.push(GrpcMethodList_Service.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: GrpcMethodList, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* repeated envoy.api.v2.core.GrpcMethodList.Service services = 1; */
        for (let i = 0; i < message.services.length; i++)
            GrpcMethodList_Service.internalBinaryWrite(message.services[i], writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.GrpcMethodList
 */
export const GrpcMethodList = new GrpcMethodList$Type();
// @generated message type with reflection information, may provide speed optimized methods
class GrpcMethodList_Service$Type extends MessageType<GrpcMethodList_Service> {
    constructor() {
        super("envoy.api.v2.core.GrpcMethodList.Service", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } },
            { no: 2, name: "method_names", kind: "scalar", repeat: 2 /*RepeatType.UNPACKED*/, T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { repeated: { minItems: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<GrpcMethodList_Service>): GrpcMethodList_Service {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.methodNames = [];
        if (value !== undefined)
            reflectionMergePartial<GrpcMethodList_Service>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: GrpcMethodList_Service): GrpcMethodList_Service {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated string method_names */ 2:
                    message.methodNames.push(reader.string());
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
    internalBinaryWrite(message: GrpcMethodList_Service, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* repeated string method_names = 2; */
        for (let i = 0; i < message.methodNames.length; i++)
            writer.tag(2, WireType.LengthDelimited).string(message.methodNames[i]);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.api.v2.core.GrpcMethodList.Service
 */
export const GrpcMethodList_Service = new GrpcMethodList_Service$Type();