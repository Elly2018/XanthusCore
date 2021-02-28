import { IBase } from "../IBase";

/**
 * Server receiver message\
 * Update channel element request
 * @param channel_id Channel ID
 */
export interface IServerUpdateChannelR extends IBase{
    channel_id: Array<string>
}