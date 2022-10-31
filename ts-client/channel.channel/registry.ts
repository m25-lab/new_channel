import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";
import { MsgReceivercommit } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";
import { MsgAcceptfund } from "./types/channel/tx";
import { MsgReceiverwithdraw } from "./types/channel/tx";
import { MsgSenderwithdrawtimelock } from "./types/channel/tx";
import { MsgWithdrawTimelock } from "./types/channel/tx";
import { MsgSenderwithdrawhashlock } from "./types/channel/tx";
import { MsgSendercommit } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgFund", MsgFund],
    ["/channel.channel.MsgReceivercommit", MsgReceivercommit],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    ["/channel.channel.MsgAcceptfund", MsgAcceptfund],
    ["/channel.channel.MsgReceiverwithdraw", MsgReceiverwithdraw],
    ["/channel.channel.MsgSenderwithdrawtimelock", MsgSenderwithdrawtimelock],
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    ["/channel.channel.MsgSenderwithdrawhashlock", MsgSenderwithdrawhashlock],
    ["/channel.channel.MsgSendercommit", MsgSendercommit],
    
];

export { msgTypes }