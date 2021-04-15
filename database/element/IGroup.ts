import mongoose from "mongoose";

export interface IGroup extends mongoose.Document{
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