import mongoose from "mongoose";

export enum LeaveType{
    
}

/**
 * Staff leave record
 */
export interface ILeave extends mongoose.Document{
    /**
     * Who sign up this leave record
     */
    account: string,
    /**
     * Type of leave
     */
    type: number,
    subject: string,
    content: string
}

export const SLeave:mongoose.Schema = new mongoose.Schema({
    account: String,
    type: Number,
    subject: String,
    content: String,
    createdate: {type:Date, default:Date.now}
})