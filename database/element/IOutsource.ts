import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IOutsource extends IDatabaseBase{
    charge: string,
    deputy: string,
    project: string,
    group: string,
    vendor: string,
    email: string,
    website: string,
    phone: string,
    payment: string,
    expectedPayDate: number,
    actualPayDate: number,
}

export const SRole:mongoose.Schema = new mongoose.Schema({
    charge: String,
    project: String,
    group: String,
    vendor: String,
    email: String,
    website: String,
    phone: String,
    payment: String,
    expectedPayDate: Number,
    actualPayDate: Number,
    createdate: {type: Date,default: Date.now}
})