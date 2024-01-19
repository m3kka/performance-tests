// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/config/trace/v3/lightstep.proto" (package "envoy.config.trace.v3", syntax proto3)
// tslint:disable
import type { BinaryWriteOptions } from "@protobuf-ts/runtime";
import type { IBinaryWriter } from "@protobuf-ts/runtime";
import type { BinaryReadOptions } from "@protobuf-ts/runtime";
import type { IBinaryReader } from "@protobuf-ts/runtime";
import { UnknownFieldHandler } from "@protobuf-ts/runtime";
import { WireType } from "@protobuf-ts/runtime";
import type { PartialMessage } from "@protobuf-ts/runtime";
import { reflectionMergePartial } from "@protobuf-ts/runtime";
import { MessageType } from "@protobuf-ts/runtime";
import { DataSource } from "../../core/v3/base";
// [#protodoc-title: LightStep tracer]

/**
 * Configuration for the LightStep tracer.
 * [#extension: envoy.tracers.lightstep]
 * [#not-implemented-hide:]
 *
 * @generated from protobuf message envoy.config.trace.v3.LightstepConfig
 */
export interface LightstepConfig {
    /**
     * The cluster manager cluster that hosts the LightStep collectors.
     *
     * @generated from protobuf field: string collector_cluster = 1;
     */
    collectorCluster: string;
    /**
     * File containing the access token to the `LightStep
     * <https://lightstep.com/>`_ API.
     *
     * @deprecated
     * @generated from protobuf field: string access_token_file = 2 [deprecated = true];
     */
    accessTokenFile: string;
    /**
     * Access token to the `LightStep <https://lightstep.com/>`_ API.
     *
     * @generated from protobuf field: envoy.config.core.v3.DataSource access_token = 4;
     */
    accessToken?: DataSource;
    /**
     * Propagation modes to use by LightStep's tracer.
     *
     * @generated from protobuf field: repeated envoy.config.trace.v3.LightstepConfig.PropagationMode propagation_modes = 3;
     */
    propagationModes: LightstepConfig_PropagationMode[];
}
/**
 * Available propagation modes
 *
 * @generated from protobuf enum envoy.config.trace.v3.LightstepConfig.PropagationMode
 */
export enum LightstepConfig_PropagationMode {
    /**
     * Propagate trace context in the single header x-ot-span-context.
     *
     * @generated from protobuf enum value: ENVOY = 0;
     */
    ENVOY = 0,
    /**
     * Propagate trace context using LightStep's native format.
     *
     * @generated from protobuf enum value: LIGHTSTEP = 1;
     */
    LIGHTSTEP = 1,
    /**
     * Propagate trace context using the b3 format.
     *
     * @generated from protobuf enum value: B3 = 2;
     */
    B3 = 2,
    /**
     * Propagation trace context using the w3 trace-context standard.
     *
     * @generated from protobuf enum value: TRACE_CONTEXT = 3;
     */
    TRACE_CONTEXT = 3
}
// @generated message type with reflection information, may provide speed optimized methods
class LightstepConfig$Type extends MessageType<LightstepConfig> {
    constructor() {
        super("envoy.config.trace.v3.LightstepConfig", [
            { no: 1, name: "collector_cluster", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "access_token_file", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 4, name: "access_token", kind: "message", T: () => DataSource },
            { no: 3, name: "propagation_modes", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: () => ["envoy.config.trace.v3.LightstepConfig.PropagationMode", LightstepConfig_PropagationMode], options: { "validate.rules": { repeated: { items: { enum: { definedOnly: true } } } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.trace.v2.LightstepConfig" } });
    }
    create(value?: PartialMessage<LightstepConfig>): LightstepConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.collectorCluster = "";
        message.accessTokenFile = "";
        message.propagationModes = [];
        if (value !== undefined)
            reflectionMergePartial<LightstepConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: LightstepConfig): LightstepConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string collector_cluster */ 1:
                    message.collectorCluster = reader.string();
                    break;
                case /* string access_token_file = 2 [deprecated = true];*/ 2:
                    message.accessTokenFile = reader.string();
                    break;
                case /* envoy.config.core.v3.DataSource access_token */ 4:
                    message.accessToken = DataSource.internalBinaryRead(reader, reader.uint32(), options, message.accessToken);
                    break;
                case /* repeated envoy.config.trace.v3.LightstepConfig.PropagationMode propagation_modes */ 3:
                    if (wireType === WireType.LengthDelimited)
                        for (let e = reader.int32() + reader.pos; reader.pos < e;)
                            message.propagationModes.push(reader.int32());
                    else
                        message.propagationModes.push(reader.int32());
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
    internalBinaryWrite(message: LightstepConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string collector_cluster = 1; */
        if (message.collectorCluster !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.collectorCluster);
        /* string access_token_file = 2 [deprecated = true]; */
        if (message.accessTokenFile !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.accessTokenFile);
        /* envoy.config.core.v3.DataSource access_token = 4; */
        if (message.accessToken)
            DataSource.internalBinaryWrite(message.accessToken, writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.trace.v3.LightstepConfig.PropagationMode propagation_modes = 3; */
        if (message.propagationModes.length) {
            writer.tag(3, WireType.LengthDelimited).fork();
            for (let i = 0; i < message.propagationModes.length; i++)
                writer.int32(message.propagationModes[i]);
            writer.join();
        }
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.config.trace.v3.LightstepConfig
 */
export const LightstepConfig = new LightstepConfig$Type();