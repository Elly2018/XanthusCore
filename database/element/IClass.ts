import mongoose from "mongoose";

/**
 * Class permission
 * @param create_server Can create server
 * @param view_accounting Can view accounting information
 * @param modify_accounting Can modify accounting information
 */
export interface ClassPermission{
    administrator: boolean,
    create_server: boolean,
    view_accounting: boolean,
    modify_accounting: boolean
}

/**
 * Class data module
 * @param name Class name
 * @param permission Class permission
 */
export interface IClass{
    name: string,
    cannotDelete: boolean,
    permission: ClassPermission,
    createdate: number
}

export const SClass:mongoose.Schema = new mongoose.Schema({
    name: String,
    cannotDelete: Boolean,
    permission:{
        administrator: Boolean,
        create_server: Boolean,
        view_accounting: Boolean,
        modify_accounting: Boolean
    },
    createdate: {type:Date, default:Date.now}
})

export const ClassPermissionList = [
    'administrator', 'create_server', 'view_accounting', 'modify_accounting'
]