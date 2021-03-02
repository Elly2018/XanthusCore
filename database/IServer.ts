import mongoose from 'mongoose'
import { IDatabaseBase } from './IDatabaseBase'

export interface IServerElement{
    id: string,
    roles: Array<string>
}

export interface IServerTemp{
    title: string,
    channeltype: number
}

export interface IServerGroupChannel{
    id: string,
    name: string,
    channel: Array<string>
}

export interface IServer extends IDatabaseBase{
    name: string,
    owner: string,
    color: string,
    group: Array<IServerElement>,
    staff: Array<IServerElement>,
    role: Array<string>,
    template:{
        lobby: Array<IServerTemp>,
        group: Array<IServerTemp>
    },
    channel:{
        lobby:Array<string>,
        group:Array<IServerGroupChannel>
    },
}

export const SServer:mongoose.Schema = new mongoose.Schema({
    name: String,
    owner: String,
    color: {
        type: String,
        default: "#129853"
    },
    group: [
        {
            id: String,
            roles: [String]
        }
    ],
    staff: [
        {
            id: String,
            roles: [String]
        }
    ],
    role:[String],
    template:{
        lobby: [
            {title: String, channeltype: Number}
        ],
        group: [
            {title: String, channeltype: Number}
        ]
    },
    channel:{
        lobby:[String],
        group:[
            {
                id: String,
                name: String,
                channel: [String]
            }
        ]
    },
    createdate: {type:Date, default:Date.now}
})