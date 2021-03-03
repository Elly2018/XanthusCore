import mongoose from "mongoose";
import {IBaseChannel, IBaseChannelSetting} from './IBaseChannel'
import {IDatabaseBase} from './../IDatabaseBase'

export interface LogSetting extends IBaseChannelSetting{
    tag_enable: boolean
}

export interface ILogChannel extends IBaseChannel<LogSetting>, IDatabaseBase{
}

export const SLogChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        tag_enable: Boolean
    },
    link: String,
    createdate: {type: Date, default: Date.now}
})