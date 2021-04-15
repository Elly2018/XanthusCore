import { Schema, Document } from 'mongoose'

/**
 * User account
 */
export interface IAccount {
    _id?: string
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

export class IAccountDocs extends Document implements IAccount {
    level: number = 0
    email: string = ""
    username: string = ""
    password: string = ""
    identitycard: string = ""
    firstname: string = ""
    lastname: string = ""
    passportname: string = ""
    phone: string = ""
    firstdayofwork: number = 0
    lastdayofwork: number = 0
    color: string = ""
    class: string = ""
    laborinsurance: number = 0
    healthinsurance: number = 0
    pension: number = 0
    block: boolean = false
    googlekey: string = ""
    projects: Array<string> = []

    profileURL(address:string):string{
        return `${address}/Account/${this.id}`
    }
}

export const SAccount:Schema = new Schema({
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