import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface Attendance{
    ahead: number,
    compensatory: number,
    leave: number,
    notes: string,
}

export interface Activity{
    title: string,
    project: string,
    description: string,
    week: number,
    property: number,
    hours: number,
    finishrate: number,
    quality: number,
}

export interface IReview extends IDatabaseBase{
    account: string,
    attendance: Array<Attendance>,
    activity: Array<Activity>,
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
    activity:[
        {
            title: String,
            project: String,
            description: String,
            week: Number,
            property: Number,
            hours: Number,
            finishrate: Number,
            quality: Number,
        }
    ],
    createdate: Number
})