import mongoose from "mongoose";

/**
 * Filter option
 */
export interface SingleFilter{
    /**
     * File name must start with what\
     * Empty means none
     */
    startWith: string,
    /**
     * File name must end with what\
     * Empty means none
     */
    endWith: string,
    /**
     * File extensions must be what
     * Empty array means none
     */
    extension: Array<string>,
}

/**
 * Virtual filter\
 * It loop the target url\
 * And passing all filter get the file result
 */
export interface IFileFilter extends mongoose.Document {
    /**
     * Filter name
     */
    name: string,
    /**
     * Filter root url
     */
    root: string,
    /**
     * Filter options
     */
    filter: Array<SingleFilter>,
    /**
     * Extra file means the absolute name\
     * It will search these name and get pass ignore filter options
     */
    extra: Array<string>,
}

export const SFileFilter:mongoose.Schema = new mongoose.Schema({
    name: String,
    root: String,
    filter:[
        {
            startWith: String,
            endWith: String,
            extension:[String]
        }
    ],
    extra: [String],
    createdate: {type:Date, default:Date.now}
})