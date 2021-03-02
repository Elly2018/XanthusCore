import mongoose from "mongoose";
import { IDatabaseBase } from "./../IDatabaseBase";

/**
 * Class permission
 * @param create_server Can create server
 * @param view_accounting Can view accounting information
 * @param modify_accounting Can modify accounting information
 */
export interface ClassPermission{
    create_server: boolean,
    view_accounting: boolean,
    modify_accounting: boolean
}

/**
 * Class data module
 * @param name Class name
 * @param permission Class permission
 */
export interface IClass extends IDatabaseBase{
    name: string,
    cannotDelete: boolean,
    permission: ClassPermission,
}

export const SClass:mongoose.Schema = new mongoose.Schema({
    name: String,
    cannotDelete: Boolean,
    permission:{
        create_server: Boolean,
        view_accounting: Boolean,
        modify_accounting: Boolean
    },
    createdate: {type:Date, default:Date.now}
})

export enum ClassPermissionList{
    create_server = 0, 
    view_accounting = 1, 
    modify_accounting = 2
}