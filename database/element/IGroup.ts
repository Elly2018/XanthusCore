import { Schema, Document } from 'mongoose'

export interface IGroup{
    _id?: string
    belong: string
    name: string
    charge: string
    deputy: string
    description: string
    member: Array<string>
    createdate?: number
}

export class IGroupDocs extends Document implements IGroup{
    name: string = ""
    belong: string = ""
    charge: string = ""
    deputy: string = ""
    description: string = ""
    member: Array<string> = []
}

export const SGroup:Schema = new Schema({
    name: String,
    belong: { type: Schema.Types.ObjectId, ref: 'project' },
    charge: { type: Schema.Types.ObjectId, ref: 'account' },
    deputy: { type: Schema.Types.ObjectId, ref: 'account' },
    description: String,
    member: [{ type: Schema.Types.ObjectId, ref: 'account' }],
    createdate: {type:Date, default: Date.now}
})