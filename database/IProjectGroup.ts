import { Schema, Document } from 'mongoose'

export interface IProjectGroup{
    _id?: string
    name: string
    projects: Array<string>
    createdate?: number
}

export class IProjectGroupDocs extends Document implements IProjectGroup {
    name: string = ""
    projects: Array<string> = []
}

export const SProjectGroup:Schema = new Schema({
    name: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'project' }],
    createdate: {type:Date, default:Date.now}
})