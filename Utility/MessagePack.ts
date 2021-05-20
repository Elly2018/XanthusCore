import { IMessage } from "../database/element/IMessage";
import { IAccount } from "../database/IAccount";
import { ProjectMember } from "./Member";

/**
 * Message pack for display in the text channel
 */
export interface MessagePack{
    /**
     * Sender
     */
    user: IAccount
    /**
     * Sender position in the project
     */
    sender: ProjectMember | undefined
    /**
     * Message data
     */
    message: IMessage
}