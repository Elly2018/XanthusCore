import { Schema, Document } from 'mongoose'

/**
 * Class permission status
 */
export class ClassPermission{
    /**
     * Unlock all ability
     */
    administrator: boolean = false
    /**
     * You can create project and delete project at toolbar
     */
    createProject: boolean = false
    /**
     * You can create notice post
     */
    createNotice: boolean = false
    /**
     * You can view staff detail and be able to modify them and view detail record
     */
    accountManagement: boolean = false
    /**
     * You can see accounting channel and check bill record
     */
    viewAccounting: boolean = false
    /**
     * You can sumbit and modify bill record
     */
    modifyAccounting: boolean = false
    /**
     * You can view project management channel and be able to modify them and view detail record
     */
    projectManagement: boolean = false
}

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
     /**
      * Permission status
      */
     permission: ClassPermission
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
    permission: ClassPermission = new ClassPermission()

    getLevel(level:number):ClassLevel | undefined{
        return this.level[level];
    }
}

export const SClass:Schema = new Schema({
    name: String,
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

    permission:{
        administrator: Boolean,
        createProject: Boolean,
        createNotice: Boolean,
        accountManagement: Boolean,
        viewAccounting: Boolean,
        modifyAccounting: Boolean,
        projectManagement: Boolean
    },
    createdate: {type:Date, default:Date.now}
})