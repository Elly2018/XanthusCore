import mongoose from "mongoose";
import { FileSetting } from "./channel/IFile";
import { TextSetting } from "./channel/IText";

export interface ChannelNotice {
    account: string
    value: number
}

export interface IChannel extends mongoose.Document {
    name: string
    type: number
    group: boolean
    groupid: string
    textSetting?: TextSetting
    fileSetting?: FileSetting
    notices: Array<ChannelNotice>
}

export interface IChannelDocs extends mongoose.Document {}

export const SChannel:mongoose.Schema = new mongoose.Schema({
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