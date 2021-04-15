import mongoose from 'mongoose'

export interface IProjectGroup extends mongoose.Document {
    name: string
    projects: Array<string>
    invitecode: Array<string>
}

export const SProjectGroup:mongoose.Schema = new mongoose.Schema({
    name: String,
    projects: [String],
    invitecode: [String],
    createdate: {type:Date, default:Date.now}
})