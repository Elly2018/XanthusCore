import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IAccounting extends IDatabaseBase{
    title: string,
    description: string,
    salary: string,
    income: number,
    outcome: number,
    category: number,
    type: number,
}

export const SAccounting:mongoose.Schema = new mongoose.Schema({
    title: String,
    description: String,
    income: String,
    outcome: Number,
    category: Number,
    type: Number,
    createdate: {default: Date.now, type: Date}
})