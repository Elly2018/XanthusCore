import { Schema, Document } from 'mongoose'
import { ChannelType } from "../Utility/ChannelType";
import { FileSetting } from "./channel/IFile";
import { TextSetting } from "./channel/IText";

export interface IChannel {
    _id?: string
    name: string
    type: number
    group: boolean
    groupid: string
    textSetting?: TextSetting
    fileSetting?: FileSetting
}

export class IChannelDocs extends Document {
    name: string = ""
    type: number = 0
    group: boolean = false
    groupid: string = ""
    textSetting?: TextSetting = undefined
    fileSetting?: FileSetting = undefined

    GetChannelType(){
        return ChannelType[this.type]
    }
}

export const SChannel:Schema = new Schema({
    name: String,
    type: Number,
    group: Boolean,
    groupid: String,

    textSetting: {
        delay: Number
    },

    fileSetting: {
        root: String,
        usenas: Boolean,
        nas: [
            {
                label: String,
                address: String
            }
        ],
        realBookmark:[String],
        virtualBookmark: [String]
    },

    

    notices: [
        {account: String, value: Number}
    ],
    createdate: {type: Date, default: Date.now}
})