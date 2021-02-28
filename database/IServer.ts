import mongoose from 'mongoose'

/**
 * Server element
 * @param id Account id
 * @param role Role list (ID)
 */
export interface IServerElement{
    id: string,
    roles: Array<string>
}

/**
 * Server template
 * @param title Channel title
 * @param channeltype Channel type
 */
export interface IServerTemp{
    title: string,
    channeltype: number
}

export interface IServerGroupChannel{
    name: string,
    channel: Array<string>
}

/**
 * Server data module
 * @param name Server name
 * @param extension Server profile picture extension
 * @param group Server group list
 * @param staff Server staff list
 * @param role Server role list
 * @param template Server use template
 * @param channel Server channel collection
 */
export interface IServer{
    _id?: string,
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
    createdate: number
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
                name: String,
                channel: [String]
            }
        ]
    },
    createdate: {type:Date, default:Date.now}
})