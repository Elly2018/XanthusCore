import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IOutsource extends IDatabaseBase{
    charge: string,
    project: string,
    vendor: string,
    email: string,
    website: string,
    phone: string,
    payment: string,
    expectedpaymentdate: number,
    actualpaymentdate: number,
}

export const SRole:mongoose.Schema = new mongoose.Schema({
    charge: String,
    project: String,
    vendor: String,
    email: String,
    website: String,
    phone: String,
    payment: String,
    expectedpaymentdate: Number,
    actualpaymentdate: Number,
    createdate: {type: Date,default: Date.now}
})