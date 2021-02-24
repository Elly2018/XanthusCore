import mongoose from "mongoose";

/**
 * Log channel setting
 * @param tag_enable Text channel tag signal log
 */
interface LogSetting{
    tag_enable: boolean
}

/**
 * LogChannel data module
 * @param setting channel setting
 */
export interface ILogChannel{
    setting:LogSetting,
    createdate: number
}

export const SLogChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        tag_enable: Boolean
    },
    createdate: {type: Date, default: Date.now}
})