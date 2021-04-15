import { Schema, Document } from 'mongoose'
import path from 'path'

/**
 * Filter option
 */
export class SingleFilter{
    /**
     * File name must start with what\
     * Empty means none
     */
    startWith: string = ""
    /**
     * File name must end with what\
     * Empty means none
     */
    endWith: string = ""
    /**
     * File extensions must be what
     * Empty array means none
     */
    extension: Array<string> = []
}


export interface IFileFilter{
    _id?: string
    /**
     * Filter name
     */
     name: string
     /**
      * Filter root url
      */
     root: string
     /**
      * Filter options
      */
     filter: Array<SingleFilter>
     /**
      * Extra file means the absolute name\
      * It will search these name and get pass ignore filter options
      */
     extra: Array<string>
}

/**
 * Virtual filter\
 * It loop the target url\
 * And passing all filter get the file result
 */
export class IFileFilterDocs extends Document implements IFileFilter{
    name: string = ""
    root: string = ""
    filter: Array<SingleFilter> = []
    extra: Array<string> = []

    FilterFiles(files:Array<string>):Array<string>{
        const result = [];
        files.forEach(v => {
            // Before we do filter, we want to get the file.ext format
            // Because user might enter absolute path
            const filename = path.basename(v);
            // Check extra first
            if(this.extra.includes(filename)){
                result.push(v);
            }else{
                // Loop every filter find the match
                for(let w of this.filter){
                    if(w.startWith.length > 0){
                        if(!filename.startsWith(w.startWith)) continue;
                    }
                    if(w.endWith.length > 0){
                        if(!filename.endsWith(w.endWith)) continue;
                    }
                    if(w.extension.length > 0){
                        const n = w.extension.findIndex(x => path.extname(filename).toLowerCase() == x.toLowerCase());
                        if(n === -1) continue;
                    }
                    // If we get to here
                    // This means this file is matching with this filter
                    // Then we break filter loop to get next file test, because it's already matching
                    result.push(v);
                    break;
                }
            }
        })
        return result;
    }
}

export const SFileFilter:Schema = new Schema({
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