import { Schema, Document } from 'mongoose'

export interface IActivity {
    _id?: string
    account: string
    task: string
    starttime: number
    endtime: number
    property: number
}

export class IActivityDocs extends Document implements IActivity{
    account: string = ""
    task: string = ""
    starttime: number = 0
    endtime: number = 0
    property: number = 0
}

export const SActivity:Schema = new Schema({
    account: String,
    task: String,
    starttime: Number,
    endtime: Number,
    property: Number,
    createdate: Number,
})