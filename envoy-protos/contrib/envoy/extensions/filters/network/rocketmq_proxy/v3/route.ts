// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "contrib/envoy/extensions/filters/network/rocketmq_proxy/v3/route.proto" (package "envoy.extensions.filters.network.rocketmq_proxy.v3", syntax proto3)
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
import { Metadata } from "../../../../../../../envoy/config/core/v3/base";
import { HeaderMatcher } from "../../../../../../../envoy/config/route/v3/route_components";
import { StringMatcher } from "../../../../../../../envoy/type/matcher/v3/string";
// [#protodoc-title: Rocketmq Proxy Route Configuration]
// Rocketmq Proxy :ref:`configuration overview <config_network_filters_rocketmq_proxy>`.

/**
 * @generated from protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.RouteConfiguration
 */
export interface RouteConfiguration {
    /**
     * The name of the route configuration.
     *
     * @generated from protobuf field: string name = 1;
     */
    name: string;
    /**
     * The list of routes that will be matched, in order, against incoming requests. The first route
     * that matches will be used.
     *
     * @generated from protobuf field: repeated envoy.extensions.filters.network.rocketmq_proxy.v3.Route routes = 2;
     */
    routes: Route[];
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.Route
 */
export interface Route {
    /**
     * Route matching parameters.
     *
     * @generated from protobuf field: envoy.extensions.filters.network.rocketmq_proxy.v3.RouteMatch match = 1;
     */
    match?: RouteMatch;
    /**
     * Route request to some upstream cluster.
     *
     * @generated from protobuf field: envoy.extensions.filters.network.rocketmq_proxy.v3.RouteAction route = 2;
     */
    route?: RouteAction;
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.RouteMatch
 */
export interface RouteMatch {
    /**
     * The name of the topic.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.StringMatcher topic = 1;
     */
    topic?: StringMatcher;
    /**
     * Specifies a set of headers that the route should match on. The router will check the request’s
     * headers against all the specified headers in the route config. A match will happen if all the
     * headers in the route are present in the request with the same values (or based on presence if
     * the value field is not in the config).
     *
     * @generated from protobuf field: repeated envoy.config.route.v3.HeaderMatcher headers = 2;
     */
    headers: HeaderMatcher[];
}
/**
 * @generated from protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.RouteAction
 */
export interface RouteAction {
    /**
     * Indicates the upstream cluster to which the request should be routed.
     *
     * @generated from protobuf field: string cluster = 1;
     */
    cluster: string;
    /**
     * Optional endpoint metadata match criteria used by the subset load balancer.
     *
     * @generated from protobuf field: envoy.config.core.v3.Metadata metadata_match = 2;
     */
    metadataMatch?: Metadata;
}
// @generated message type with reflection information, may provide speed optimized methods
class RouteConfiguration$Type extends MessageType<RouteConfiguration> {
    constructor() {
        super("envoy.extensions.filters.network.rocketmq_proxy.v3.RouteConfiguration", [
            { no: 1, name: "name", kind: "scalar", T: 9 /*ScalarType.STRING*/ },
            { no: 2, name: "routes", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => Route }
        ]);
    }
    create(value?: PartialMessage<RouteConfiguration>): RouteConfiguration {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.name = "";
        message.routes = [];
        if (value !== undefined)
            reflectionMergePartial<RouteConfiguration>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RouteConfiguration): RouteConfiguration {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string name */ 1:
                    message.name = reader.string();
                    break;
                case /* repeated envoy.extensions.filters.network.rocketmq_proxy.v3.Route routes */ 2:
                    message.routes.push(Route.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RouteConfiguration, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string name = 1; */
        if (message.name !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.name);
        /* repeated envoy.extensions.filters.network.rocketmq_proxy.v3.Route routes = 2; */
        for (let i = 0; i < message.routes.length; i++)
            Route.internalBinaryWrite(message.routes[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.RouteConfiguration
 */
export const RouteConfiguration = new RouteConfiguration$Type();
// @generated message type with reflection information, may provide speed optimized methods
class Route$Type extends MessageType<Route> {
    constructor() {
        super("envoy.extensions.filters.network.rocketmq_proxy.v3.Route", [
            { no: 1, name: "match", kind: "message", T: () => RouteMatch, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "route", kind: "message", T: () => RouteAction, options: { "validate.rules": { message: { required: true } } } }
        ]);
    }
    create(value?: PartialMessage<Route>): Route {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<Route>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: Route): Route {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.extensions.filters.network.rocketmq_proxy.v3.RouteMatch match */ 1:
                    message.match = RouteMatch.internalBinaryRead(reader, reader.uint32(), options, message.match);
                    break;
                case /* envoy.extensions.filters.network.rocketmq_proxy.v3.RouteAction route */ 2:
                    message.route = RouteAction.internalBinaryRead(reader, reader.uint32(), options, message.route);
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
    internalBinaryWrite(message: Route, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.extensions.filters.network.rocketmq_proxy.v3.RouteMatch match = 1; */
        if (message.match)
            RouteMatch.internalBinaryWrite(message.match, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* envoy.extensions.filters.network.rocketmq_proxy.v3.RouteAction route = 2; */
        if (message.route)
            RouteAction.internalBinaryWrite(message.route, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.Route
 */
export const Route = new Route$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RouteMatch$Type extends MessageType<RouteMatch> {
    constructor() {
        super("envoy.extensions.filters.network.rocketmq_proxy.v3.RouteMatch", [
            { no: 1, name: "topic", kind: "message", T: () => StringMatcher, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "headers", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: () => HeaderMatcher }
        ]);
    }
    create(value?: PartialMessage<RouteMatch>): RouteMatch {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.headers = [];
        if (value !== undefined)
            reflectionMergePartial<RouteMatch>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RouteMatch): RouteMatch {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.StringMatcher topic */ 1:
                    message.topic = StringMatcher.internalBinaryRead(reader, reader.uint32(), options, message.topic);
                    break;
                case /* repeated envoy.config.route.v3.HeaderMatcher headers */ 2:
                    message.headers.push(HeaderMatcher.internalBinaryRead(reader, reader.uint32(), options));
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
    internalBinaryWrite(message: RouteMatch, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.StringMatcher topic = 1; */
        if (message.topic)
            StringMatcher.internalBinaryWrite(message.topic, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* repeated envoy.config.route.v3.HeaderMatcher headers = 2; */
        for (let i = 0; i < message.headers.length; i++)
            HeaderMatcher.internalBinaryWrite(message.headers[i], writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.RouteMatch
 */
export const RouteMatch = new RouteMatch$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RouteAction$Type extends MessageType<RouteAction> {
    constructor() {
        super("envoy.extensions.filters.network.rocketmq_proxy.v3.RouteAction", [
            { no: 1, name: "cluster", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } },
            { no: 2, name: "metadata_match", kind: "message", T: () => Metadata }
        ]);
    }
    create(value?: PartialMessage<RouteAction>): RouteAction {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.cluster = "";
        if (value !== undefined)
            reflectionMergePartial<RouteAction>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RouteAction): RouteAction {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* string cluster */ 1:
                    message.cluster = reader.string();
                    break;
                case /* envoy.config.core.v3.Metadata metadata_match */ 2:
                    message.metadataMatch = Metadata.internalBinaryRead(reader, reader.uint32(), options, message.metadataMatch);
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
    internalBinaryWrite(message: RouteAction, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* string cluster = 1; */
        if (message.cluster !== "")
            writer.tag(1, WireType.LengthDelimited).string(message.cluster);
        /* envoy.config.core.v3.Metadata metadata_match = 2; */
        if (message.metadataMatch)
            Metadata.internalBinaryWrite(message.metadataMatch, writer.tag(2, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.extensions.filters.network.rocketmq_proxy.v3.RouteAction
 */
export const RouteAction = new RouteAction$Type();