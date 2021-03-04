import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

export interface ClassPermission{
    create_project: boolean,
    view_accounting: boolean,
    modify_accounting: boolean
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
        create_project: Boolean,
        view_accounting: Boolean,
        modify_accounting: Boolean
    },
    createdate: {type:Date, default:Date.now}
})