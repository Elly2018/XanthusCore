import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface ILeave extends IDatabaseBase{
    account: string,
    mode: number,
    title: string,
    subject: string,
    content: string
}

export const SLeave:mongoose.Schema = new mongoose.Schema({
    account: String,
    mode: Number,
    title: String,
    subject: String,
    content: String,
    createdate: {type:Date, default:Date.now}
})