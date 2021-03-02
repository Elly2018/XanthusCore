import mongoose from "mongoose";
import {IBaseChannel, IBaseChannelSetting} from './IBaseChannel'
import {IDatabaseBase} from './../IDatabaseBase'

export interface Nas{
    label: string,
    address: string
}

export interface FileSetting extends IBaseChannelSetting{
    use_nas: boolean,
    nas:Array<Nas>
}

export interface IFileChannel extends IBaseChannel<FileSetting>, IDatabaseBase{
    root: string,
}

export const SFileChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        use_nas: Boolean,
        nas:[
            {label: String, address: String},
        ]
    },
    root: String,
    createdate: {type: Date, default: Date.now}
})