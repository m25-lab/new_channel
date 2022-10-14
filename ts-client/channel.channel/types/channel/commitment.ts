/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "channel.channel";

export interface Commitment {
  index: string;
  from: string;
  cointocreator: Coin | undefined;
  toTimelock: string;
  toHashlock: string;
  coinhtlc: Coin | undefined;
  blockheight: number;
  hashcode: string;
  channelid: string;
}

const baseCommitment: object = {
  index: "",
  from: "",
  toTimelock: "",
  toHashlock: "",
  blockheight: 0,
  hashcode: "",
  channelid: "",
};

export const Commitment = {
  encode(message: Commitment, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.cointocreator !== undefined) {
      Coin.encode(message.cointocreator, writer.uint32(26).fork()).ldelim();
    }
    if (message.toTimelock !== "") {
      writer.uint32(34).string(message.toTimelock);
    }
    if (message.toHashlock !== "") {
      writer.uint32(42).string(message.toHashlock);
    }
    if (message.coinhtlc !== undefined) {
      Coin.encode(message.coinhtlc, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockheight !== 0) {
      writer.uint32(56).uint64(message.blockheight);
    }
    if (message.hashcode !== "") {
      writer.uint32(66).string(message.hashcode);
    }
    if (message.channelid !== "") {
      writer.uint32(74).string(message.channelid);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Commitment {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommitment } as Commitment;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.from = reader.string();
          break;
        case 3:
          message.cointocreator = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.toTimelock = reader.string();
          break;
        case 5:
          message.toHashlock = reader.string();
          break;
        case 6:
          message.coinhtlc = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.blockheight = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.hashcode = reader.string();
          break;
        case 9:
          message.channelid = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Commitment {
    const message = { ...baseCommitment } as Commitment;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = String(object.from);
    } else {
      message.from = "";
    }
    if (object.cointocreator !== undefined && object.cointocreator !== null) {
      message.cointocreator = Coin.fromJSON(object.cointocreator);
    } else {
      message.cointocreator = undefined;
    }
    if (object.toTimelock !== undefined && object.toTimelock !== null) {
      message.toTimelock = String(object.toTimelock);
    } else {
      message.toTimelock = "";
    }
    if (object.toHashlock !== undefined && object.toHashlock !== null) {
      message.toHashlock = String(object.toHashlock);
    } else {
      message.toHashlock = "";
    }
    if (object.coinhtlc !== undefined && object.coinhtlc !== null) {
      message.coinhtlc = Coin.fromJSON(object.coinhtlc);
    } else {
      message.coinhtlc = undefined;
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = Number(object.blockheight);
    } else {
      message.blockheight = 0;
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = String(object.hashcode);
    } else {
      message.hashcode = "";
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = String(object.channelid);
    } else {
      message.channelid = "";
    }
    return message;
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.from !== undefined && (obj.from = message.from);
    message.cointocreator !== undefined &&
      (obj.cointocreator = message.cointocreator
        ? Coin.toJSON(message.cointocreator)
        : undefined);
    message.toTimelock !== undefined && (obj.toTimelock = message.toTimelock);
    message.toHashlock !== undefined && (obj.toHashlock = message.toHashlock);
    message.coinhtlc !== undefined &&
      (obj.coinhtlc = message.coinhtlc
        ? Coin.toJSON(message.coinhtlc)
        : undefined);
    message.blockheight !== undefined &&
      (obj.blockheight = message.blockheight);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    return obj;
  },

  fromPartial(object: DeepPartial<Commitment>): Commitment {
    const message = { ...baseCommitment } as Commitment;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.from !== undefined && object.from !== null) {
      message.from = object.from;
    } else {
      message.from = "";
    }
    if (object.cointocreator !== undefined && object.cointocreator !== null) {
      message.cointocreator = Coin.fromPartial(object.cointocreator);
    } else {
      message.cointocreator = undefined;
    }
    if (object.toTimelock !== undefined && object.toTimelock !== null) {
      message.toTimelock = object.toTimelock;
    } else {
      message.toTimelock = "";
    }
    if (object.toHashlock !== undefined && object.toHashlock !== null) {
      message.toHashlock = object.toHashlock;
    } else {
      message.toHashlock = "";
    }
    if (object.coinhtlc !== undefined && object.coinhtlc !== null) {
      message.coinhtlc = Coin.fromPartial(object.coinhtlc);
    } else {
      message.coinhtlc = undefined;
    }
    if (object.blockheight !== undefined && object.blockheight !== null) {
      message.blockheight = object.blockheight;
    } else {
      message.blockheight = 0;
    }
    if (object.hashcode !== undefined && object.hashcode !== null) {
      message.hashcode = object.hashcode;
    } else {
      message.hashcode = "";
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = object.channelid;
    } else {
      message.channelid = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

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

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
