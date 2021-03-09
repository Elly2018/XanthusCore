import mongoose from 'mongoose'
import { IDatabaseBase } from './IDatabaseBase'

export interface IProjectElement{
    id: string,
    roles: Array<string>
}

export interface IProjectTemp{
    title: string,
    channeltype: number
}

export interface IProjectGroupChannel{
    id: string,
    name: string,
    channel: Array<string>
}

export interface IProject extends IDatabaseBase{
    name: string,
    secondary: string,
    budget: number,
    startday: number,
    endday: number,
    owner: string,
    color: string,
    group: Array<IProjectElement>,
    staff: Array<IProjectElement>,
    role: Array<string>,
    template:{
        lobby: Array<IProjectTemp>,
        group: Array<IProjectTemp>
    },
    channel:{
        lobby:Array<string>,
        group:Array<IProjectGroupChannel>
    },
}

export const SProject:mongoose.Schema = new mongoose.Schema({
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