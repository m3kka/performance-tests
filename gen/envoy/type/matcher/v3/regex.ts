// @generated by protobuf-ts 2.9.2
// @generated from protobuf file "envoy/type/matcher/v3/regex.proto" (package "envoy.type.matcher.v3", syntax proto3)
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
import { UInt32Value } from "../../../../google/protobuf/wrappers";
// [#protodoc-title: Regex matcher]

/**
 * A regex matcher designed for safety when used with untrusted input.
 *
 * @generated from protobuf message envoy.type.matcher.v3.RegexMatcher
 */
export interface RegexMatcher {
    /**
     * @generated from protobuf oneof: engine_type
     */
    engineType: {
        oneofKind: "googleRe2";
        /**
         * Google's RE2 regex engine.
         *
         * @deprecated
         * @generated from protobuf field: envoy.type.matcher.v3.RegexMatcher.GoogleRE2 google_re2 = 1 [deprecated = true];
         */
        googleRe2: RegexMatcher_GoogleRE2;
    } | {
        oneofKind: undefined;
    };
    /**
     * The regex match string. The string must be supported by the configured engine. The regex is matched
     * against the full string, not as a partial match.
     *
     * @generated from protobuf field: string regex = 2;
     */
    regex: string;
}
/**
 * Google's `RE2 <https://github.com/google/re2>`_ regex engine. The regex string must adhere to
 * the documented `syntax <https://github.com/google/re2/wiki/Syntax>`_. The engine is designed
 * to complete execution in linear time as well as limit the amount of memory used.
 *
 * Envoy supports program size checking via runtime. The runtime keys ``re2.max_program_size.error_level``
 * and ``re2.max_program_size.warn_level`` can be set to integers as the maximum program size or
 * complexity that a compiled regex can have before an exception is thrown or a warning is
 * logged, respectively. ``re2.max_program_size.error_level`` defaults to 100, and
 * ``re2.max_program_size.warn_level`` has no default if unset (will not check/log a warning).
 *
 * Envoy emits two stats for tracking the program size of regexes: the histogram ``re2.program_size``,
 * which records the program size, and the counter ``re2.exceeded_warn_level``, which is incremented
 * each time the program size exceeds the warn level threshold.
 *
 * @generated from protobuf message envoy.type.matcher.v3.RegexMatcher.GoogleRE2
 */
export interface RegexMatcher_GoogleRE2 {
    /**
     * This field controls the RE2 "program size" which is a rough estimate of how complex a
     * compiled regex is to evaluate. A regex that has a program size greater than the configured
     * value will fail to compile. In this case, the configured max program size can be increased
     * or the regex can be simplified. If not specified, the default is 100.
     *
     * This field is deprecated; regexp validation should be performed on the management server
     * instead of being done by each individual client.
     *
     * .. note::
     *
     *  Although this field is deprecated, the program size will still be checked against the
     *  global ``re2.max_program_size.error_level`` runtime value.
     *
     *
     * @deprecated
     * @generated from protobuf field: google.protobuf.UInt32Value max_program_size = 1 [deprecated = true];
     */
    maxProgramSize?: UInt32Value;
}
/**
 * Describes how to match a string and then produce a new string using a regular
 * expression and a substitution string.
 *
 * @generated from protobuf message envoy.type.matcher.v3.RegexMatchAndSubstitute
 */
export interface RegexMatchAndSubstitute {
    /**
     * The regular expression used to find portions of a string (hereafter called
     * the "subject string") that should be replaced. When a new string is
     * produced during the substitution operation, the new string is initially
     * the same as the subject string, but then all matches in the subject string
     * are replaced by the substitution string. If replacing all matches isn't
     * desired, regular expression anchors can be used to ensure a single match,
     * so as to replace just one occurrence of a pattern. Capture groups can be
     * used in the pattern to extract portions of the subject string, and then
     * referenced in the substitution string.
     *
     * @generated from protobuf field: envoy.type.matcher.v3.RegexMatcher pattern = 1;
     */
    pattern?: RegexMatcher;
    /**
     * The string that should be substituted into matching portions of the
     * subject string during a substitution operation to produce a new string.
     * Capture groups in the pattern can be referenced in the substitution
     * string. Note, however, that the syntax for referring to capture groups is
     * defined by the chosen regular expression engine. Google's `RE2
     * <https://github.com/google/re2>`_ regular expression engine uses a
     * backslash followed by the capture group number to denote a numbered
     * capture group. E.g., ``\1`` refers to capture group 1, and ``\2`` refers
     * to capture group 2.
     *
     * @generated from protobuf field: string substitution = 2;
     */
    substitution: string;
}
// @generated message type with reflection information, may provide speed optimized methods
class RegexMatcher$Type extends MessageType<RegexMatcher> {
    constructor() {
        super("envoy.type.matcher.v3.RegexMatcher", [
            { no: 1, name: "google_re2", kind: "message", oneof: "engineType", T: () => RegexMatcher_GoogleRE2, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } },
            { no: 2, name: "regex", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { minLen: "1" } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.matcher.RegexMatcher" } });
    }
    create(value?: PartialMessage<RegexMatcher>): RegexMatcher {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.engineType = { oneofKind: undefined };
        message.regex = "";
        if (value !== undefined)
            reflectionMergePartial<RegexMatcher>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegexMatcher): RegexMatcher {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.RegexMatcher.GoogleRE2 google_re2 = 1 [deprecated = true];*/ 1:
                    message.engineType = {
                        oneofKind: "googleRe2",
                        googleRe2: RegexMatcher_GoogleRE2.internalBinaryRead(reader, reader.uint32(), options, (message.engineType as any).googleRe2)
                    };
                    break;
                case /* string regex */ 2:
                    message.regex = reader.string();
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
    internalBinaryWrite(message: RegexMatcher, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.RegexMatcher.GoogleRE2 google_re2 = 1 [deprecated = true]; */
        if (message.engineType.oneofKind === "googleRe2")
            RegexMatcher_GoogleRE2.internalBinaryWrite(message.engineType.googleRe2, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string regex = 2; */
        if (message.regex !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.regex);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.v3.RegexMatcher
 */
export const RegexMatcher = new RegexMatcher$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegexMatcher_GoogleRE2$Type extends MessageType<RegexMatcher_GoogleRE2> {
    constructor() {
        super("envoy.type.matcher.v3.RegexMatcher.GoogleRE2", [
            { no: 1, name: "max_program_size", kind: "message", T: () => UInt32Value, options: { "envoy.annotations.deprecated_at_minor_version": "3.0" } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.matcher.RegexMatcher.GoogleRE2" } });
    }
    create(value?: PartialMessage<RegexMatcher_GoogleRE2>): RegexMatcher_GoogleRE2 {
        const message = globalThis.Object.create((this.messagePrototype!));
        if (value !== undefined)
            reflectionMergePartial<RegexMatcher_GoogleRE2>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegexMatcher_GoogleRE2): RegexMatcher_GoogleRE2 {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* google.protobuf.UInt32Value max_program_size = 1 [deprecated = true];*/ 1:
                    message.maxProgramSize = UInt32Value.internalBinaryRead(reader, reader.uint32(), options, message.maxProgramSize);
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
    internalBinaryWrite(message: RegexMatcher_GoogleRE2, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* google.protobuf.UInt32Value max_program_size = 1 [deprecated = true]; */
        if (message.maxProgramSize)
            UInt32Value.internalBinaryWrite(message.maxProgramSize, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.v3.RegexMatcher.GoogleRE2
 */
export const RegexMatcher_GoogleRE2 = new RegexMatcher_GoogleRE2$Type();
// @generated message type with reflection information, may provide speed optimized methods
class RegexMatchAndSubstitute$Type extends MessageType<RegexMatchAndSubstitute> {
    constructor() {
        super("envoy.type.matcher.v3.RegexMatchAndSubstitute", [
            { no: 1, name: "pattern", kind: "message", T: () => RegexMatcher, options: { "validate.rules": { message: { required: true } } } },
            { no: 2, name: "substitution", kind: "scalar", T: 9 /*ScalarType.STRING*/, options: { "validate.rules": { string: { wellKnownRegex: "HTTP_HEADER_VALUE", strict: false } } } }
        ], { "udpa.annotations.versioning": { previousMessageType: "envoy.type.matcher.RegexMatchAndSubstitute" } });
    }
    create(value?: PartialMessage<RegexMatchAndSubstitute>): RegexMatchAndSubstitute {
        const message = globalThis.Object.create((this.messagePrototype!));
        message.substitution = "";
        if (value !== undefined)
            reflectionMergePartial<RegexMatchAndSubstitute>(this, message, value);
        return message;
    }
    internalBinaryRead(reader: IBinaryReader, length: number, options: BinaryReadOptions, target?: RegexMatchAndSubstitute): RegexMatchAndSubstitute {
        let message = target ?? this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            let [fieldNo, wireType] = reader.tag();
            switch (fieldNo) {
                case /* envoy.type.matcher.v3.RegexMatcher pattern */ 1:
                    message.pattern = RegexMatcher.internalBinaryRead(reader, reader.uint32(), options, message.pattern);
                    break;
                case /* string substitution */ 2:
                    message.substitution = reader.string();
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
    internalBinaryWrite(message: RegexMatchAndSubstitute, writer: IBinaryWriter, options: BinaryWriteOptions): IBinaryWriter {
        /* envoy.type.matcher.v3.RegexMatcher pattern = 1; */
        if (message.pattern)
            RegexMatcher.internalBinaryWrite(message.pattern, writer.tag(1, WireType.LengthDelimited).fork(), options).join();
        /* string substitution = 2; */
        if (message.substitution !== "")
            writer.tag(2, WireType.LengthDelimited).string(message.substitution);
        let u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    }
}
/**
 * @generated MessageType for protobuf message envoy.type.matcher.v3.RegexMatchAndSubstitute
 */
export const RegexMatchAndSubstitute = new RegexMatchAndSubstitute$Type();
