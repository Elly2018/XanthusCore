import { Schema, Document } from 'mongoose'

export interface IActivity {
    _id?: string
    account: string
    task: string
    starttime: number
    endtime: number
    property: number
    createdate?: number
}

export class IActivityDocs extends Document implements IActivity{
    account: string = ""
    task: string = ""
    starttime: number = 0
    endtime: number = 0
    property: number = 0
}

export const SActivity:Schema = new Schema({
    account: { type: Schema.Types.ObjectId, ref: 'account' },
    task: { type: Schema.Types.ObjectId, ref: 'post' },
    starttime: Number,
    endtime: Number,
    property: Number,
    createdate: Number,
})