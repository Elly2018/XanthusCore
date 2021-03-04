import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IGroup extends IDatabaseBase{
    name: string,
    description: string,
    project: string,
    role: Array<string>,
}

export const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    project: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})