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

/**
 * Server data module
 * @param name Server name
 * @param group Server group list
 * @param staff Server staff list
 * @param role Server role list
 * @param template Server use template
 * @param channel Server channel collection
 */
export interface IServer{
    name: string,
    group: Array<IServerElement>,
    staff: Array<IServerElement>,
    role: Array<string>,
    template:{
        lobby: Array<IServerTemp>,
        group: Array<IServerTemp>
    },
    channel:{
        lobby:Array<string>,
        group:Array<string>
    },
    createdate?: number
}

export const SServer:mongoose.Schema = new mongoose.Schema({
    name: String,
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
        group:[String]
    },
    createdate: {type:Date, default:Date.now}
})