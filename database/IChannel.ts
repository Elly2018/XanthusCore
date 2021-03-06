import { Schema, Document } from 'mongoose'
import { ChannelType } from "../Utility/ChannelType";
import { TextSetting } from "./channel/TextSetting";
import { FileSetting } from "./channel/FileSetting";
import { IssueSetting } from './channel/IssueSetting';
import { RequestSetting } from './channel/RequestSetting';
import { GraphSetting } from './channel/GraphSetting';
import { OutsourceSetting } from './channel/OutsurceSetting';
import { TaskSetting } from './channel/TaskSetting';
import { BillSetting } from './channel/BillSetting';

export interface PMChannel{
    accounts: Array<string>
}

export interface IChannel {
    _id?: string
    name: string
    type: number
    groupid: string
    textSetting?: TextSetting
    fileSetting?: FileSetting
    issueSetting?: IssueSetting
    requestSetting?: RequestSetting
    billSetting?: BillSetting
    graphSetting?: GraphSetting
    outsourceSetting?: OutsourceSetting
    taskSetting?: TaskSetting
    PMChannel?: PMChannel
    createdate?: number
}

export class IChannelDocs extends Document implements IChannel {
    _id?: string
    name: string = ""
    type: number = 0
    groupid: string = ""
    textSetting?: TextSetting = undefined
    fileSetting?: FileSetting = undefined
    issueSetting?: IssueSetting = undefined
    requestSetting?: RequestSetting = undefined
    billSetting?: BillSetting = undefined
    graphSetting?: GraphSetting = undefined
    outsourceSetting?: OutsourceSetting = undefined
    taskSetting?: TaskSetting = undefined
    PMChannel?: PMChannel = undefined

    GetChannelType(){
        return ChannelType[this.type]
    }
}

export const SChannel:Schema = new Schema({
    type: Number,
    name: String,
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

    billSetting: {

    },

    graphSetting: {

    },

    outsourceSetting:{

    },
    
    taskSetting: {

    },

    PMChannel: {
        accounts: [{ type: Schema.Types.ObjectId, ref: 'account'}]
    },
    
    createdate: {type: Date, default: Date.now}
})