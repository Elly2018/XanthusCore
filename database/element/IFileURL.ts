import mongoose from "mongoose";

/**
 * The virtual folder that contain filters and page
 */
export interface IFileURL extends mongoose.Document {
    /**
     * Page name
     */
    name: string,
    /**
     * How many filter in the page
     */
    filters:Array<string>,
    /**
     * How many page in the page
     */
    pageURL:Array<string>,
}

export const SFileURL:mongoose.Schema = new mongoose.Schema({
    name: String,
    filters:[String],
    pageURL:[String],
    createdate: {type:Date, default:Date.now}
})