import mongoose from "mongoose";

export interface IAccounting{
    _id?: string,
    title: string,
    description: string,
    income: number,
    outcome: number,
    category: number,
    type: number,
    createdate: number
}

export const SAccounting:mongoose.Schema = new mongoose.Schema({
    title: String,
    description: String,
    income: String,
    outcome: Number,
    category: Number,
    type: Number,
    createdate: Number
})