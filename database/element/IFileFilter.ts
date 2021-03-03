import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface IFileFilter extends IDatabaseBase{
    name: string,
    start_with: string,
    end_with: string,
    extension: Array<string>,
    top_only: boolean,
}

export const SFileFilter:mongoose.Schema = new mongoose.Schema({
    name: String,
    start_with: String,
    end_with: String,
    extension:[String],
    top_only: {type:Boolean, default: true},
    createdate: {type:Date, default:Date.now}
})