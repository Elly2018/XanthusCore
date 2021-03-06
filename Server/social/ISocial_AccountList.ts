import { IBase } from "../../IBase";

/**
 * Server receiver message\
 * Get social list
 * @param search Search username keyword
 */
export interface ISocialAccountList extends IBase{
    search: string,
    class: string,
    page: number,
    offset: number,
}