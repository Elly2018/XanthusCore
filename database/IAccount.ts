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
    class: string
    organ: Array<string>
    laborinsurance: number
    healthinsurance: number
    pension: number
    block: boolean
    googlekey: string
    projects: Array<string>
    createdate?: number
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
    class: string = ""
    organ: Array<string> = []
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
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    identitycard: String,
    firstname: String,
    lastname: String,
    passportname: String,
    phone: String,
    firstdayofwork: Number,
    lastdayofwork: Number,
    class: { type: Schema.Types.ObjectId, ref: 'class' },
    organ: [{ type: Schema.Types.ObjectId, ref: 'organ'}],
    laborinsurance: Number,
    healthinsurance: Number,
    pension: Number,
    block: Boolean,
    googlekey: String,
    projects: [{ type: Schema.Types.ObjectId, ref: 'project' }],
    createdate: {type: Date, default: Date.now}
})