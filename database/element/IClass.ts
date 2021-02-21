import mongoose from "mongoose";

/**
 * Class permission
 * @param create_server Can create server
 * @param view_accounting Can view accounting information
 * @param modify_accounting Can modify accounting information
 */
interface ClassPermission{
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
    permission: ClassPermission
}

export const SClass:mongoose.Schema = new mongoose.Schema({
    name: String,
    permission:{
        create_server: Boolean,
        view_accounting: Boolean,
        modify_accounting: Boolean
    }
})