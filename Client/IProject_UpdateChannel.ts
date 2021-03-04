import { IBaseReply } from "../IBaseReply";
import { IChannel } from '../database/IChannel'

export interface IProjectUpdateChannel extends IBaseReply {
    channel?: Array<IChannel>
}