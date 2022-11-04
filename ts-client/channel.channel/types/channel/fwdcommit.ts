/* eslint-disable */
import { Coin } from "../cosmos/base/v1beta1/coin";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "channel.channel";

export interface Fwdcommit {
  Index: string;
  ChannelID: string;
  Sender: string;
  Receiver: string;
  HashcodeDest: string;
  TimelockReceiver: string;
  TimelockSender: string;
  HashcodeHtlc: string;
  CoinTransfer: Coin | undefined;
  Creator: string;
}

const baseFwdcommit: object = {
  Index: "",
  ChannelID: "",
  Sender: "",
  Receiver: "",
  HashcodeDest: "",
  TimelockReceiver: "",
  TimelockSender: "",
  HashcodeHtlc: "",
  Creator: "",
};

export const Fwdcommit = {
  encode(message: Fwdcommit, writer: Writer = Writer.create()): Writer {
    if (message.Index !== "") {
      writer.uint32(10).string(message.Index);
    }
    if (message.ChannelID !== "") {
      writer.uint32(18).string(message.ChannelID);
    }
    if (message.Sender !== "") {
      writer.uint32(26).string(message.Sender);
    }
    if (message.Receiver !== "") {
      writer.uint32(34).string(message.Receiver);
    }
    if (message.HashcodeDest !== "") {
      writer.uint32(42).string(message.HashcodeDest);
    }
    if (message.TimelockReceiver !== "") {
      writer.uint32(50).string(message.TimelockReceiver);
    }
    if (message.TimelockSender !== "") {
      writer.uint32(58).string(message.TimelockSender);
    }
    if (message.HashcodeHtlc !== "") {
      writer.uint32(66).string(message.HashcodeHtlc);
    }
    if (message.CoinTransfer !== undefined) {
      Coin.encode(message.CoinTransfer, writer.uint32(74).fork()).ldelim();
    }
    if (message.Creator !== "") {
      writer.uint32(82).string(message.Creator);
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
          message.Index = reader.string();
          break;
        case 2:
          message.ChannelID = reader.string();
          break;
        case 3:
          message.Sender = reader.string();
          break;
        case 4:
          message.Receiver = reader.string();
          break;
        case 5:
          message.HashcodeDest = reader.string();
          break;
        case 6:
          message.TimelockReceiver = reader.string();
          break;
        case 7:
          message.TimelockSender = reader.string();
          break;
        case 8:
          message.HashcodeHtlc = reader.string();
          break;
        case 9:
          message.CoinTransfer = Coin.decode(reader, reader.uint32());
          break;
        case 10:
          message.Creator = reader.string();
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
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = String(object.Index);
    } else {
      message.Index = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = String(object.ChannelID);
    } else {
      message.ChannelID = "";
    }
    if (object.Sender !== undefined && object.Sender !== null) {
      message.Sender = String(object.Sender);
    } else {
      message.Sender = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = String(object.Receiver);
    } else {
      message.Receiver = "";
    }
    if (object.HashcodeDest !== undefined && object.HashcodeDest !== null) {
      message.HashcodeDest = String(object.HashcodeDest);
    } else {
      message.HashcodeDest = "";
    }
    if (
      object.TimelockReceiver !== undefined &&
      object.TimelockReceiver !== null
    ) {
      message.TimelockReceiver = String(object.TimelockReceiver);
    } else {
      message.TimelockReceiver = "";
    }
    if (object.TimelockSender !== undefined && object.TimelockSender !== null) {
      message.TimelockSender = String(object.TimelockSender);
    } else {
      message.TimelockSender = "";
    }
    if (object.HashcodeHtlc !== undefined && object.HashcodeHtlc !== null) {
      message.HashcodeHtlc = String(object.HashcodeHtlc);
    } else {
      message.HashcodeHtlc = "";
    }
    if (object.CoinTransfer !== undefined && object.CoinTransfer !== null) {
      message.CoinTransfer = Coin.fromJSON(object.CoinTransfer);
    } else {
      message.CoinTransfer = undefined;
    }
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = String(object.Creator);
    } else {
      message.Creator = "";
    }
    return message;
  },

  toJSON(message: Fwdcommit): unknown {
    const obj: any = {};
    message.Index !== undefined && (obj.Index = message.Index);
    message.ChannelID !== undefined && (obj.ChannelID = message.ChannelID);
    message.Sender !== undefined && (obj.Sender = message.Sender);
    message.Receiver !== undefined && (obj.Receiver = message.Receiver);
    message.HashcodeDest !== undefined &&
      (obj.HashcodeDest = message.HashcodeDest);
    message.TimelockReceiver !== undefined &&
      (obj.TimelockReceiver = message.TimelockReceiver);
    message.TimelockSender !== undefined &&
      (obj.TimelockSender = message.TimelockSender);
    message.HashcodeHtlc !== undefined &&
      (obj.HashcodeHtlc = message.HashcodeHtlc);
    message.CoinTransfer !== undefined &&
      (obj.CoinTransfer = message.CoinTransfer
        ? Coin.toJSON(message.CoinTransfer)
        : undefined);
    message.Creator !== undefined && (obj.Creator = message.Creator);
    return obj;
  },

  fromPartial(object: DeepPartial<Fwdcommit>): Fwdcommit {
    const message = { ...baseFwdcommit } as Fwdcommit;
    if (object.Index !== undefined && object.Index !== null) {
      message.Index = object.Index;
    } else {
      message.Index = "";
    }
    if (object.ChannelID !== undefined && object.ChannelID !== null) {
      message.ChannelID = object.ChannelID;
    } else {
      message.ChannelID = "";
    }
    if (object.Sender !== undefined && object.Sender !== null) {
      message.Sender = object.Sender;
    } else {
      message.Sender = "";
    }
    if (object.Receiver !== undefined && object.Receiver !== null) {
      message.Receiver = object.Receiver;
    } else {
      message.Receiver = "";
    }
    if (object.HashcodeDest !== undefined && object.HashcodeDest !== null) {
      message.HashcodeDest = object.HashcodeDest;
    } else {
      message.HashcodeDest = "";
    }
    if (
      object.TimelockReceiver !== undefined &&
      object.TimelockReceiver !== null
    ) {
      message.TimelockReceiver = object.TimelockReceiver;
    } else {
      message.TimelockReceiver = "";
    }
    if (object.TimelockSender !== undefined && object.TimelockSender !== null) {
      message.TimelockSender = object.TimelockSender;
    } else {
      message.TimelockSender = "";
    }
    if (object.HashcodeHtlc !== undefined && object.HashcodeHtlc !== null) {
      message.HashcodeHtlc = object.HashcodeHtlc;
    } else {
      message.HashcodeHtlc = "";
    }
    if (object.CoinTransfer !== undefined && object.CoinTransfer !== null) {
      message.CoinTransfer = Coin.fromPartial(object.CoinTransfer);
    } else {
      message.CoinTransfer = undefined;
    }
    if (object.Creator !== undefined && object.Creator !== null) {
      message.Creator = object.Creator;
    } else {
      message.Creator = "";
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
