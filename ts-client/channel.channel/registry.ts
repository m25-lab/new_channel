import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgSendercommit } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";
import { MsgSenderwithdrawtimelock } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgWithdrawTimelock } from "./types/channel/tx";
import { MsgAcceptfund } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgSendercommit", MsgSendercommit],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    ["/channel.channel.MsgSenderwithdrawtimelock", MsgSenderwithdrawtimelock],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgFund", MsgFund],
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    ["/channel.channel.MsgAcceptfund", MsgAcceptfund],
    
];

export { msgTypes }