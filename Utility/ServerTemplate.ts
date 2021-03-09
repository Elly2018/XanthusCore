import { IProjectTemp } from './../database/IProject'
import { ChannelType } from './ChannelType'

export const LobbyFixed:IProjectTemp[] = [
    {title: "Bill", channeltype: ChannelType.Bill},
    {title: "Request", channeltype: ChannelType.Request},
    {title: "Monitor", channeltype: ChannelType.Graph},
]

export const GroupFixed:IProjectTemp[] = [
    {title: "<$> Chat", channeltype: ChannelType.Text},
    {title: "<$> Issue", channeltype: ChannelType.Issue},
    {title: "<$> Task", channeltype: ChannelType.Task},
]


export const LobbyDefault:IProjectTemp[] = [
    {title: "General", channeltype: ChannelType.Text},
    {title:"Project", channeltype: ChannelType.File},
]

export const GroupDefault:IProjectTemp[] = [
    {title: "Chat", channeltype: ChannelType.Text},
]