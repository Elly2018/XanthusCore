import mongoose from "mongoose";
import { IDatabaseBase } from "./IDatabaseBase";

export interface ChannelNotice {
    account_id: string,
    value: number
}

export interface IChannel extends IDatabaseBase{
    name: string,
    type: number,
    link: string,
    group: boolean,
    groupid: string,
    notices: Array<ChannelNotice>,
}

export const SChannel:mongoose.Schema = new mongoose.Schema({
    name: String,
    type: Number,
    link: String,
    group: Boolean,
    groupid: String,
    notices: [
        {account_id: String, value: Number}
    ],
    createdate: {type: Date, default: Date.now}
})