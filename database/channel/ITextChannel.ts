import mongoose from "mongoose";

/**
 * Text channel setting
 * @param delay Sending message delay
 */
interface TextSetting{
    delay: number
}

/**
 * TextChannel data module
 * @param setting channel setting
 */
export interface ITextChannel{
    setting:TextSetting,
    createdate?: number
}

export const STextChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        delay: Number
    },
    createdate: {type: Date, default: Date.now}
})