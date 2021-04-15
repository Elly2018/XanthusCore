import mongoose from "mongoose";

/**
 * Class permission status
 */
export interface ClassPermission{
    /**
     * Unlock all ability
     */
    administrator: boolean,
    /**
     * You can create project and delete project at toolbar
     */
    createProject: boolean,
    /**
     * You can create notice post
     */
    createNotice: boolean,
    /**
     * You can view staff detail and be able to modify them and view detail record
     */
    accountManagement: boolean,
    /**
     * You can see accounting channel and check bill record
     */
    viewAccounting: boolean,
    /**
     * You can sumbit and modify bill record
     */
    modifyAccounting: boolean,
    /**
     * You can view project management channel and be able to modify them and view detail record
     */
    projectManagement: boolean,
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

/**
 * Account class\
 * It manage the permission status for each account
 */
export interface IClass extends mongoose.Document {
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

export const SClass:mongoose.Schema = new mongoose.Schema({
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