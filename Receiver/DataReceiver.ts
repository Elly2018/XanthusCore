/**
 * Receiver object base
 */
export abstract class DataReceiverBase{
    /**
     * The keywords\
     * When network package manager search through\
     * It will find the match keywords
     */
    keyword:string[];

    /**
     * Create a receiver instance
     * @param keyword Keyword register
     */
    constructor(keyword:string[]){
        this.keyword = keyword;
    }

    /**
     * Search through keyword, find matches
     * @param key keyword test
     */
    public Check(key:string):boolean{
        for(let i = 0; i < this.keyword.length; i++){
            if(this.keyword[i] == key) return true;
        }
        return false;
    }

    /**
     * What happen if matches
     * @param data Incoming data
     * @param ws Sender (Could be ignore)
     */
    public abstract Analysis(data:any, ws?:WebSocket) : Promise<void>;
}

/**
 * Network data receiver
 * @param T The type of data we want to casting
 */
export abstract class DataReceiver<T> extends DataReceiverBase{
    /**
     * What happen if matches
     * @param data Incoming data
     * @param ws Sender (Could be ignore)
     */
    abstract Analysis(data:T, ws?:WebSocket) : Promise<void>;
}