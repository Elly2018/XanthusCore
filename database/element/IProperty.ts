import { Schema, Document } from 'mongoose'
import { IAccount } from '../IAccount'

export interface IProperty{
     _id?: string
     /**
      * Belong to which group
      */
     belong: string
    /**
     * Who or what send this message
     */
    emodel: string
    /**
     * Who own the stuff\
     * More info check {@link IAccount}
     */
    owner: string
    /**
     * Who own the stuff secondary\
     * More info check {@link IAccount}
     */
    deputy: string

    /**
     * Is the stuff broken
     */
    broken: boolean
    /**
     * Is the stuff under some sort of fixing process
     */
    fix: boolean

    /**
     * Bought date
     */
    bought: number
    /**
     * How long does the warranty time
     */
    warranty: number
}

/**
 * Property structure
 */
export class IPropertyDocs extends Document implements IProperty {
    belong: string = ""
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
    belong: [{ type: Schema.Types.ObjectId, ref: 'propertygroup' }],
    emodel: String,
    owner: { type: Schema.Types.ObjectId, ref: 'account' },
    deputy: String,

    broken: Boolean,
    fix: Boolean,

    bought: Number,
    warranty: Number,

    createdate: {type:Date, default: Date.now}
})