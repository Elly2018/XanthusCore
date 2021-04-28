import { IGroup } from '../database/element/IGroup';
import { IChannel } from './../database/IChannel'

export interface LobbyChannelTree{
    text: IChannel
    file: IChannel
    request: IChannel
    graph: IChannel
    bill: IChannel
    outsource: IChannel
}

export interface GroupChannelTree{
    group: IGroup
    text: IChannel
    task: IChannel
    issue: IChannel
}

/**
 * Represent project channel structure
 */
export interface ChannelTree {
    lobby: LobbyChannelTree
    group: Array<GroupChannelTree>
}

/**
 * The structure use for display channel on user interface
 */
export interface ChannelTreeView {
    id: string
    target: IChannel | undefined
    children: Array<ChannelTreeView>
}