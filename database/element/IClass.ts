import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface ClassPermission{
    createProject: boolean,
    accountManagement: boolean,
    viewAccounting: boolean,
    modifyAccounting: boolean,
    projectManagement: boolean,
}

export interface IClass extends IDatabaseBase{
    name: string,
    cannotDelete: boolean,
    permission: ClassPermission,
}

export const SClass:mongoose.Schema = new mongoose.Schema({
    name: String,
    cannotDelete: Boolean,
    permission:{
        createProject: Boolean,
        accountManagement: Boolean,
        viewAccounting: Boolean,
        modifyAccounting: Boolean,
        projectManagement: Boolean,
    },
    createdate: {type:Date, default:Date.now}
})