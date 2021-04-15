import { Schema, Document } from 'mongoose'

/**
 * Bill detail
 */
export interface AccountingElement{
    /**
     * Cost type\
     * Check subtype for accounting bill
     */
    type: number
    value: number
}

/**
 * Payroll info
 */
export interface AccountPayroll{
    salary: number,
    laborinsurance: number,
    healthinsurance: number,
    pension: number
}

/**
 * Outsource info
 */
export interface AccountingOutsource{
    vendor: string
    email: string
    phone: string
    billNumber: string
    billDate: number
    startday: number
    estimatedPayDay: number
}

/**
 * Travel info
 */
export interface AccountingTravel {
    place: string
    nation: string
    startday: number
    endday: number
}

/**
 * Receive bill info
 */
export interface AccountingReceive{
    client: string
    clientUID: string
    email: string
    phone: string
    
    billNumber: string
    billDate: number
}

/**
 * Puchase info
 */
export interface AccountingPurchase{
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

export interface IAccounting {
    _id?: string
    title: string
    description: string

    /**
     * Who send the bill
     */
    sender: string
    /**
     * Targeting to which project
     */
    target: string
    /**
     * Cost or income list
     */
    content: Array<AccountingElement>

    payroll?:AccountPayroll
    receive?: AccountingReceive
    travel?: AccountingTravel
    outsource?: AccountingOutsource
    purchase?:AccountingPurchase

    /**
     * Bill category
     */
    category: number

    contact?: string
    payday?: number
    payMethod?: string
}

/**
 * Accounting bill
 */
export class IAccountingDocs extends Document {
    title: string = ""
    description: string = ""
    sender: string = ""
    target: string = ""
    content: Array<AccountingElement> = []

    payroll?:AccountPayroll = undefined
    receive?: AccountingReceive = undefined
    travel?: AccountingTravel = undefined
    outsource?: AccountingOutsource = undefined
    purchase?:AccountingPurchase = undefined

    category: number = 0

    contact?: string = ""
    payday?: number = 0
    payMethod?: string = ""
}

export const SAccounting:Schema = new Schema({
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

    payroll:{
        salary: Number,
        laborinsurance: Number,
        healthinsurance: Number,
        pension: Number
    },
    receive: {
        client: String,
        clientUID: String,
        email: String,
        phone: String,
        
        billNumber: String,
        billDate: Number
    },
    travel: {
        place: String,
        nation: String,
        startday: Number,
        endday: Number
    },
    outsource: {
        vendor: String,
        email: String,
        phone: String,
        billNumber: String,
        billDate: Number,
        startday: Number,
        estimatedPayDay: Number
    },
    purchase:{
        itemName: String,
        count: Number,

        client: String,
        clientUID: String,
        email: String,
        phone: String,
        quote: Boolean,

        billNumber: String,
        billDate: Number
    },

    category: Number,

    contact: String,
    payday: Number,
    payMethod: String,
    createdate: {default: Date.now, type: Date}
})