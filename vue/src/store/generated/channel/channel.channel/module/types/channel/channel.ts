/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "channel.channel";

export interface Channel {
  index: string;
  multisigAddr: string;
  partA: string;
  partB: string;
}

const baseChannel: object = {
  index: "",
  multisigAddr: "",
  partA: "",
  partB: "",
};

export const Channel = {
  encode(message: Channel, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.multisigAddr !== "") {
      writer.uint32(18).string(message.multisigAddr);
    }
    if (message.partA !== "") {
      writer.uint32(26).string(message.partA);
    }
    if (message.partB !== "") {
      writer.uint32(34).string(message.partB);
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
          message.index = reader.string();
          break;
        case 2:
          message.multisigAddr = reader.string();
          break;
        case 3:
          message.partA = reader.string();
          break;
        case 4:
          message.partB = reader.string();
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
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.multisigAddr !== undefined && object.multisigAddr !== null) {
      message.multisigAddr = String(object.multisigAddr);
    } else {
      message.multisigAddr = "";
    }
    if (object.partA !== undefined && object.partA !== null) {
      message.partA = String(object.partA);
    } else {
      message.partA = "";
    }
    if (object.partB !== undefined && object.partB !== null) {
      message.partB = String(object.partB);
    } else {
      message.partB = "";
    }
    return message;
  },

  toJSON(message: Channel): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.multisigAddr !== undefined &&
      (obj.multisigAddr = message.multisigAddr);
    message.partA !== undefined && (obj.partA = message.partA);
    message.partB !== undefined && (obj.partB = message.partB);
    return obj;
  },

  fromPartial(object: DeepPartial<Channel>): Channel {
    const message = { ...baseChannel } as Channel;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.multisigAddr !== undefined && object.multisigAddr !== null) {
      message.multisigAddr = object.multisigAddr;
    } else {
      message.multisigAddr = "";
    }
    if (object.partA !== undefined && object.partA !== null) {
      message.partA = object.partA;
    } else {
      message.partA = "";
    }
    if (object.partB !== undefined && object.partB !== null) {
      message.partB = object.partB;
    } else {
      message.partB = "";
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
