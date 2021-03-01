import mongoose from "mongoose";

export interface ServerPermission{
    server_modify: boolean,
    channel_modify: boolean
}

export interface ChannelPermission{
    text_message_modify: boolean,
    file_element_modify: boolean,
    issue_post_modify: boolean,
    task_modify: boolean
}

export interface RolePermission{
    server: ServerPermission,
    channel: ChannelPermission
}

export interface RoleTemplate {
    name: string,
    color: string,
    permission: RolePermission,
}

/**
 * Role data module
 * @param name Role name
 * @param color Role color
 * @param dynamic Can it be modify by anyone
 * @param permission Role permission
 */
export interface IRole extends RoleTemplate {
    _id?: string,
    server: string,
    dynamic: boolean,
    createdate: number
}

export const SRole:mongoose.Schema = new mongoose.Schema({
    name: String,
    server: String,
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