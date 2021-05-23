import { Schema, Document } from 'mongoose'

/**
 * Class permission status
 */
export class ClassPermission{
    constructor(de:boolean){
        this.administrator = de;
        this.createProject = de;
        this.createNotice = de;
        this.accountManagement = de;
        this.viewAccounting = de;
        this.modifyAccounting = de;
        this.projectManagement = de;
    }
    /**
     * Unlock all ability
     */
    administrator?: boolean = undefined
    /**
     * You can create project and delete project at toolbar
     */
    createProject?: boolean = undefined
    /**
     * You can create notice post
     */
    createNotice?: boolean = undefined
    /**
     * You can view staff detail and be able to modify them and view detail record
     */
    accountManagement?: boolean = undefined
    /**
     * You can see accounting channel and check bill record
     */
    viewAccounting?: boolean = undefined
    /**
     * You can sumbit and modify bill record
     */
    modifyAccounting?: boolean = undefined
    /**
     * You can view project management channel and be able to modify them and view detail record
     */
    projectManagement?: boolean = undefined
}

/**
 * Organizational chart strtucture
 */
export interface IOrganization{
    _id?: string
    /**
     * Node name
     */
    name: string
    /**
     * Department name\
     * If leave it to null, it means it's under some other department
     */
    deparentment: string
    /**
     * Node parent
     */
    parent: string

    /**
      * Permission status
    */
    permission: ClassPermission
    createdate?: number
}

export class IOrganizationDocs extends Document implements IOrganization {
    name: string = ""
    deparentment: string = ""
    parent: string = ""
    permission: ClassPermission = new ClassPermission(false)
}

export const SOrganization:Schema = new Schema({
    name: String,
    deparentment: String,
    parent: { type: Schema.Types.ObjectId, ref: 'manager', default: null},

    permission:{
        administrator: Boolean,
        createProject: Boolean,
        createNotice: Boolean,
        accountManagement: Boolean,
        viewAccounting: Boolean,
        modifyAccounting: Boolean,
        projectManagement: Boolean
    },
})