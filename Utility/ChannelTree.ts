import { IGroup } from '../database/element/IGroup';
import { IChannel } from './../database/IChannel'

/**
 * Lobby channel data structure
 */
export interface LobbyChannelTree{
    text: IChannel
    file: IChannel
    request: IChannel
    graph: IChannel
    bill: IChannel
    outsource: IChannel
}

/**
 * Group channel data structure
 */
export interface GroupChannelTree{
    /**
     * Group target
     */
    group: IGroup
    text: IChannel
    task: IChannel
    issue: IChannel
}

/**
 * project channel structure
 */
export interface ChannelTree {
    lobby: LobbyChannelTree
    group: Array<GroupChannelTree>
}

/**
 * The structure use for display channel on user interface\
 * Tree data structure
 */
export interface ChannelTreeView {
    id: string
    target: IChannel | undefined
    children: Array<ChannelTreeView>
}