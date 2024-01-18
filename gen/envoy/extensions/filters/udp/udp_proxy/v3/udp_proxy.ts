// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/filters/udp/udp_proxy/v3/udp_proxy.proto" (package "envoy.extensions.filters.udp.udp_proxy.v3", syntax proto3)
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
import { AccessLog } from "../../../../../config/accesslog/v3/accesslog";
import { UdpSocketConfig } from "../../../../../config/core/v3/udp_socket_config";
import { Duration } from "../../../../../../google/protobuf/duration";
import { Matcher } from "../../../../../../xds/type/matcher/v3/matcher";
// [#protodoc-title: UDP proxy]
// UDP proxy :ref:`configuration overview <config_udp_listener_filters_udp_proxy>`.
// [#extension: envoy.filters.udp_listener.udp_proxy]

/**
 * Configuration for the UDP proxy filter.
 * [#next-free-field: 11]
 *
 * @generated from protobuf message envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig
 */
export interface UdpProxyConfig {
    /**
     * The stat prefix used when emitting UDP proxy filter stats.
     *
     * @generated from protobuf field: string stat_prefix = 1;
     */
    statPrefix: string;
    /**
     * @generated from protobuf oneof: route_specifier
     */
    routeSpecifier: {
        oneofKind: "cluster";
        /**
         * The upstream cluster to connect to.
         * This field is deprecated in favor of
         * :ref:`matcher <envoy_v3_api_field_extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.matcher>`.
         *
         * @deprecated
         * @generated from protobuf field: string cluster = 2 [deprecated = true];
         */
        cluster: string;
    } | {
        oneofKind: "matcher";
        /**
         * The match tree to use when resolving route actions for incoming requests.
         * See :ref:`Routing <config_udp_listener_filters_udp_proxy_routing>` for more information.
         *
         * @generated from protobuf field: xds.type.matcher.v3.Matcher matcher = 9;
         */
        matcher: Matcher;
    } | {
        oneofKind: undefined;
    };
    /**
     * The idle timeout for sessions. Idle is defined as no datagrams between received or sent by
     * the session. The default if not specified is 1 minute.
     *
     * @generated from protobuf field: google.protobuf.Duration idle_timeout = 3;
     */
    idleTimeout?: Duration;
    /**
     * Use the remote downstream IP address as the sender IP address when sending packets to upstream hosts.
     * This option requires Envoy to be run with the ``CAP_NET_ADMIN`` capability on Linux.
     * And the IPv6 stack must be enabled on Linux kernel.
     * This option does not preserve the remote downstream port.
     * If this option is enabled, the IP address of sent datagrams will be changed to the remote downstream IP address.
     * This means that Envoy will not receive packets that are sent by upstream hosts because the upstream hosts
     * will send the packets with the remote downstream IP address as the destination. All packets will be routed
     * to the remote downstream directly if there are route rules on the upstream host side.
     * There are two options to return the packets back to the remote downstream.
     * The first one is to use DSR (Direct Server Return).
     * The other one is to configure routing rules on the upstream hosts to forward
     * all packets back to Envoy and configure iptables rules on the host running Envoy to
     * forward all packets from upstream hosts to the Envoy process so that Envoy can forward the packets to the downstream.
     * If the platform does not support this option, Envoy will raise a configuration error.
     *
     * @generated from protobuf field: bool use_original_src_ip = 4;
     */
    useOriginalSrcIp: boolean;
    /**
     * Optional configuration for UDP proxy hash policies. If hash_policies is not set, the hash-based
     * load balancing algorithms will select a host randomly. Currently the number of hash policies is
     * limited to 1.
     *
     * @generated from protobuf field: repeated envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.HashPolicy hash_policies = 5;
     */
    hashPolicies: UdpProxyConfig_HashPolicy[];
    /**
     * UDP socket configuration for upstream sockets. The default for
     * :ref:`prefer_gro <envoy_v3_api_field_config.core.v3.UdpSocketConfig.prefer_gro>` is true for upstream
     * sockets as the assumption is datagrams will be received from a single source.
     *
     * @generated from protobuf field: envoy.config.core.v3.UdpSocketConfig upstream_socket_config = 6;
     */
    upstreamSocketConfig?: UdpSocketConfig;
    /**
     * Perform per packet load balancing (upstream host selection) on each received data chunk.
     * The default if not specified is false, that means each data chunk is forwarded
     * to upstream host selected on first chunk receival for that "session" (identified by source IP/port and local IP/port).
     *
     * @generated from protobuf field: bool use_per_packet_load_balancing = 7;
     */
    usePerPacketLoadBalancing: boolean;
    /**
     * Configuration for session access logs emitted by the UDP proxy. Note that certain UDP specific data is emitted as :ref:`Dynamic Metadata <config_access_log_format_dynamic_metadata>`.
     *
     * @generated from protobuf field: repeated envoy.config.accesslog.v3.AccessLog access_log = 8;
     */
    accessLog: AccessLog[];
    /**
     * Configuration for proxy access logs emitted by the UDP proxy. Note that certain UDP specific data is emitted as :ref:`Dynamic Metadata <config_access_log_format_dynamic_metadata>`.
     *
     * @generated from protobuf field: repeated envoy.config.accesslog.v3.AccessLog proxy_access_log = 10;
     */
    proxyAccessLog: AccessLog[];
}
/**
 * Specifies the UDP hash policy.
 * The packets can be routed by hash policy.
 *
 * @generated from protobuf message envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.HashPolicy
 */
export interface UdpProxyConfig_HashPolicy {
    /**
     * @generated from protobuf oneof: policy_specifier
     */
    policySpecifier: {
        oneofKind: "sourceIp";
        /**
         * The source IP will be used to compute the hash used by hash-based load balancing algorithms.
         *
         * @generated from protobuf field: bool source_ip = 1;
         */
        sourceIp: boolean;
    } | {
        oneofKind: "key";
        /**
         * A given key will be used to compute the hash used by hash-based load balancing algorithms.
         * In certain cases there is a need to direct different UDP streams jointly towards the selected set of endpoints.
         * A possible use-case is VoIP telephony, where media (RTP) and its corresponding control (RTCP) belong to the same logical session,
         * although they travel in separate streams. To ensure that these pair of streams are load-balanced on session level
         * (instead of individual stream level), dynamically created listeners can use the same hash key for each stream in the session.
         *
         * @generated from protobuf field: string key = 2;
         */
        key: string;
    } | {
        oneofKind: undefined;
    };
}
// @generated message type with reflection information, may provide speed optimized methods
class UdpProxyConfig$Type extends MessageType<UdpProxyConfig> {
    constructor() {
        super("envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig", [
            { no: 1, name: "stat_prefix", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "cluster", kind: "scalar", oneof: "routeSpecifier", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } }, "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 9, name: "matcher", kind: "message", oneof: "routeSpecifier", T: () => Matcher, options: { "xds.annotations.v3.field_status": { workInProgress: true } } },
            { no: 3, name: "idle_timeout", kind: "message", T: () => Duration },
            { no: 4, name: "use_original_src_ip", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "hash_policies", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => UdpProxyConfig_HashPolicy, options: { "validate.rules": { repeated: { maxItems: "1" } } } },
            { no: 6, name: "upstream_socket_config", kind: "message", T: () => UdpSocketConfig },
            { no: 7, name: "use_per_packet_load_balancing", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 8, name: "access_log", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AccessLog },
            { no: 10, name: "proxy_access_log", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => AccessLog }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.config.filter.udp.udp_proxy.v2alpha.UdpProxyConfig" } });
    }
    create(value?: PartialMessage<UdpProxyConfig>): UdpProxyConfig {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.statPrefix = "";
        message.routeSpecifier = { oneofKind: undefined };
        message.useOriginalSrcIp = false;
        message.hashPolicies = [];
        message.usePerPacketLoadBalancing = false;
        message.accessLog = [];
        message.proxyAccessLog = [];
        if (value !== undefined)
            reflectionMergePartial<UdpProxyConfig>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UdpProxyConfig): UdpProxyConfig {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string stat_prefix */ 1:
                    message.statPrefix = reader.string();
                    break;
                case /* string cluster = 2 [deprecated = true];*/ 2:
                    message.routeSpecifier = {
                        oneofKind: "cluster",
                        cluster: reader.string()
                    };
                    break;
                case /* xds.type.matcher.v3.Matcher matcher */ 9:
                    message.routeSpecifier = {
                        oneofKind: "matcher",
                        matcher: Matcher.internalBinaryRead(reader, reader.uint32(), options, (message.routeSpecifier as any).matcher)
                    };
                    break;
                case /* google.protobuf.Duration idle_timeout */ 3:
                    message.idleTimeout = Duration.internalBinaryRead(reader, reader.uint32(), options, message.idleTimeout);
                    break;
                case /* bool use_original_src_ip */ 4:
                    message.useOriginalSrcIp = reader.bool();
                    break;
                case /* repeated envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.HashPolicy hash_policies */ 5:
                    message.hashPolicies.push(UdpProxyConfig_HashPolicy.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* envoy.config.core.v3.UdpSocketConfig upstream_socket_config */ 6:
                    message.upstreamSocketConfig = UdpSocketConfig.internalBinaryRead(reader, reader.uint32(), options, message.upstreamSocketConfig);
                    break;
                case /* bool use_per_packet_load_balancing */ 7:
                    message.usePerPacketLoadBalancing = reader.bool();
                    break;
                case /* repeated envoy.config.accesslog.v3.AccessLog access_log */ 8:
                    message.accessLog.push(AccessLog.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* repeated envoy.config.accesslog.v3.AccessLog proxy_access_log */ 10:
                    message.proxyAccessLog.push(AccessLog.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: UdpProxyConfig, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string stat_prefix = 1; */
        if (message.statPrefix !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.statPrefix);
        /* string cluster = 2 [deprecated = true]; */
        if (message.routeSpecifier.oneofKind === "cluster")
            writer.tag(2, WireType.LengthDelimited).string(message.routeSpecifier.cluster);
        /* xds.type.matcher.v3.Matcher matcher = 9; */
        if (message.routeSpecifier.oneofKind === "matcher")
            Matcher.internalBinaryWrite(message.routeSpecifier.matcher, writer.tag(9, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration idle_timeout = 3; */
        if (message.idleTimeout)
            Duration.internalBinaryWrite(message.idleTimeout, writer.tag(3, WireType.LengthDelimited).fork(), options).join();
        /* bool use_original_src_ip = 4; */
        if (message.useOriginalSrcIp !== false)
            writer.tag(4, WireType.Varint).bool(message.useOriginalSrcIp);
        /* repeated envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.HashPolicy hash_policies = 5; */
        for (let i = 0; i < message.hashPolicies.length; i++)
            UdpProxyConfig_HashPolicy.internalBinaryWrite(message.hashPolicies[i], writer.tag(5, WireType.LengthDelimited).fork(), options).join();
        /* envoy.config.core.v3.UdpSocketConfig upstream_socket_config = 6; */
        if (message.upstreamSocketConfig)
            UdpSocketConfig.internalBinaryWrite(message.upstreamSocketConfig, writer.tag(6, WireType.LengthDelimited).fork(), options).join();
        /* bool use_per_packet_load_balancing = 7; */
        if (message.usePerPacketLoadBalancing !== false)
            writer.tag(7, WireType.Varint).bool(message.usePerPacketLoadBalancing);
        /* repeated envoy.config.accesslog.v3.AccessLog access_log = 8; */
        for (let i = 0; i < message.accessLog.length; i++)
            AccessLog.internalBinaryWrite(message.accessLog[i], writer.tag(8, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.accesslog.v3.AccessLog proxy_access_log = 10; */
        for (let i = 0; i < message.proxyAccessLog.length; i++)
            AccessLog.internalBinaryWrite(message.proxyAccessLog[i], writer.tag(10, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig
 */
export const UdpProxyConfig = new UdpProxyConfig$Type();
// @generated message type with reflection information, may provide speed optimized methods
class UdpProxyConfig_HashPolicy$Type extends MessageType<UdpProxyConfig_HashPolicy> {
    constructor() {
        super("envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.HashPolicy", [
            { no: 1, name: "source_ip", kind: "scalar", oneof: "policySpecifier", T: 8 /*ScalarType.BOOL*/, options: { "validate.rules": { bool: { const: true } } } },
            { no: 2, name: "key", kind: "scalar", oneof: "policySpecifier", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ]);
    }
    create(value?: PartialMessage<UdpProxyConfig_HashPolicy>): UdpProxyConfig_HashPolicy {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.policySpecifier = { oneofKind: undefined };
        if (value !== undefined)
            reflectionMergePartial<UdpProxyConfig_HashPolicy>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: UdpProxyConfig_HashPolicy): UdpProxyConfig_HashPolicy {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* bool source_ip */ 1:
                    message.policySpecifier = {
                        oneofKind: "sourceIp",
                        sourceIp: reader.bool()
                    };
                    break;
                case /* string key */ 2:
                    message.policySpecifier = {
                        oneofKind: "key",
                        key: reader.string()
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
    internalBinaryWrite(message: UdpProxyConfig_HashPolicy, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* bool source_ip = 1; */
        if (message.policySpecifier.oneofKind === "sourceIp")
            writer.tag(1, WireType.Varint).bool(message.policySpecifier.sourceIp);
        /* string key = 2; */
        if (message.policySpecifier.oneofKind === "key")
            writer.tag(2, WireType.LengthDelimited).string(message.policySpecifier.key);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.udp.udp_proxy.v3.UdpProxyConfig.HashPolicy
 */
export const UdpProxyConfig_HashPolicy = new UdpProxyConfig_HashPolicy$Type();
