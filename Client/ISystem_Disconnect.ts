import { IBase } from "../IBase";

/**
 * Client receiver message\
 * Disconnect signal
 * @param reason Reason of disconnect
 */
export interface ISystem_Disconnect extends IBase{
    reason: string
}