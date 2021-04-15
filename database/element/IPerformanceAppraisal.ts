import mongoose from "mongoose";

/**
 * Rating for staff\
 * Whenever task is done
 */
export interface IPerformanceAppraisal extends mongoose.Document {
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

export const SPerformanceAppraisal:mongoose.Schema = new mongoose.Schema({
  sender: String,
  account: String,
  task: String,
  time: Number,
  post: String,

  finishRate: Number,
  quality: Number,
  createdate: {default: Date.now, type: Date}
})