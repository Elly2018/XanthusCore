import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IGroup extends IDatabaseBase{
    name: string,
    charge: string,
    deputy: string,
    description: string,
    project: string,
    member: Array<string>,
}

export const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    charge: String,
    deputy: String,
    description: String,
    project: String,
    member: [String],
    createdate: {type:Date, default: Date.now}
})