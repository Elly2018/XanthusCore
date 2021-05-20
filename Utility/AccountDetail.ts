/**
 * Social channel account detail item\
 * See staff working detail
 */
export interface AccountDetail {
    /**
     * How long does account online
     */
    onlineTime: number
    /**
     * Sum for all task work time
     */
    workTime: number
    /**
     * Total task done
     */
    taskCount: number
    /**
     * Average finish rate
     */
    finish: number
    /**
     * Average quality rate
     */
    quality: number
}