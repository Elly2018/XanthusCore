import mongoose from "mongoose";
import {IBaseChannel, IBaseChannelSetting} from './IBaseChannel'
import {IDatabaseBase} from './../IDatabaseBase'

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
export interface ILogChannel extends IBaseChannel<LogSetting>, IDatabaseBase{
}

export const SLogChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        tag_enable: Boolean
    },
    createdate: {type: Date, default: Date.now}
})