import { IServerTemp } from './../database/IServer'
import { ChannelType } from './ChannelType'

export const LobbyFixed:IServerTemp[] = [
    {title: "Notice", channeltype: ChannelType.Text},
    {title: "General", channeltype: ChannelType.Text},
    {title: "Bill", channeltype: ChannelType.Bill},
    {title: "Request", channeltype: ChannelType.Request},
    {title: "Monitor", channeltype: ChannelType.Graph},
    {title: "Log", channeltype: ChannelType.Log}
]

export const GroupFixed:IServerTemp[] = [
    {title: "<$> Chat", channeltype: ChannelType.Text},
    {title: "<$> Issue", channeltype: ChannelType.Issue},
    {title: "<$> Task", channeltype: ChannelType.Task},
    {title: "Log", channeltype: ChannelType.Log}
]


export const LobbyDefault:IServerTemp[] = [
    {title:"Project", channeltype: ChannelType.File},
]

export const GroupDefault:IServerTemp[] = [
    
]