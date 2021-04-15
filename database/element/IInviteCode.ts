import mongoose from "mongoose";

export interface IInviteCode extends mongoose.Document {
    projectGroup: string,
    code: string,
    expiredata: number,
}

export const SInviteCode:mongoose.Schema = new mongoose.Schema({
    projectGroup: String,
    code: String,
    expiredata: Number,
    createdate: {type:Date, default: Date.now}
})