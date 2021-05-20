import { Schema, Document } from 'mongoose'

export interface IPropertyGroup{
     _id?: string
    /**
     * Who or what send this message
     */
    name: string
    secondary: string
    description: string
    items: Array<string>
    createdate?: number
}

/**
 * The server log record
 */
export class IPropertyGroupDocs extends Document implements IPropertyGroup{
    name: string = ""
    secondary: string = ""
    description: string = ""
    items: Array<string> = []
    createdate: number = 0
}

export const SPropertyGroup:Schema = new Schema({
    name: String,
    secondary: String,
    description: String,
    items: [{ type: Schema.Types.ObjectId, ref: 'property' }],
    createdate: {type:Date, default: Date.now}
})