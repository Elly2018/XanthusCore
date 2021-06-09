import { IOrganization } from "../database/element/IOrganization";

/**
 * The package specified the current position
 */
export interface OrganizationPack{
    /**
     * Target organization node
     */
    target: IOrganization
    /**
     * Under which department
     */
    department: IOrganization | undefined
    /**
     * Under that department\
     * Which layer you are on\
     * If it's 1, it means it's on top layer
     */
    layer: number
    /**
     * Department layer
     */
    departmentLayer: Array<IOrganization>
}

/**
 * The tree structure of organ\
 * Use in server for analysis or client organ graph
 */
export interface OrganizationTree{
    /**
     * Target organization node
     */
    target: IOrganization
    /**
     * Children
     */
    children: Array<OrganizationTree>
}