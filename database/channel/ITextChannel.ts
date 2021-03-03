import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";
import { IBaseChannel, IBaseChannelSetting } from "./IBaseChannel";

export interface TextSetting extends IBaseChannelSetting{
    delay: number
}

export interface ITextChannel extends IBaseChannel<TextSetting>, IDatabaseBase{
}

export const STextChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        delay: Number
    },
    link: String,
    createdate: {type: Date, default: Date.now}
})