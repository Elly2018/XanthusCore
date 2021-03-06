import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface IActivity extends IDatabaseBase {
    title: string,
    account: string,
    project: string,
    description: string,
    starttime: number,
    endtime: number,
    property: number,
    finishrate: number,
    quality: number,
}

export const SActivity:mongoose.Schema = new mongoose.Schema({
    title: String,
    account: String,
    project: String,
    description: String,
    starttime: Number,
    endtime: Number,
    property: Number,
    finishrate: Number,
    quality: Number,
    createdate: Number,
})