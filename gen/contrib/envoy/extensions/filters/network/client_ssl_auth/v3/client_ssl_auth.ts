// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "contrib/envoy/extensions/filters/network/client_ssl_auth/v3/client_ssl_auth.proto" (package "envoy.extensions.filters.network.client_ssl_auth.v3", syntax proto3)
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
import { CidrRange } from "../../../../../../../envoy/config/core/v3/address";
import { Duration } from "../../../../../../../google/protobuf/duration";
// [#protodoc-title: Client TLS authentication]
// Client TLS authentication
// :ref:`configuration overview <config_network_filters_client_ssl_auth>`.
// [#extension: envoy.filters.network.client_ssl_auth]

/**
 * @generated from protobuf message envoy.extensions.filters.network.client_ssl_auth.v3.ClientSSLAuth
 */
export interface ClientSSLAuth {
    /**
     * The :ref:`cluster manager <arch_overview_cluster_manager>` cluster that runs
     * the authentication service. The filter will connect to the service every 60s to fetch the list
     * of principals. The service must support the expected :ref:`REST API
     * <config_network_filters_client_ssl_auth_rest_api>`.
     *
     * @generated from protobuf field: string auth_api_cluster = 1;
     */
    authApiCluster: string;
    /**
     * The prefix to use when emitting :ref:`statistics
     * <config_network_filters_client_ssl_auth_stats>`.
     *
     * @generated from protobuf field: string stat_prefix = 2;
     */
    statPrefix: string;
    /**
     * Time in milliseconds between principal refreshes from the
     * authentication service. Default is 60000 (60s). The actual fetch time
     * will be this value plus a random jittered value between
     * 0-refresh_delay_ms milliseconds.
     *
     * @generated from protobuf field: google.protobuf.Duration refresh_delay = 3;
     */
    refreshDelay?: Duration;
    /**
     * An optional list of IP address and subnet masks that should be white
     * listed for access by the filter. If no list is provided, there is no
     * IP allowlist.
     *
     * @generated from protobuf field: repeated envoy.config.core.v3.CidrRange ip_white_list = 4;
     */
    ipWhiteList: CidrRange[];
}
// @generated message type with reflection information, may provide speed optimized methods
class ClientSSLAuth$Type extends MessageType<ClientSSLAuth> {
    constructor() {
        super("envoy.extensions.filters.network.client_ssl_auth.v3.ClientSSLAuth", [
            { no: 1, name: "auth_api_cluster", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1", wellKnownRegex: "HTTP_HEADER_VALUE", strict: false } } } },
            { no: 2, name: "stat_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 3, name: "refresh_delay", kind: "message", T: () => Duration },
            { no: 4, name: "ip_white_list", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => CidrRange, options: { "udpa.annotations.field_migrate": { rename: "ip_allowlist" } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.network.client_ssl_auth.v2.ClientSSLAuth" } });
    }
    create(value?: PartialMessage<ClientSSLAuth>): ClientSSLAuth {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.authApiCluster = "";
        message.statPrefix = "";
        message.ipWhiteList = [];
        if (value !== undefined)
            reflectionMergePartial<ClientSSLAuth>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: ClientSSLAuth): ClientSSLAuth {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string auth_api_cluster */ 1:
                    message.authApiCluster = reader.string();
                    break;
                case /* string stat_prefix */ 2:
                    message.statPrefix = reader.string();
                    break;
                case /* google.protobuf.Duration refresh_delay */ 3:
                    message.refreshDelay = Duration.internalBinaryRead(reader, reader.uint32(), options, message.refreshDelay);
                    break;
                case /* repeated envoy.config.core.v3.CidrRange ip_white_list */ 4:
                    message.ipWhiteList.push(CidrRange.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: ClientSSLAuth, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string auth_api_cluster = 1; */
        if (message.authApiCluster !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.authApiCluster);
        /* string stat_prefix = 2; */
        if (message.statPrefix !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.statPrefix);
        /* google.protobuf.Duration refresh_delay = 3; */
        if (message.refreshDelay)
            Duration.internalBinaryWrite(message.refreshDelay, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.core.v3.CidrRange ip_white_list = 4; */
        for (let i = 0; i < message.ipWhiteList.length; i++)
            CidrRange.internalBinaryWrite(message.ipWhiteList[i], writer.tag(4, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.client_ssl_auth.v3.ClientSSLAuth
 */
export const ClientSSLAuth = new ClientSSLAuth$Type();
