import { Schema, Document } from 'mongoose'

export interface IGroup{
    _id?: string
    name: string
    charge: string
    deputy: string
    description: string
    member: Array<string>
}

export class IGroupDocs extends Document implements IGroup{
    name: string = ""
    charge: string = ""
    deputy: string = ""
    description: string = ""
    member: Array<string> = []
}

export const SGroup:Schema = new Schema({
    name: String,
    charge: String,
    deputy: String,
    description: String,
    member: [String],
    createdate: {type:Date, default: Date.now}
})