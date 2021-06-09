import { Schema, Document } from 'mongoose'

/**
 * Each level will effect salary promote value etc...
 */
export interface ClassLevel {
    promote: number
    technicalResponsibility: number

    salary: number
    salaryBasic: number
    salaryLimit: number
    food: number
    performanceAppraisalStandard: number
}

export interface IClass{
    _id?: string
    /**
     * Class name
     */
     name: string
     /**
      * Class description
      */
     description: string
     /**
      * Rank of class
      */
     rank: number
     /**
      * Each level detail
      */
     level: Array<ClassLevel>
     createdate?: number
}

/**
 * Account class\
 * It manage the permission status for each account
 */
export class IClassDocs extends Document implements IClass {
    name: string = ""
    description: string = ""
    rank: number = 0
    level: Array<ClassLevel> = []

    getLevel(level:number):ClassLevel | undefined{
        return this.level[level];
    }
}

export const SClass:Schema = new Schema({
    name: {type: String, required: true},
    description: String,

    rank: Number,
    level: [
        {
            promote: Number,
            technicalResponsibility: Number,

            salary: Number,
            salaryBasic: Number,
            salaryLimit: Number,
            food: Number,
            performanceAppraisalStandard: Number
        }
    ],

    createdate: {type:Date, default:Date.now}
})