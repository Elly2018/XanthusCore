import { Schema, Document } from 'mongoose'

export enum LeaveType{
    
}

export interface ILeave{
    _id?: string
    /**
     * Who sign up this leave record
     */
     account: string
     /**
      * Type of leave
      */
     type: number
     subject: string
     content: string
}

/**
 * Staff leave record
 */
export class ILeaveDocs extends Document implements ILeave{
    account: string = ""
    type: number = 0
    subject: string = ""
    content: string = ""
}

export const SLeave:Schema = new Schema({
    account: String,
    type: Number,
    subject: String,
    content: String,
    createdate: {type:Date, default:Date.now}
})