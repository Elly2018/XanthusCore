import mongoose from "mongoose";

/**
 * Channel data module
 * @param name Channel name
 * @param type Channel type
 * @param link Channel data link (ID)
 * @param group Is channel a group channel
 * @param groupid Group target (ID)
 */
export interface IChannel{
    name: string,
    type: number,
    link: string,
    group: boolean,
    groupid: string,
    createdate?: number
}

export const SChannel:mongoose.Schema = new mongoose.Schema({
    name: String,
    type: Number,
    link: String,
    group: Boolean,
    groupid: String,
    createdate: {type: Date, default: Date.now}
})