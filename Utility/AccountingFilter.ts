enum accountingType {
    All = 0,
    Assets = 1, 
    Expenses = 2, 
    Liabilities = 3, 
    Equity = 4, 
    Revenue = 5
}

enum accountingAssetType {
    All = 0, 
    Checking = 1, 
    Petty_Cash = 2, 
    Inventory = 3, 
    Accounts_Receivable = 4
}

enum accountingExpensesType {
    All = 0, 
    Payroll = 1, 
    Insurance = 2, 
    Rent = 3, 
    Equipment = 4, 
    Cost_of_Goods_Sold = 5
}

enum accountingLiabilitesType {
    All = 0, 
    Payroll_Tax_Liabilities = 1, 
    Sales_Tax_Collected = 2, 
    Credit_Memo_Liability = 3, 
    Accounts_Payable = 4
}

enum accountingEquityType {
    All = 0, 
    Owners_Equity = 1, 
    Common_Stock = 2, 
    Retained_Earnings = 3
}

enum accountingRevenueType {
    All = 0, 
    Product_Sales = 1, 
    Earned_Interest = 2, 
    Miscellaneous_Income = 3 
}

export const AccountingFilter = {
    accountingType,
    accountingAssetType,
    accountingExpensesType,
    accountingLiabilitesType,
    accountingEquityType,
    accountingRevenueType
}