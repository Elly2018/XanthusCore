import mongoose from "mongoose";

/**
 * Nas element
 * @param label driver label
 * @param address URL address
 */
export interface Nas{
    label: string,
    address: string
}

/**
 * File channel setting
 * @param use_nas Use network access driver
 * @param nas network access driver list
 */
export interface FileSetting{
    use_nas: boolean,
    nas:Array<Nas>
}

/**
 * FileChannel data module
 * @param setting channel setting
 * @param root Root file url (ID)
 */
export interface IFileChannel{
    _id: string,
    setting:FileSetting,
    root: string,
    createdate: number,
}

export const SFileChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        use_nas: Boolean,
        nas:[
            {label: String, address: String},
        ]
    },
    root: String,
    createdate: {type: Date, default: Date.now}
})