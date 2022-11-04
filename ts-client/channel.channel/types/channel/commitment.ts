/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../cosmos/base/v1beta1/coin";

export const protobufPackage = "channel.channel";

export interface Commitment {
  Index: string;
  From: string;
  CoinToCreator: Coin | undefined;
  ToTimelockAddr: string;
  ToHashlockAddr: string;
  CoinToHtlc: Coin | undefined;
  Timelock: number;
  Hashcode: string;
  ChannelID: string;
}

const baseCommitment: object = {
  Index: "",
  From: "",
  ToTimelockAddr: "",
  ToHashlockAddr: "",
  Timelock: 0,
  Hashcode: "",
  ChannelID: "",
};

export const Commitment = {
  encode(message: Commitment, writer: Writer = Writer.create()): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    if (message.From !== "") {
      writer.uint32(18).string(message.From);
    }
    if (message.CoinToCreator !== undefined) {
      Coin.encode(message.CoinToCreator, writer.uint32(26).fork()).ldelim();
    }
    if (message.ToTimelockAddr !== "") {
      writer.uint32(34).string(message.ToTimelockAddr);
    }
    if (message.ToHashlockAddr !== "") {
      writer.uint32(42).string(message.ToHashlockAddr);
    }
    if (message.CoinToHtlc !== undefined) {
      Coin.encode(message.CoinToHtlc, writer.uint32(50).fork()).ldelim();
    }
    if (message.Timelock !== 0) {
      writer.uint32(56).uint64(message.Timelock);
    }
    if (message.Hashcode !== "") {
      writer.uint32(66).string(message.Hashcode);
    }
    if (message.ChannelID !== "") {
      writer.uint32(74).string(message.ChannelID);
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
          message.Index = reader.string();
          break;
        case 2:
          message.From = reader.string();
          break;
        case 3:
          message.CoinToCreator = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.ToTimelockAddr = reader.string();
          break;
        case 5:
          message.ToHashlockAddr = reader.string();
          break;
        case 6:
          message.CoinToHtlc = Coin.decode(reader, reader.uint32());
          break;
        case 7:
          message.Timelock = longToNumber(reader.uint64() as Long);
          break;
        case 8:
          message.Hashcode = reader.string();
          break;
        case 9:
          message.ChannelID = reader.string();
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
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = String(object.From);
    } else {
      message.From = "";
    }
    if (object.CoinToCreator !== undefined && object.CoinToCreator !== null) {
      message.CoinToCreator = Coin.fromJSON(object.CoinToCreator);
    } else {
      message.CoinToCreator = undefined;
    }
    if (object.ToTimelockAddr !== undefined && object.ToTimelockAddr !== null) {
      message.ToTimelockAddr = String(object.ToTimelockAddr);
    } else {
      message.ToTimelockAddr = "";
    }
    if (object.ToHashlockAddr !== undefined && object.ToHashlockAddr !== null) {
      message.ToHashlockAddr = String(object.ToHashlockAddr);
    } else {
      message.ToHashlockAddr = "";
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromJSON(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = Number(object.Timelock);
    } else {
      message.Timelock = 0;
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = String(object.Hashcode);
    } else {
      message.Hashcode = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    return message;
  },

  toJSON(message: Commitment): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    message.From !== undefined && (obj.From = message.From);
    message.CoinToCreator !== undefined &&
      (obj.CoinToCreator = message.CoinToCreator
        ? Coin.toJSON(message.CoinToCreator)
        : undefined);
    message.ToTimelockAddr !== undefined &&
      (obj.ToTimelockAddr = message.ToTimelockAddr);
    message.ToHashlockAddr !== undefined &&
      (obj.ToHashlockAddr = message.ToHashlockAddr);
    message.CoinToHtlc !== undefined &&
      (obj.CoinToHtlc = message.CoinToHtlc
        ? Coin.toJSON(message.CoinToHtlc)
        : undefined);
    message.Timelock !== undefined && (obj.Timelock = message.Timelock);
    message.Hashcode !== undefined && (obj.Hashcode = message.Hashcode);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    return obj;
  },

  fromPartial(object: DeepPartial<Commitment>): Commitment {
    const message = { ...baseCommitment } as Commitment;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    if (object.From !== undefined && object.From !== null) {
      message.From = object.From;
    } else {
      message.From = "";
    }
    if (object.CoinToCreator !== undefined && object.CoinToCreator !== null) {
      message.CoinToCreator = Coin.fromPartial(object.CoinToCreator);
    } else {
      message.CoinToCreator = undefined;
    }
    if (object.ToTimelockAddr !== undefined && object.ToTimelockAddr !== null) {
      message.ToTimelockAddr = object.ToTimelockAddr;
    } else {
      message.ToTimelockAddr = "";
    }
    if (object.ToHashlockAddr !== undefined && object.ToHashlockAddr !== null) {
      message.ToHashlockAddr = object.ToHashlockAddr;
    } else {
      message.ToHashlockAddr = "";
    }
    if (object.CoinToHtlc !== undefined && object.CoinToHtlc !== null) {
      message.CoinToHtlc = Coin.fromPartial(object.CoinToHtlc);
    } else {
      message.CoinToHtlc = undefined;
    }
    if (object.Timelock !== undefined && object.Timelock !== null) {
      message.Timelock = object.Timelock;
    } else {
      message.Timelock = 0;
    }
    if (object.Hashcode !== undefined && object.Hashcode !== null) {
      message.Hashcode = object.Hashcode;
    } else {
      message.Hashcode = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
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
