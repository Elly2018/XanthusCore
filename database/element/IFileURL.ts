import mongoose from "mongoose";

/**
 * File URL data module
 * @param name URL name
 * @param filters Filters in this page
 * @param page_url URL in this page
 */
export interface IFileURL{
    name: string,
    filters:Array<string>,
    page_url:Array<string>,
    createdate: number
}

export const SFileURL:mongoose.Schema = new mongoose.Schema({
    name: String,
    filters:[String],
    page_url:[String],
    createdate: {type:Date, default:Date.now}
})