import { GeneratedType } from "@cosmjs/proto-signing";
import { MsgCloseChannel } from "./types/channel/tx";
import { MsgCommitment } from "./types/channel/tx";
import { MsgOpenChannel } from "./types/channel/tx";
import { MsgFund } from "./types/channel/tx";
import { MsgWithdrawTimelock } from "./types/channel/tx";
import { MsgWithdrawHashlock } from "./types/channel/tx";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/channel.channel.MsgCloseChannel", MsgCloseChannel],
    ["/channel.channel.MsgCommitment", MsgCommitment],
    ["/channel.channel.MsgOpenChannel", MsgOpenChannel],
    ["/channel.channel.MsgFund", MsgFund],
    ["/channel.channel.MsgWithdrawTimelock", MsgWithdrawTimelock],
    ["/channel.channel.MsgWithdrawHashlock", MsgWithdrawHashlock],
    
];

export { msgTypes }