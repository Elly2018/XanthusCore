import mongoose from "mongoose";

/**
 * Role data module
 * @param name Role name
 * @param color Role color
 * @param dynamic Can it be modify by anyone
 * @param permission Role permission
 */
export interface IRole{
    name: string,
    color: string,
    dynamic: boolean,
    permission: {
        server: {
            server_modify: boolean,
            channel_modify: boolean
        },
        channel: {
            text_message_modify: boolean,
            file_element_modify: boolean,
            issue_post_modify: boolean,
            task_modify: boolean
        }
    },
    createdate: number
}

export const SRole:mongoose.Schema = new mongoose.Schema({
    name: String,
    color: String,
    dynamic: Boolean,
    permission: {
        server: {
            server_modify: Boolean,
            channel_modify: Boolean
        },
        channel: {
            text_message_modify: Boolean,
            file_element_modify: Boolean,
            issue_post_modify: Boolean,
            task_modify: Boolean
        }
    },
    createdate: {type: Date,default: Date.now}
})