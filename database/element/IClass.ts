import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface ClassPermission{
    administrator: boolean,
    createProject: boolean,
    createNotice: boolean,
    accountManagement: boolean,
    viewAccounting: boolean,
    modifyAccounting: boolean,
    projectManagement: boolean,
}

export interface ClassLevel {
    promote: number
    technicalResponsibility: number

    salary: number
    salaryBasic: number
    salaryLimit: number
    food: number
    performanceAppraisalStandard: number
}

export interface IClass extends IDatabaseBase{
    name: string
    description: string
    cannotDelete: boolean

    rank: number
    level: Array<ClassLevel>

    permission: ClassPermission
}

export const SClass:mongoose.Schema = new mongoose.Schema({
    name: String,
    description: String,
    cannotDelete: Boolean,

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
        createProject: Boolean,
        accountManagement: Boolean,
        viewAccounting: Boolean,
        modifyAccounting: Boolean,
        projectManagement: Boolean,
    },
    createdate: {type:Date, default:Date.now}
})