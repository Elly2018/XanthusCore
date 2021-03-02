import mongoose from 'mongoose'
import { IDatabaseBase } from './IDatabaseBase'

export interface IAccount extends IDatabaseBase{
    username: string,
    password: string,
    color: string,
    class: string,
    block: boolean,
    servers: Array<string>,
}

export const SAccount:mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    color: String,
    class: String,
    block: Boolean,
    servers: [String],
    createdate: {type: Date, default: Date.now}
})