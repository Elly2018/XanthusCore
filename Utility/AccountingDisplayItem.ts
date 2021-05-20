import { IAccounting } from "../database/element/IAccounting";
import { IAccount } from "../database/IAccount";

/**
 * For display accounting data in channel
 */
export interface AccountingDisplayItem{
    /**
     * Accounting data
     */
    accounting: IAccounting
    /**
     * Who send the accounting data\
     * This will use for display user icon
     */
    sender: IAccount
}