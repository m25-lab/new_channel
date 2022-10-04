/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "channel.channel";

export interface Commitment {
  index: string;
  from: string;
  coinA: Coin | undefined;
  toATimelock: string;
  toBHashlock: string;
  coinlock: Coin | undefined;
  blockheight: number;
  hashcode: string;
}

const baseCommitment: object = {
  index: "",
  from: "",
  toATimelock: "",
  toBHashlock: "",
  blockheight: 0,
  hashcode: "",
};

export const Commitment = {
  encode(message: Commitment, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.from !== "") {
      writer.uint32(18).string(message.from);
    }
    if (message.coinA !== undefined) {
      Coin.encode(message.coinA, writer.uint32(26).fork()).ldelim();
    }
    if (message.toATimelock !== "") {
      writer.uint32(34).string(message.toATimelock);
    }
    if (message.toBHashlock !== "") {
      writer.uint32(42).string(message.toBHashlock);
    }
    if (message.coinlock !== undefined) {
      Coin.encode(message.coinlock, writer.uint32(50).fork()).ldelim();
    }
    if (message.blockheight !== 0) {
      writer.uint32(56).uint64(message.blockheight);
    }
    if (message.hashcode !== "") {
      writer.uint32(66).string(message.hashcode);
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
          message.coinA = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.toATimelock = reader.string();
          break;
        case 5:
          message.toBHashlock = reader.string();
          break;
        case 6:
          message.coinlock = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.blockheight = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.hashcode = reader.string();
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
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromJSON(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toATimelock !== undefined && object.toATimelock !== null) {
      message.toATimelock = String(object.toATimelock);
    } else {
      message.toATimelock = "";
    }
    if (object.toBHashlock !== undefined && object.toBHashlock !== null) {
      message.toBHashlock = String(object.toBHashlock);
    } else {
      message.toBHashlock = "";
    }
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = Coin.fromJSON(object.coinlock);
    } else {
      message.coinlock = undefined;
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
    return message;
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.from !== undefined && (obj.from = message.from);
    message.coinA !== undefined &&
      (obj.coinA = message.coinA ? Coin.toJSON(message.coinA) : undefined);
    message.toATimelock !== undefined &&
      (obj.toATimelock = message.toATimelock);
    message.toBHashlock !== undefined &&
      (obj.toBHashlock = message.toBHashlock);
    message.coinlock !== undefined &&
      (obj.coinlock = message.coinlock
        ? Coin.toJSON(message.coinlock)
        : undefined);
    message.blockheight !== undefined &&
      (obj.blockheight = message.blockheight);
    message.hashcode !== undefined && (obj.hashcode = message.hashcode);
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
    if (object.coinA !== undefined && object.coinA !== null) {
      message.coinA = Coin.fromPartial(object.coinA);
    } else {
      message.coinA = undefined;
    }
    if (object.toATimelock !== undefined && object.toATimelock !== null) {
      message.toATimelock = object.toATimelock;
    } else {
      message.toATimelock = "";
    }
    if (object.toBHashlock !== undefined && object.toBHashlock !== null) {
      message.toBHashlock = object.toBHashlock;
    } else {
      message.toBHashlock = "";
    }
    if (object.coinlock !== undefined && object.coinlock !== null) {
      message.coinlock = Coin.fromPartial(object.coinlock);
    } else {
      message.coinlock = undefined;
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
