/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "channel.channel";

export interface Fwdcommit {
  index: string;
  channelid: string;
  sender: string;
  receiver: string;
  hashcodedest: string;
  timelockreceiver: string;
  timelocksender: string;
  hashcodehtlc: string;
  coin: Coin | undefined;
}

const baseFwdcommit: object = {
  index: "",
  channelid: "",
  sender: "",
  receiver: "",
  hashcodedest: "",
  timelockreceiver: "",
  timelocksender: "",
  hashcodehtlc: "",
};

export const Fwdcommit = {
  encode(message: Fwdcommit, writer: Writer = Writer.create()): Writer {
    if (message.index !== "") {
      writer.uint32(10).string(message.index);
    }
    if (message.channelid !== "") {
      writer.uint32(18).string(message.channelid);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(34).string(message.receiver);
    }
    if (message.hashcodedest !== "") {
      writer.uint32(42).string(message.hashcodedest);
    }
    if (message.timelockreceiver !== "") {
      writer.uint32(50).string(message.timelockreceiver);
    }
    if (message.timelocksender !== "") {
      writer.uint32(58).string(message.timelocksender);
    }
    if (message.hashcodehtlc !== "") {
      writer.uint32(66).string(message.hashcodehtlc);
    }
    if (message.coin !== undefined) {
      Coin.encode(message.coin, writer.uint32(74).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Fwdcommit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseFwdcommit } as Fwdcommit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.string();
          break;
        case 2:
          message.channelid = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.receiver = reader.string();
          break;
        case 5:
          message.hashcodedest = reader.string();
          break;
        case 6:
          message.timelockreceiver = reader.string();
          break;
        case 7:
          message.timelocksender = reader.string();
          break;
        case 8:
          message.hashcodehtlc = reader.string();
          break;
        case 9:
          message.coin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Fwdcommit {
    const message = { ...baseFwdcommit } as Fwdcommit;
    if (object.index !== undefined && object.index !== null) {
      message.index = String(object.index);
    } else {
      message.index = "";
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = String(object.channelid);
    } else {
      message.channelid = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.hashcodedest !== undefined && object.hashcodedest !== null) {
      message.hashcodedest = String(object.hashcodedest);
    } else {
      message.hashcodedest = "";
    }
    if (
      object.timelockreceiver !== undefined &&
      object.timelockreceiver !== null
    ) {
      message.timelockreceiver = String(object.timelockreceiver);
    } else {
      message.timelockreceiver = "";
    }
    if (object.timelocksender !== undefined && object.timelocksender !== null) {
      message.timelocksender = String(object.timelocksender);
    } else {
      message.timelocksender = "";
    }
    if (object.hashcodehtlc !== undefined && object.hashcodehtlc !== null) {
      message.hashcodehtlc = String(object.hashcodehtlc);
    } else {
      message.hashcodehtlc = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromJSON(object.coin);
    } else {
      message.coin = undefined;
    }
    return message;
  },

  toJSON(message: Fwdcommit): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = message.index);
    message.channelid !== undefined && (obj.channelid = message.channelid);
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.hashcodedest !== undefined &&
      (obj.hashcodedest = message.hashcodedest);
    message.timelockreceiver !== undefined &&
      (obj.timelockreceiver = message.timelockreceiver);
    message.timelocksender !== undefined &&
      (obj.timelocksender = message.timelocksender);
    message.hashcodehtlc !== undefined &&
      (obj.hashcodehtlc = message.hashcodehtlc);
    message.coin !== undefined &&
      (obj.coin = message.coin ? Coin.toJSON(message.coin) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Fwdcommit>): Fwdcommit {
    const message = { ...baseFwdcommit } as Fwdcommit;
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index;
    } else {
      message.index = "";
    }
    if (object.channelid !== undefined && object.channelid !== null) {
      message.channelid = object.channelid;
    } else {
      message.channelid = "";
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.hashcodedest !== undefined && object.hashcodedest !== null) {
      message.hashcodedest = object.hashcodedest;
    } else {
      message.hashcodedest = "";
    }
    if (
      object.timelockreceiver !== undefined &&
      object.timelockreceiver !== null
    ) {
      message.timelockreceiver = object.timelockreceiver;
    } else {
      message.timelockreceiver = "";
    }
    if (object.timelocksender !== undefined && object.timelocksender !== null) {
      message.timelocksender = object.timelocksender;
    } else {
      message.timelocksender = "";
    }
    if (object.hashcodehtlc !== undefined && object.hashcodehtlc !== null) {
      message.hashcodehtlc = object.hashcodehtlc;
    } else {
      message.hashcodehtlc = "";
    }
    if (object.coin !== undefined && object.coin !== null) {
      message.coin = Coin.fromPartial(object.coin);
    } else {
      message.coin = undefined;
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
