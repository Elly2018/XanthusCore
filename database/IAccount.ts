import mongoose from 'mongoose'
import { IDatabaseBase } from './IDatabaseBase'

export interface IAccount extends IDatabaseBase{
    username: string,
    password: string,
    color: string,
    class: string,
    block: boolean,
    projects: Array<string>,
}

export const SAccount:mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    color: String,
    class: String,
    block: Boolean,
    projects: [String],
    createdate: {type: Date, default: Date.now}
})