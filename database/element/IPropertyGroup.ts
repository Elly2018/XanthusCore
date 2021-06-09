import { Schema, Document } from 'mongoose'
import { IProperty } from './IProperty'

export interface IPropertyGroup{
     _id?: string
    /**
     * Who or what send this message
     */
    name: string
    /**
     * Secondary name for the stuff
     */
    secondary: string
    /**
     * Some info
     */
    description: string

    createdate?: number
}

/**
 * The server log record
 */
export class IPropertyGroupDocs extends Document implements IPropertyGroup{
    name: string = ""
    secondary: string = ""
    description: string = ""
    createdate: number = 0
}

export const SPropertyGroup:Schema = new Schema({
    name: String,
    secondary: String,
    description: String,
    createdate: {type:Date, default: Date.now}
})