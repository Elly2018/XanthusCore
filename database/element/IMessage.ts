import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

/**
 * Reply information
 * @param isreply Is current message is reply
 * @param target Target message for reply
 */
interface IReply{
    isreply: boolean,
    target: string
}

/**
 * Message data module
 * @param user Sender account ID
 * @param reply Reply status
 * @param message Message
 */
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