import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IGroup extends IDatabaseBase{
    name: string,
    description: string,
    server: string,
    role: Array<string>,
}

export const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    server: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})