import mongoose from "mongoose";
import {IBaseChannel, IBaseChannelSetting} from './IBaseChannel'

/**
 * Log channel setting
 * @param tag_enable Text channel tag signal log
 */
export interface LogSetting extends IBaseChannelSetting{
    tag_enable: boolean
}

/**
 * LogChannel data module
 * @param setting channel setting
 */
export interface ILogChannel extends IBaseChannel<LogSetting>{
    createdate: number
}

export const SLogChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        tag_enable: Boolean
    },
    createdate: {type: Date, default: Date.now}
})