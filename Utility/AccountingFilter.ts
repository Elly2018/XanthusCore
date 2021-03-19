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
    Short_Term_Investments = 1, 
    Bill_Receivable = 2, 
    Accounts_Receivable = 3,
    Reserve_For_Doubtful_Account = 4,
    Income_Receivable = 5,
    Inventory = 6,
    Prepaid_Expenses = 7,
    Inventory_Of_Supplies = 8,
    Land = 9,
    Buildings = 10,
    Equipment = 11,
    Accumulated_Depreciation = 12
}

export enum AccountingExpensesType {
    All = 0, 
    Purchase = 1, 
    Purchase_Return = 2, 
    Purchase_Allowance = 3,
    Purchase_Discount = 4,
    Purchase_Shipping = 5,
    Payroll = 6,
    Advertisement = 7,
    Utilities= 8,
    Insurance = 9,
    Fax = 10,
    Supplies = 11,
    Rant = 12,
    Commission = 13,
    Interest = 14,
    Depreciation = 15,
    Bad_Debts = 16,
    Tax = 17
}

export enum AccountingLiabilitesType {
    All = 0, 
    Bill_Payable = 1,
    Account_Payable = 2,
    Payable_Expenses = 3,
    Loan = 4,
    Mortgage = 5
}

export enum AccountingEquityType {
    All = 0, 
    Owners_Equity = 1, 
    Common_Stock = 2, 
    Retained_Earnings = 3
}

export enum AccountingRevenueType {
    All = 0, 
    Sales = 1, 
    Sales_Return = 2, 
    Sales_Allowance = 3,
    Sales_Discount = 4,
    Service = 5,
    Commission = 6,
    Rent = 7,
    Interest = 8
}