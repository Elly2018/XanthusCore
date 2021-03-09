import mongoose from 'mongoose'
import { IDatabaseBase } from './IDatabaseBase'

export interface IAccount extends IDatabaseBase{
    email: string,
    username: string,
    password: string,
    identitycard: string,
    firstname: string,
    lastname: string,
    passportname: string,
    phone: string,
    firstdayofwork: number,
    lastdayofwork: number,
    color: string,
    rank: number,
    class: string,
    salary: number,
    laborinsurance: number,
    healthinsurance: number,
    pension: number,
    block: boolean,
    projects: Array<string>,
}

export const SAccount:mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String,
    passportname: String,
    phone: String,
    color: String,
    class: String,
    block: Boolean,
    projects: [String],
    createdate: {type: Date, default: Date.now}
})