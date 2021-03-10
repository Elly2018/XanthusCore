export enum AccountingCategory {
    All = 0,
    Assets = 1, 
    Expenses = 2, 
    Liabilities = 3, 
    Equity = 4, 
    Revenue = 5
}

export enum AccountingAssetType {
    All = 0, 
    Checking = 1, 
    Petty_Cash = 2, 
    Inventory = 3, 
    Accounts_Receivable = 4
}

export enum AccountingExpensesType {
    All = 0, 
    Payroll = 1, 
    Insurance = 2, 
    Rent = 3, 
    Equipment = 4, 
    Cost_of_Goods_Sold = 5
}

export enum AccountingLiabilitesType {
    All = 0, 
    Payroll_Tax_Liabilities = 1, 
    Sales_Tax_Collected = 2, 
    Credit_Memo_Liability = 3, 
    Accounts_Payable = 4
}

export enum AccountingEquityType {
    All = 0, 
    Owners_Equity = 1, 
    Common_Stock = 2, 
    Retained_Earnings = 3
}

export enum AccountingRevenueType {
    All = 0, 
    Product_Sales = 1, 
    Earned_Interest = 2, 
    Miscellaneous_Income = 3 
}