import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface ILog extends IDatabaseBase{
    channel: string,
    tag: string,
    message: string,
    color: string,
}

export const SLog:mongoose.Schema = new mongoose.Schema({
    channel: String,
    tag: String,
    message: String,
    color: String,
    createdate: {type:Date, default: Date.now}
})