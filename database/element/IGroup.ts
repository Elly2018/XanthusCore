import mongoose from "mongoose";

/**
 * Group data module
 * @param name Group name
 * @param role Have role list (ID)
 */
export interface IGroup{
    _id?: string,
    description: string,
    server: string,
    name: string
    role: Array<string>,
    createdate: number
}

export const SGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    server: String,
    role: [String],
    createdate: {type:Date, default: Date.now}
})