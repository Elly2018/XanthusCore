import mongoose from "mongoose";

/**
 * Tag data module
 * @param tag Log prefix
 * @param message Main message
 * @param color Tag prefix color
 */
export interface ILog{
    _id: string,
    tag: string,
    message: string,
    color: string,
    createdate: number
}

export const SLog:mongoose.Schema = new mongoose.Schema({
    tag: String,
    message: String,
    color: String,
    createdate: {type:Date, default: Date.now}
})