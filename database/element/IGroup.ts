import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

/**
 * Group data module
 * @param name Group name
 * @param role Have role list (ID)
 */
export interface IGroup extends IDatabaseBase{
    description: string,
    server: string,
    name: string
    role: Array<string>,
}

export const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    server: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})