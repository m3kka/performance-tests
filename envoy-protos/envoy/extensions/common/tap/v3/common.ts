// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/common/tap/v3/common.proto" (package "envoy.extensions.common.tap.v3", syntax proto3)
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
import { TapConfig } from "../../../../config/tap/v3/common";
// [#protodoc-title: Common tap extension configuration]

/**
 * Common configuration for all tap extensions.
 *
 * @generated from protobuf message envoy.extensions.common.tap.v3.CommonExtensionConfig
 */
export interface CommonExtensionConfig {
    /**
     * @generated from protobuf oneof: config_type
     */
    configType: {
        oneofKind: "adminConfig";
        /**
         * If specified, the tap filter will be configured via an admin handler.
         *
         * @generated from protobuf field: envoy.extensions.common.tap.v3.AdminConfig admin_config = 1;
         */
        adminConfig: AdminConfig;
    } | {
        oneofKind: "staticConfig";
        /**
         * If specified, the tap filter will be configured via a static configuration that cannot be
         * changed.
         *
         * @generated from protobuf field: envoy.config.tap.v3.TapConfig static_config = 2;
         */
        staticConfig: TapConfig;
    } | {
        oneofKind: undefined;
    };
}
/**
 * Configuration for the admin handler. See :ref:`here <config_http_filters_tap_admin_handler>` for
 * more information.
 *
 * @generated from protobuf message envoy.extensions.common.tap.v3.AdminConfig
 */
export interface AdminConfig {
    /**
     * Opaque configuration ID. When requests are made to the admin handler, the passed opaque ID is
     * matched to the configured filter opaque ID to determine which filter to configure.
     *
     * @generated from protobuf field: string config_id = 1;
     */
    configId: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class CommonExtensionConfig$Type extends MessageType<CommonExtensionConfig> {
    constructor() {
        super("envoy.extensions.common.tap.v3.CommonExtensionConfig", [
            { no: 1, name: "admin_config", kind: "message", oneof: "configType", T: () => AdminConfig },
            { no: 2, name: "static_config", kind: "message", oneof: "configType", T: () => TapConfig }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.common.tap.v2alpha.CommonExtensionConfig" } });
    }
    create(value?: PartialMessage<CommonExtensionConfig>): CommonExtensionConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.configType = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<CommonExtensionConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: CommonExtensionConfig): CommonExtensionConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.common.tap.v3.AdminConfig admin_config */ 1:
                    message.configType = {
                        oneofKind: "adminConfig",
                        adminConfig: AdminConfig.internalBinaryRead(reader, reader.uint32(), options, (message.configType as any).adminConfig)
                    };
                    break;
                case /* envoy.config.tap.v3.TapConfig static_config */ 2:
                    message.configType = {
                        oneofKind: "staticConfig",
                        staticConfig: TapConfig.internalBinaryRead(reader, reader.uint32(), options, (message.configType as any).staticConfig)
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
    internalBinaryWrite(message: CommonExtensionConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.common.tap.v3.AdminConfig admin_config = 1; */
        if (message.configType.oneofKind === "adminConfig")
            AdminConfig.internalBinaryWrite(message.configType.adminConfig, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.tap.v3.TapConfig static_config = 2; */
        if (message.configType.oneofKind === "staticConfig")
            TapConfig.internalBinaryWrite(message.configType.staticConfig, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.common.tap.v3.CommonExtensionConfig
 */
export const CommonExtensionConfig = new CommonExtensionConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class AdminConfig$Type extends MessageType<AdminConfig> {
    constructor() {
        super("envoy.extensions.common.tap.v3.AdminConfig", [
            { no: 1, name: "config_id", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.common.tap.v2alpha.AdminConfig" } });
    }
    create(value?: PartialMessage<AdminConfig>): AdminConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.configId = "";
        if (value !== undefined)
            reflectionMergePartial<AdminConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: AdminConfig): AdminConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string config_id */ 1:
                    message.configId = reader.string();
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
    internalBinaryWrite(message: AdminConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string config_id = 1; */
        if (message.configId !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.configId);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.common.tap.v3.AdminConfig
 */
export const AdminConfig = new AdminConfig$Type();