import { Schema, Document } from 'mongoose'

export interface IActivity {
    _id?: string
    title: string
    account: Array<string>
    task: string
    description: string
    starttime: number
    endtime: number
    property: number
}

export class IActivityDocs extends Document implements IActivity{
    title: string = ""
    account: Array<string> = []
    task: string = ""
    description: string = ""
    starttime: number = 0
    endtime: number = 0
    property: number = 0
}

export const SActivity:Schema = new Schema({
    title: String,
    account: [String],
    task: String,
    description: String,
    starttime: Number,
    endtime: Number,
    property: Number,
    createdate: Number,
})