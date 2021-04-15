import { Schema, Document } from 'mongoose'

export interface IOutsource{
    charge: string
    deputy: string
    project: string
    group: string
    vendor: string
    email: string
    website: string
    phone: string
    payment: string
    expectedPayDate: number
    actualPayDate: number
}

export class IOutsourceDocs extends Document implements IOutsource{
    charge: string = ""
    deputy: string = ""
    project: string = ""
    group: string = ""
    vendor: string = ""
    email: string = ""
    website: string = ""
    phone: string = ""
    payment: string = ""
    expectedPayDate: number = 0
    actualPayDate: number = 0
}

export const SOutsource:Schema = new Schema({
    charge: String,
    project: String,
    group: String,
    vendor: String,
    email: String,
    website: String,
    phone: String,
    payment: String,
    expectedPayDate: Number,
    actualPayDate: Number,
    createdate: {type: Date,default: Date.now}
})