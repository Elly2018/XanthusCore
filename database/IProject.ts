import mongoose from 'mongoose'
import { IDatabaseBase } from './IDatabaseBase'

export interface IProjectElement{
    id: string,
    roles: Array<string>
}

export interface IProjectGroupElement{
    id: string,
    roles: Array<string>
    group: Array<string>
}

export interface IProjectGroupChannel{
    id: string,
    name: string,
    channel: Array<string>
}

export interface IProject extends IDatabaseBase{
    name: string,
    projectGroup: string,
    secondary: string,
    description: string,
    budget: number,
    startday: number,
    endday: number,
    sign: number,
    Initial: number,
    owner: string,
    color: string,
    group: Array<IProjectElement>,
    staff: Array<IProjectGroupElement>,
    role: Array<string>,
    channel:{
        lobby:Array<string>,
        group:Array<IProjectGroupChannel>
    },
}

export const SProject:mongoose.Schema = new mongoose.Schema({
    name: String,
    projectGroup: String,
    secondary: String,
    description: String,
    budget: Number,
    startday: Number,
    endday: Number,
    sign: Number,
    Initial: Number,
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
            roles: [String],
            group: [String]
        }
    ],
    role:[String],
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