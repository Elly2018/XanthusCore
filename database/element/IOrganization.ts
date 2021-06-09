import { Schema, Document } from 'mongoose'

export enum OrganFilter{
    All = 0,
    Top = 1,
    Sub = 2
}

/**
 * Class permission enum type
 */
export enum ClassPermissionEnum{
    administrator = 0,
    createProject = 1,
    createNotice = 2,
    accountManagement = 3,
    viewAccounting = 4,
    modifyAccounting = 5,
    viewOrganization = 6,
    modifyOrganization = 7,
    viewProperty = 8,
    modifyProperty = 9,
    projectManagement = 10,
}

/**
 * Class permission status
 */
export class ClassPermission {
    constructor(de:boolean){
        this.administrator = de;
        this.createProject = de;
        this.createNotice = de;
        this.accountManagement = de;
        this.viewAccounting = de;
        this.modifyAccounting = de;
        this.viewOrganization = de;
        this.modifyOrganization = de;
        this.viewProperty = de;
        this.modifyProperty = de;
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
     * You can see accounting channel and check bill record
     */
    viewOrganization?: boolean = undefined
     /**
      * You can sumbit and modify bill record
      */
    modifyOrganization?: boolean = undefined
     /**
     * You can see accounting channel and check bill record
     */
    viewProperty?: boolean = undefined
    /**
     * You can sumbit and modify bill record
     */
    modifyProperty?: boolean = undefined
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
     * The layer of the organ
     */
    layer: number
    /**
     * Department name\
     * If leave it to null, it means it's under some other department
     */
    deparentment: string
    /**
     * Node parent
     */
    parent: string | null

    /**
      * Permission status
    */
    permission: ClassPermission
    createdate?: number
}

/**
 * Organizational chart data strcture
 */
export class IOrganizationDocs extends Document implements IOrganization {
    name: string = ""
    layer: number = 0
    deparentment: string = ""
    parent: string | null = null
    permission: ClassPermission = new ClassPermission(false)
}

export const SOrganization:Schema = new Schema({
    name: String,
    deparentment: String,
    layer: {type: Number, default: 1},
    parent: { type: Schema.Types.ObjectId, ref: 'manager', default: null},

    permission:{
        administrator: Boolean,
        createProject: Boolean,
        createNotice: Boolean,
        accountManagement: Boolean,
        viewAccounting: Boolean,
        modifyAccounting: Boolean,
        viewOrganization: Boolean,
        modifyOrganization: Boolean,
        viewProperty: Boolean,
        modifyProperty: Boolean,
        projectManagement: Boolean
    },
})