import mongoose from "mongoose";

export interface IActivity extends mongoose.Document {
    title: string,
    account: Array<string>,
    task: string,
    description: string,
    starttime: number,
    endtime: number,
    property: number,
}

export const SActivity:mongoose.Schema = new mongoose.Schema({
    title: String,
    account: [String],
    task: String,
    description: String,
    starttime: Number,
    endtime: Number,
    property: Number,
    createdate: Number,
})