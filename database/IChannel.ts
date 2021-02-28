import mongoose from "mongoose";

export interface ChannelNotice {
    account_id: string,
    value: number
}

/**
 * Channel data module
 * @param name Channel name
 * @param type Channel type
 * @param link Channel data link (ID)
 * @param group Is channel a group channel
 * @param groupid Group target (ID)
 */
export interface IChannel{
    _id?: string,
    name: string,
    type: number,
    link: string,
    group: boolean,
    groupid: string,
    notices: Array<ChannelNotice>,
    createdate: number
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