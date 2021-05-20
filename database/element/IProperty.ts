import { Schema, Document } from 'mongoose'

export interface IProperty{
     _id?: string
    /**
     * Who or what send this message
     */
    emodel: string
    owner: string
    deputy: string

    broken: boolean
    fix: boolean

    bought: number
    warranty: number
}

/**
 * The server log record
 */
export class IPropertyDocs extends Document implements IProperty {
    emodel: string = ""
    owner: string = ""
    deputy: string = ""

    broken: boolean = false
    fix: boolean = false

    bought: number = 0
    warranty: number = 0
    createdate: number = 0
}

export const SProperty:Schema = new Schema({
    emodel: String,
    owner: { type: Schema.Types.ObjectId, ref: 'account' },
    deputy: String,

    broken: Boolean,
    fix: Boolean,

    bought: Number,
    warranty: Number,

    createdate: {type:Date, default: Date.now}
})