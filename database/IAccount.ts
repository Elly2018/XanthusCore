import mongoose from 'mongoose'
import { IBaseModel } from '../IBaseModel'

/**
 * User account
 */
export interface IAccount extends mongoose.Document {
    /**
     * User level, For class to identify level
     */
    level: number
    email: string
    username: string
    password: string
    identitycard: string
    firstname: string
    lastname: string
    passportname: string
    phone: string
    firstdayofwork: number
    lastdayofwork: number
    color: string
    class: string
    laborinsurance: number
    healthinsurance: number
    pension: number
    block: boolean
    googlekey: string
    projects: Array<string>
}

export class MAccount extends IBaseModel<IAccount> {
    profileURL(address:string):string{
        return `${address}/Account/${this.data.id}`
    }
}

export const SAccount:mongoose.Schema = new mongoose.Schema({
    level: Number,
    email: String,
    username: String,
    password: String,
    identitycard: String,
    firstname: String,
    lastname: String,
    passportname: String,
    phone: String,
    firstdayofwork: Number,
    lastdayofwork: Number,
    color: String,
    class: String,
    laborinsurance: Number,
    healthinsurance: Number,
    pension: Number,
    block: Boolean,
    googlekey: String,
    projects: [String],
    createdate: {type: Date, default: Date.now}
})