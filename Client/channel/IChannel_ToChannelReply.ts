import { IBaseReply } from "../../IBaseReply";
import { IBaseChannel, IBaseChannelSetting } from '../../database/channel/IBaseChannel'

export interface IChannelToChannelReply extends IBaseReply{
    channel: IBaseChannel<IBaseChannelSetting>
}