import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

/**
 * File Filter data module
 * @param name Filter name
 * @param start_with Filename prefix
 * @param end_with Filename suffix
 * @param extension File extension list
 * @param top_only Search only top trigger
 */
export interface IFileFilter extends IDatabaseBase{
    name: string,
    start_with: string,
    end_with: string,
    extension: Array<string>,
    top_only: boolean,
}

export const SFileFilter:mongoose.Schema = new mongoose.Schema({
    name: String,
    start_with: String,
    end_with: String,
    extension:[String],
    top_only: {type:Boolean, default: true},
    createdate: {type:Date, default:Date.now}
})