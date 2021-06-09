import { Schema, Document } from 'mongoose'
import { IClass } from './element/IClass'
import { IOrganization } from './element/IOrganization'
import { IChannel } from './IChannel'
import { IProject } from './IProject'

/**
 * Account structure
 */
export interface IAccount {
    _id?: string
    /**
     * User level, For class to identify level
     */
    level: number
    /**
     * Email for contact
     */
    email: string
    /**
     * User username
     */
    username: string
    /**
     * Hash password
     */
    password: string
    /**
     * ID card for the person
     */
    identitycard: string
    /**
     * First name for the person
     */
    firstname: string
    /**
     * Last name for the person
     */
    lastname: string
    /**
     * Passport use name
     */
    passportname: string
    /**
     * Contact cellphone number
     */
    phone: string
    /**
     * First workday
     */
    firstdayofwork: number
    /**
     * Leave day
     */
    lastdayofwork: number
    /**
     * Class position\
     * More info check {@link IClass}
     */
    class: string
    /**
     * Organization position\
     * More info check {@link IOrganization}
     */
    organ: Array<string>
    /**
     * Labor insurance for the person
     */
    laborinsurance: number
    /**
     * Health insurance for the person
     */
    healthinsurance: number
    /**
     * Pension insurance for the person
     */
    pension: number
    /**
     * Account block status
     */
    block: boolean
    /**
     * Google docs key ID
     */
    googlekey: string
    /**
     * Join project\
     * See more info {@link IProject}
     */
    projects: Array<string>
    /**
     * Store private text channel order\
     * See more info {@link IChannel}
     */
    private: Array<string>
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
    private: Array<string> = []

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
    private: [{ type: Schema.Types.ObjectId, ref: 'channel' }],
    createdate: {type: Date, default: Date.now}
})