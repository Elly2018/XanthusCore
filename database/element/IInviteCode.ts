import { Schema, Document } from 'mongoose'

export interface IInviteCode{
    _id?: string
    project: string
    code: string
    expiredata: number
}

export class IInviteCodeDocs extends Document implements IInviteCode {
    project: string = ""
    code: string = ""
    expiredata: number = 0
}

export const SInviteCode:Schema = new Schema({
    project: String,
    code: String,
    expiredata: Number,
    createdate: {type:Date, default: Date.now}
})