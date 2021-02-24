import { IBase } from "../IBase";
/**
 * Server receiver message\
 * Create invite code
 * @param server_id Server target
 * @param code Invite code
 */
export interface IServerCreateInviteCode extends IBase {
    server_id: string,
    code: string
}