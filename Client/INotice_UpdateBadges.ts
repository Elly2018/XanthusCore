import { IBase } from "../IBase";
/**
 * Client receiver message\
 * Notice channel badges
 * @param value badges info
 */
export interface INoticeUpdateBadges extends IBase {
    value: number
}