import { Schema, Document } from 'mongoose'

export interface IOrganization{ 
    name: string
    deparentment: string
    parent: string
    manager: boolean
}

export class IOrganizationDocs extends Document implements IOrganization {
    name: string = ""
    deparentment: string = ""
    parent: string = ""
    manager: boolean = false
}

export const SOrganization:Schema = new Schema({
    name: String,
    deparentment: String,
    parent: { type: Schema.Types.ObjectId, ref: 'manager', default: undefined},
    manager: Boolean,
})