import { IBaseReply } from "../IBaseReply";
import { IChannel } from '../database/IChannel'

/**
 * Client receiver message\
 * Update channel element request
 * @param channel_id Channel ID
 */
export interface IServerUpdateChannel extends IBaseReply {
    channel?: Array<IChannel>
}