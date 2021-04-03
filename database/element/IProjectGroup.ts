import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface IProjectGroup extends IDatabaseBase {
    title: string,
}

export const SProjectGroup:mongoose.Schema = new mongoose.Schema({
    title: String,
    createdate: Number,
})