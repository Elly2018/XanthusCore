import mongoose from "mongoose";

/**
 * Group data module
 * @param name Group name
 * @param role Have role list (ID)
 */
export interface IGroup{
    name: string
    role: Array<string>,
    createdate?: number
}

export const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})