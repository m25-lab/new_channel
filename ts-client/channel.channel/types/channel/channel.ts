/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "channel.channel";

export interface Channel {
  Index: string;
  MultisigAddr: string;
  PartA: string;
  PartB: string;
  Denom: string;
  Sequence: string;
}

const baseChannel: object = {
  Index: "",
  MultisigAddr: "",
  PartA: "",
  PartB: "",
  Denom: "",
  Sequence: "",
};

export const Channel = {
  encode(message: Channel, writer: Writer = Writer.create()): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    if (message.MultisigAddr !== "") {
      writer.uint32(18).string(message.MultisigAddr);
    }
    if (message.PartA !== "") {
      writer.uint32(26).string(message.PartA);
    }
    if (message.PartB !== "") {
      writer.uint32(34).string(message.PartB);
    }
    if (message.Denom !== "") {
      writer.uint32(42).string(message.Denom);
    }
    if (message.Sequence !== "") {
      writer.uint32(50).string(message.Sequence);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Channel {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseChannel } as Channel;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Index = reader.string();
          break;
        case 2:
          message.MultisigAddr = reader.string();
          break;
        case 3:
          message.PartA = reader.string();
          break;
        case 4:
          message.PartB = reader.string();
          break;
        case 5:
          message.Denom = reader.string();
          break;
        case 6:
          message.Sequence = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Channel {
    const message = { ...baseChannel } as Channel;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    if (object.MultisigAddr !== undefined && object.MultisigAddr !== null) {
      message.MultisigAddr = String(object.MultisigAddr);
    } else {
      message.MultisigAddr = "";
    }
    if (object.PartA !== undefined && object.PartA !== null) {
      message.PartA = String(object.PartA);
    } else {
      message.PartA = "";
    }
    if (object.PartB !== undefined && object.PartB !== null) {
      message.PartB = String(object.PartB);
    } else {
      message.PartB = "";
    }
    if (object.Denom !== undefined && object.Denom !== null) {
      message.Denom = String(object.Denom);
    } else {
      message.Denom = "";
    }
    if (object.Sequence !== undefined && object.Sequence !== null) {
      message.Sequence = String(object.Sequence);
    } else {
      message.Sequence = "";
    }
    return message;
  },

  toJSON(message: Channel): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    message.MultisigAddr !== undefined &&
      (obj.MultisigAddr = message.MultisigAddr);
    message.PartA !== undefined && (obj.PartA = message.PartA);
    message.PartB !== undefined && (obj.PartB = message.PartB);
    message.Denom !== undefined && (obj.Denom = message.Denom);
    message.Sequence !== undefined && (obj.Sequence = message.Sequence);
    return obj;
  },

  fromPartial(object: DeepPartial<Channel>): Channel {
    const message = { ...baseChannel } as Channel;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    if (object.MultisigAddr !== undefined && object.MultisigAddr !== null) {
      message.MultisigAddr = object.MultisigAddr;
    } else {
      message.MultisigAddr = "";
    }
    if (object.PartA !== undefined && object.PartA !== null) {
      message.PartA = object.PartA;
    } else {
      message.PartA = "";
    }
    if (object.PartB !== undefined && object.PartB !== null) {
      message.PartB = object.PartB;
    } else {
      message.PartB = "";
    }
    if (object.Denom !== undefined && object.Denom !== null) {
      message.Denom = object.Denom;
    } else {
      message.Denom = "";
    }
    if (object.Sequence !== undefined && object.Sequence !== null) {
      message.Sequence = object.Sequence;
    } else {
      message.Sequence = "";
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;
