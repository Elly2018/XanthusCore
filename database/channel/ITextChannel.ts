import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";
import { IBaseChannel, IBaseChannelSetting } from "./IBaseChannel";

/**
 * Text channel setting
 * @param delay Sending message delay
 */
export interface TextSetting extends IBaseChannelSetting{
    delay: number
}

/**
 * TextChannel data module
 * @param setting channel setting
 */
export interface ITextChannel extends IBaseChannel<TextSetting>, IDatabaseBase{
    setting:TextSetting,
}

export const STextChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        delay: Number
    },
    createdate: {type: Date, default: Date.now}
})