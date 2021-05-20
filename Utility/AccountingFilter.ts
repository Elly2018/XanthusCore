/**
 * Top category of accounting
 */
export enum AccountingCategory {
    Payroll,
    RecievedPayment,
    Outsource,
    Travel,
    Purchase,
}

/**
 * Accounting payroll subtype
 */
export enum AccountingPayrollType {
    Salary,
    Health,
    Labor,
    FullAttendanceAllowance,
    LivingAllowance,
    HousingAllowance,
    Pension,
}

/**
 * Accounting purchase subtype
 */
export enum AccountingPurchaseType {
    ComputerEquipment,
    OfficeEquipment,
    Print,
    Rent,
    Supplies,
    Fax,
    Network,
    Repair,
    Advertisement,
    Utilities,
    Insurance,
    Benefits,
    BusinessIncomeTax,
    Lawyer,
    BankFee,
    Deposit,
    Tax,
    Eudcation,
    Entertainment,
    Investment,
    Other,
}

/**
 * Accounting travel subtype
 */
export enum AccountingTravelType {
    Accommodation,
    Parking,
    Transportation,
    Food,
    Entertainment, 
}

/**
 * Accounting recieved payment subtype
 */
export enum AccountingRecievedPaymentType {
    Project,
    Consultant,
    BankLoan,
    ShareholderLoan,
    Subsidy,
}

/**
 * Accounting outsource subtype
 */
export enum AccountingOutsourceType {
    Plan,
    Art,
    Modeling,
    Rigging,
    Rendering,
    Editing,
    Audio,
    Programming,
    Other,
}