import { IBase } from "../IBase";
/**
 * Client receiver message\
 * code request
 * @param code invite code
 */
export interface IServerInviteCode extends IBase {
    code: string
}