import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface ILeave extends IDatabaseBase{
    account: string,
    type: number,
    subject: string,
    content: string
}

export const SLeave:mongoose.Schema = new mongoose.Schema({
    account: String,
    type: Number,
    subject: String,
    content: String,
    createdate: {type:Date, default:Date.now}
})