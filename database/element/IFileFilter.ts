import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface IFileFilter extends IDatabaseBase{
    name: string,
    startWith: string,
    endWith: string,
    extension: Array<string>,
    topOnly: boolean,
}

export const SFileFilter:mongoose.Schema = new mongoose.Schema({
    name: String,
    startWith: String,
    endWith: String,
    extension:[String],
    topOnly: {type:Boolean, default: true},
    createdate: {type:Date, default:Date.now}
})