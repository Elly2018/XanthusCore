import mongoose from 'mongoose'

/**
 * Account data module
 * @param username Account username
 * @param password Account password
 * @param class Account use class (ID)
 * @param block Is account blocked
 * @param servers Account join server list
 */
export interface IAccount{
    username: string,
    password: string,
    class: string,
    block: boolean,
    servers: Array<string>,
    createdate: number
}

export const SAccount:mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    class: String,
    block: Boolean,
    servers: [],
    createdate: {type: Date, default: Date.now}
})