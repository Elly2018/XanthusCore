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
  sender: String,
  account: String,
  task: String,
  time: Number,
  post: String,

  finishRate: Number,
  quality: Number,
  createdate: {default: Date.now, type: Date}
})