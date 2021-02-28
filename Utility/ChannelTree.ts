import { IChannel } from './../database/IChannel'

export interface ChannelTree extends IChannel {
    children: Array<IChannel>
}