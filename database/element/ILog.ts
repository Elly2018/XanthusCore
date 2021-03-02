import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

/**
 * Tag data module
 * @param tag Log prefix
 * @param message Main message
 * @param color Tag prefix color
 */
export interface ILog extends IDatabaseBase{
    tag: string,
    message: string,
    color: string,
}

export const SLog:mongoose.Schema = new mongoose.Schema({
    tag: String,
    message: String,
    color: String,
    createdate: {type:Date, default: Date.now}
})