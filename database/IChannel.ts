import { Schema, Document } from 'mongoose'
import { ChannelType } from "../Utility/ChannelType";
import { TextSetting } from "./channel/TextSetting";
import { FileSetting } from "./channel/FileSetting";
import { IssueSetting } from './channel/IssueSetting';
import { RequestSetting } from './channel/RequestSetting';

export interface IChannel {
    _id?: string
    name: string
    type: number
    group: boolean
    groupid: string
    textSetting?: TextSetting
    fileSetting?: FileSetting
    issueSetting?: IssueSetting
    requestSetting?: RequestSetting
    createdate?: number
}

export class IChannelDocs extends Document implements IChannel {
    name: string = ""
    type: number = 0
    group: boolean = false
    groupid: string = ""
    textSetting?: TextSetting = undefined
    fileSetting?: FileSetting = undefined
    issueSetting?: IssueSetting = undefined
    requestSetting?: RequestSetting = undefined

    GetChannelType(){
        return ChannelType[this.type]
    }
}

export const SChannel:Schema = new Schema({
    name: String,
    type: Number,
    group: Boolean,
    groupid: { type: Schema.Types.ObjectId, ref: 'group' },

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

    issueSetting: {
        canpost: Boolean,
        cancomment: Boolean
    },

    requestSetting: {
        canpost: Boolean
    },
    
    createdate: {type: Date, default: Date.now}
})