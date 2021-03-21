import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface IInviteCode extends IDatabaseBase{
    project: string,
    code: string,
    expiredata: number,
}

export const SInviteCode:mongoose.Schema = new mongoose.Schema({
    project: String,
    code: String,
    expiredata: Number,
    createdate: {type:Date, default: Date.now}
})