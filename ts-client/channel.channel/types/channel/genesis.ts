/* eslint-disable */
import { Params } from "../channel/params";
import { Commitment } from "../channel/commitment";
import { Channel } from "../channel/channel";
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "channel.channel";

/** GenesisState defines the channel module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  commitmentList: Commitment[];
  /** this line is used by starport scaffolding # genesis/proto/state */
  channelList: Channel[];
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.commitmentList) {
      Commitment.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.channelList) {
      Channel.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    message.commitmentList = [];
    message.channelList = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.commitmentList.push(
            Commitment.decode(reader, reader.uint32())
          );
          break;
        case 3:
          message.channelList.push(Channel.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.commitmentList = [];
    message.channelList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.commitmentList !== undefined && object.commitmentList !== null) {
      for (const e of object.commitmentList) {
        message.commitmentList.push(Commitment.fromJSON(e));
      }
    }
    if (object.channelList !== undefined && object.channelList !== null) {
      for (const e of object.channelList) {
        message.channelList.push(Channel.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.commitmentList) {
      obj.commitmentList = message.commitmentList.map((e) =>
        e ? Commitment.toJSON(e) : undefined
      );
    } else {
      obj.commitmentList = [];
    }
    if (message.channelList) {
      obj.channelList = message.channelList.map((e) =>
        e ? Channel.toJSON(e) : undefined
      );
    } else {
      obj.channelList = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    message.commitmentList = [];
    message.channelList = [];
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.commitmentList !== undefined && object.commitmentList !== null) {
      for (const e of object.commitmentList) {
        message.commitmentList.push(Commitment.fromPartial(e));
      }
    }
    if (object.channelList !== undefined && object.channelList !== null) {
      for (const e of object.channelList) {
        message.channelList.push(Channel.fromPartial(e));
      }
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
