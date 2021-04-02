import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface IPerformanceAppraisal extends IDatabaseBase{
  account: string
  description: string
  task: string
  property: number
  time: number

  finishRate: number
  quality: number
}

export const SPerformanceAppraisal:mongoose.Schema = new mongoose.Schema({
    account: String,
    description: String,
    task: String,
    property: Number,
    time: Number,

    finishRate: Number,
    quality: Number,
    createdate: {default: Date.now, type: Date}
})