import mongoose from "mongoose";

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
export interface IMessage{
    _id?: string,
    user: string,
    tag: Array<string>,
    reply: IReply,
    message: string,
    createdate: number
}

export const SMessage:mongoose.Schema = new mongoose.Schema({
    user: String,
    tag: [String],
    reply: {
        isreply: Boolean,
        target: String
    },
    message: String,
    createdate: {type: Date, default: Date.now}
})