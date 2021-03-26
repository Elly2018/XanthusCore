import mongoose from "mongoose";
import { IDatabaseBase } from "../IDatabaseBase";

export interface AccountingElement{
    type: number
    value: number
}

export interface AccountingOutsource{
    vendor: string
    email: string
    phone: string
    billNumber: string
    billDate: number
    startday: number
    estimatedPayDay: number
}

export interface AccountingTravel {
    place: string
    nation: string
    startday: number
    endday: number
}

export interface AccountingReceive{
    client: string
    clientUID: string
    email: string
    phone: string
    
    billNumber: string
    billDate: number
}

export interface AccountPurchase{
    itemName: string
    count: number

    client: string
    clientUID: string
    email: string
    phone: string
    quote: boolean

    billNumber: string
    billDate: number
}

export interface IAccounting extends IDatabaseBase{
    title: string
    description: string
    sender: string
    target: string
    content: Array<AccountingElement>

    receive?: AccountingReceive
    travel?: AccountingTravel
    outsource?: AccountingOutsource
    purchase?:AccountPurchase

    category: number

    contact?: string
    payday?: number
    payMethod?: string,
}

export const SAccounting:mongoose.Schema = new mongoose.Schema({
    title: String,
    description: String,
    sender: String,
    target: String,
    content: [
        {
            type: Number,
            value: Number,
        }
    ],
    detail: Object,

    category: Number,

    contact: String,
    payday: Number,
    payMethod: String,
    createdate: {default: Date.now, type: Date}
})