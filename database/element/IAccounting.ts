import mongoose from "mongoose";

export interface AccountingElement{
    type: number
    value: number
}

export interface AccountPayroll{
    salary: number,
    laborinsurance: number,
    healthinsurance: number,
    pension: number
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

/**
 * Accounting bill
 */
export interface IAccounting extends mongoose.Document {
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