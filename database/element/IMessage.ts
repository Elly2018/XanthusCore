import mongoose from "mongoose";

/**
 * Text channel message
 */
export interface IMessage extends mongoose.Document{
    /**
     * Belong to which text channel
     */
    channel: string
    /**
     * Who send the message
     */
    user: string
    /**
     * Content
     */
    message: string
    /**
     * Image names
     */
    image: Array<string>
}

export const SMessage:mongoose.Schema = new mongoose.Schema({
    user: String,
    channel: String,
    message: String,
    createdate: {type: Date, default: Date.now}
})