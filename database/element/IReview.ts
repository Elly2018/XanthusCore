import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface Attendance{
    ahead: number,
    compensatory: number,
    leave: number,
    notes: string,
}

export interface IReview extends IDatabaseBase{
    account: string,
    attendance: Array<Attendance>,
    activity: Array<string>,
}

export const SReview:mongoose.Schema = new mongoose.Schema({
    account: String,
    attendance:[
        {
            ahead: Number,
            compensatory: Number,
            leave: Number,
            notes: String,
        }
    ],
    activity:[String],
    createdate: Number
})