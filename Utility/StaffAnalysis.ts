export interface Attendance {
    averageMonthWorkHour: number,
    averageWeekWorkHour: number,
    totalWorkHour: number,
    averageMonthLeaveHour: number,
    averageWeekLeaveHour: number,
    totalLeaveHour: number
}

export interface Contribution {
    project: string,
    tasks: Array<TaskRecord>
    totalWorkHour: number,
    totalFinishQuest: number,
    ratio: number,
}

export interface TaskRecord {
    project: string,
    group: string,
    task: string,
    workHour: number,
    starttime: number,
    endtime: number,
}

export interface Expenditure {
    averageMonthExpend: number,
    totalExpend: number
}

export interface StaffAnalysis{
    account: string,
    attendance: Attendance,
    contribution: Contribution,
    expenditure: Expenditure
}