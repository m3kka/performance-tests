// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/extensions/transport_sockets/tcp_stats/v3/tcp_stats.proto" (package "envoy.extensions.transport_sockets.tcp_stats.v3", syntax proto3)
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
import { Duration } from "../../../../../google/protobuf/duration";
import { TransportSocket } from "../../../../config/core/v3/base";
// [#protodoc-title: TCP Stats Transport Socket wrapper]
// [#extension: envoy.transport_sockets.tcp_stats]

/**
 * Configuration for the TCP Stats transport socket wrapper, which wraps another transport socket for
 * all communication, but emits stats about the underlying TCP connection.
 *
 * The stats are documented :ref:`here <config_listener_stats_tcp>` for listeners and
 * :ref:`here <config_cluster_manager_cluster_stats_tcp>` for clusters.
 *
 * This transport socket is currently only supported on Linux.
 *
 * @generated from protobuf message envoy.extensions.transport_sockets.tcp_stats.v3.Config
 */
export interface Config {
    /**
     * The underlying transport socket being wrapped.
     *
     * @generated from protobuf field: envoy.config.core.v3.TransportSocket transport_socket = 1;
     */
    transportSocket?: TransportSocket;
    /**
     * Period to update stats while the connection is open. If unset, updates only happen when the
     * connection is closed. Stats are always updated one final time when the connection is closed.
     *
     * @generated from protobuf field: google.protobuf.Duration update_period = 2;
     */
    updatePeriod?: Duration;
}
// @generated message type with reflection information, may provide speed optimized methods
class Config$Type extends MessageType<Config> {
    constructor() {
        super("envoy.extensions.transport_sockets.tcp_stats.v3.Config", [
            { no: 1, name: "transport_socket", kind: "message", T: () => TransportSocket, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "update_period", kind: "message", T: () => Duration, options: { "validate.rules": { duration: { gte: { nanos: 1000000 } } } } }
        ]);
    }
    create(value?: PartialMessage<Config>): Config {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Config>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Config): Config {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.config.core.v3.TransportSocket transport_socket */ 1:
                    message.transportSocket = TransportSocket.internalBinaryRead(reader, reader.uint32(), options, message.transportSocket);
                    break;
                case /* google.protobuf.Duration update_period */ 2:
                    message.updatePeriod = Duration.internalBinaryRead(reader, reader.uint32(), options, message.updatePeriod);
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
    internalBinaryWrite(message: Config, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.config.core.v3.TransportSocket transport_socket = 1; */
        if (message.transportSocket)
            TransportSocket.internalBinaryWrite(message.transportSocket, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* google.protobuf.Duration update_period = 2; */
        if (message.updatePeriod)
            Duration.internalBinaryWrite(message.updatePeriod, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.transport_sockets.tcp_stats.v3.Config
 */
export const Config = new Config$Type();