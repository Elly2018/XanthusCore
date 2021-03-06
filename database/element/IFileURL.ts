import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IFileURL extends IDatabaseBase{
    name: string,
    url: string,
    filters:Array<string>,
    pageURL:Array<string>,
}

export const SFileURL:mongoose.Schema = new mongoose.Schema({
    name: String,
    url: String,
    filters:[String],
    pageURL:[String],
    createdate: {type:Date, default:Date.now}
})