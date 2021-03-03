import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

interface IReply{
    isreply: boolean,
    target: string
}

export interface IMessage extends IDatabaseBase{
    channel: string,
    user: string,
    tag: Array<string>,
    reply: IReply,
    message: string,
}

export const SMessage:mongoose.Schema = new mongoose.Schema({
    user: String,
    channel: String,
    tag: [String],
    reply: {
        isreply: Boolean,
        target: String
    },
    message: String,
    createdate: {type: Date, default: Date.now}
})