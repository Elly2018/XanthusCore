import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface IRank extends IDatabaseBase {
    name: string,
    description: string,
}

export const SRank:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    createdate: {type: Date, default: Date.now}
})