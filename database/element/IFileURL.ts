import { Schema, Document } from 'mongoose'

export interface IFileURL{
    _id?: string
    /**
     * Page name
     */
     name: string
     /**
      * How many filter in the page
      */
     filters:Array<string>
     /**
      * How many page in the page
      */
     pageURL:Array<string>
     createdate?: number
}

/**
 * The virtual folder that contain filters and page
 */
export class IFileURLDocs extends Document implements IFileURL {
    name: string = ""
    filters:Array<string> = []
    pageURL:Array<string> = []
}

export const SFileURL:Schema = new Schema({
    name: String,
    filters:[{ type: Schema.Types.ObjectId, ref: 'filefilter' }],
    pageURL:[{ type: Schema.Types.ObjectId, ref: 'fileurl' }],
    createdate: {type:Date, default:Date.now}
})