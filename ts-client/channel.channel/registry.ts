import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgReceivercommit } from "./types/channel/tx";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgSenderwithdrawhashlock } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";
import { MsgSendercommit } from "./types/channel/tx";
import { MsgAcceptfund } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgReceiverwithdraw } from "./types/channel/tx";
import { MsgWithdrawTimelock } from "./types/channel/tx";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgSenderwithdrawtimelock } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgReceivercommit", MsgReceivercommit],
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgSenderwithdrawhashlock", MsgSenderwithdrawhashlock],
    ["/channel.channel.MsgFund", MsgFund],
    ["/channel.channel.MsgSendercommit", MsgSendercommit],
    ["/channel.channel.MsgAcceptfund", MsgAcceptfund],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgReceiverwithdraw", MsgReceiverwithdraw],
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgSenderwithdrawtimelock", MsgSenderwithdrawtimelock],
    
];

export { msgTypes }