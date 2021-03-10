import { ChannelType } from './ChannelType'

export interface ChannelTemplate{
    title: string,
    type: number,
}

export function Lobby():Array<ChannelTemplate>{
    return [
        {title: "General", type: ChannelType.Text},
        {title: "Bill", type: ChannelType.Bill},
        {title: "Graph", type: ChannelType.Graph},
        {title: "Outsource", type: ChannelType.Outsource},
        {title: "Request", type: ChannelType.Request},
    ]
}

export function Group(name:string):Array<ChannelTemplate>{
    return [
        {title: name + " Chat", type: ChannelType.Text},
        {title: name + " File", type: ChannelType.File},
        {title: name + " Task", type: ChannelType.Task},
        {title: name + " Issue", type: ChannelType.Issue},
    ]
}