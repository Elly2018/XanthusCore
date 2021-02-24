const accountingType: string[] = [
    "All",
    "Assets", 
    "Expenses", 
    "Liabilities", 
    "Equity", 
    "Revenue"
]

const accountingAssetType: string[] = [
    "All", 
    "Checking", 
    "Petty Cash", 
    "Inventory", 
    "Accounts Receivable"
]

const accountingExpensesType: string[] = [
    "All", 
    "Payroll", 
    "Insurance", 
    "Rent", 
    "Equipment", 
    "Cost of Goods Sold"
]

const accountingLiabilitesType: string[] = [
    "All", 
    "Payroll Tax Liabilities", 
    "Sales Tax Collected", 
    "Credit Memo Liability", 
    "Accounts Payable"
]

const accountingEquityType: string[] = [
    "All", 
    "Owner’s Equity", 
    "Common Stock", 
    "Retained Earnings"
]

const accountingRevenueType: string[] = [
    "All", 
    "Product Sales", 
    "Earned Interest", 
    "Miscellaneous Income"
]

export const AccountingFilter = {
    accountingType,
    accountingAssetType,
    accountingExpensesType,
    accountingLiabilitesType,
    accountingEquityType,
    accountingRevenueType
}