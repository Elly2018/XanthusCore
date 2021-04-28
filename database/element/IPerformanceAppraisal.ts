import { Schema, Document } from 'mongoose'

export interface IPerformanceAppraisal{
  _id?:string
  /**
   * Who sign up the record
   */
   sender: string
   /**
    * Who is getting rate
    */
   account: string
   /**
    * Which task
    */
   task: string
   /**
    * Cost time
    */
   time: number
   /**
    * Manager message post
    */
   post: string
 
   finishRate: number
   quality: number
   createdate?: number
}

/**
 * Rating for staff\
 * Whenever task is done
 */
export class IPerformanceAppraisalDocs extends Document implements IPerformanceAppraisal {
  /**
   * Who sign up the record
   */
  sender: string = ""
  /**
   * Who is getting rate
   */
  account: string = ""
  /**
   * Which task
   */
  task: string = ""
  /**
   * Cost time
   */
  time: number = 0
  /**
   * Manager message post
   */
  post: string = ""

  finishRate: number = 0
  quality: number = 0
}

export const SPerformanceAppraisal:Schema = new Schema({
  sender: { type: Schema.Types.ObjectId, ref: 'account' },
  account: { type: Schema.Types.ObjectId, ref: 'account' },
  task: { type: Schema.Types.ObjectId, ref: 'post' },
  time: Number,
  post: { type: Schema.Types.ObjectId, ref: 'post' },

  finishRate: Number,
  quality: Number,
  createdate: {default: Date.now, type: Date}
})