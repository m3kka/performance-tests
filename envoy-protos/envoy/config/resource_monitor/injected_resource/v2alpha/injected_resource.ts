// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/resource_monitor/injected_resource/v2alpha/injected_resource.proto" (package "envoy.config.resource_monitor.injected_resource.v2alpha", syntax proto3)
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
// [#protodoc-title: Injected resource]
// [#extension: envoy.resource_monitors.injected_resource]

/**
 * The injected resource monitor allows injecting a synthetic resource pressure into Envoy
 * via a text file, which must contain a floating-point number in the range [0..1] representing
 * the resource pressure and be updated atomically by a symbolic link swap.
 * This is intended primarily for integration tests to force Envoy into an overloaded state.
 *
 * @generated from protobuf message envoy.config.resource_monitor.injected_resource.v2alpha.InjectedResourceConfig
 */
export interface InjectedResourceConfig {
    /**
     * @generated from protobuf field: string filename = 1;
     */
    filename: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class InjectedResourceConfig$Type extends MessageType<InjectedResourceConfig> {
    constructor() {
        super("envoy.config.resource_monitor.injected_resource.v2alpha.InjectedResourceConfig", [
            { no: 1, name: "filename", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minBytes: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<InjectedResourceConfig>): InjectedResourceConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.filename = "";
        if (value !== undefined)
            reflectionMergePartial<InjectedResourceConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: InjectedResourceConfig): InjectedResourceConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string filename */ 1:
                    message.filename = reader.string();
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
    internalBinaryWrite(message: InjectedResourceConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string filename = 1; */
        if (message.filename !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.filename);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.resource_monitor.injected_resource.v2alpha.InjectedResourceConfig
 */
export const InjectedResourceConfig = new InjectedResourceConfig$Type();