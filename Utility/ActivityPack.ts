import { IPost } from '../database/element/IPost';
import { IAccount } from '../database/IAccount';
import { IProject } from '../database/IProject';
import { IActivity } from '../database/element/IActivity'

/**
 * The fully activity state pack\
 * Show the sender, link task, and project belong and link end post or finish post
 */
export interface ActivityPack{
    /**
     * Target activity data
     */
    target: IActivity
    /**
     * Target task
     */
    task: IPost
    /**
     * End post target\
     * Undefined if not create yet
     */
    end: IPost | undefined
    /**
     * Finish post target
     * Undefined if not create yet
     */
    finish: IPost | undefined
    /**
     * Target task belong project
     */
    project: IProject
    /**
     * The member who's working at the same project right now
     */
    member: Array<IAccount>
}