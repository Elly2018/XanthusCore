import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IFileURL extends IDatabaseBase{
    name: string,
    url: string,
    filters:Array<string>,
    page_url:Array<string>,
}

export const SFileURL:mongoose.Schema = new mongoose.Schema({
    name: String,
    url: String,
    filters:[String],
    page_url:[String],
    createdate: {type:Date, default:Date.now}
})