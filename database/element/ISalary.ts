import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface ISalary extends IDatabaseBase{
    account: string,
    salary: number,
    laborinsurance: number,
    healthinsurance: number,
    pension: number
}

export const SSalary:mongoose.Schema = new mongoose.Schema({
    account: String,
    salary: Number,
    laborinsurance: Number,
    healthinsurance: Number,
    pension: Number,
    createdate: {default: Date.now, type: Date}
})