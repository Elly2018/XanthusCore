/**
 * The JSON format for descript the program starter
 */
export interface IProgram {
    /**
     * Program name
     */
    title: string,
    /**
     * Program locate local file name\
     * Empty project target URL, root start with local dir
     */
    filename: string,
    /**
     * Program offical website URL
     */
    website: string,
}