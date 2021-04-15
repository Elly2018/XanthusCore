import { Schema, Document } from 'mongoose'

export interface IInviteCode{
    _id?: string
    projectGroup: string
    code: string
    expiredata: number
}

export class IInviteCodeDocs extends Document implements IInviteCode {
    projectGroup: string = ""
    code: string = ""
    expiredata: number = 0
}

export const SInviteCode:Schema = new Schema({
    projectGroup: String,
    code: String,
    expiredata: Number,
    createdate: {type:Date, default: Date.now}
})