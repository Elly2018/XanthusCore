import { IBase } from "../IBase";

/**
 * Client receiver message\
 * Disconnect signal
 * @param reason Reason of disconnect
 */
export interface ISystemDisconnect extends IBase{
    reason: string
}