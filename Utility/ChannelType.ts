/**
 * Channel enum
 */
export enum ChannelType{
    Text = 0,
    File = 1,
    Issue = 2,
    Request = 3,
    Graph = 4,
    Task = 5,
    Bill = 6,
    Outsource = 7,

    Setting = 50,
    Activity = 51,
    Notice = 52,
    Social = 53,
    Accounting = 60,
    ProjectManage = 61,
    ClassManage = 62,
    Leave = 63,
    Organization = 64,
    Property = 65,

    PrivateMessage = 100,
    Group = 1000,
}

/**
 * Dict for channel type
 */
export const ChannelTypeDict = {
    0: "Text",
    1: "File",
    2: "Issue",
    3: "Request",
    4: "Graph",
    5: "Task",
    6: "Bill",
    7: "Outsource",

    50: "Setting",
    51: "Activity",
    52: "Notice",
    53: "Social",

    60: "Accounting",
    61: "ProjectManage",
    62: "ClassManage",
    63: "Leave",
    64: "Organization",
    65: "Property",

    100: "PrivateMessage",
    1000: "Group"
}

/**
 * Icon binding for channel type in the client side
 */
export const ChannelIconDict = {
    0: "mdi-message-processing", 
    1: "mdi-file-multiple", 
    2: "mdi-help-circle", 
    3: "mdi-checkbox-multiple-marked", 
    4: "mdi-chart-bar", 
    5: "mdi-shopping", 
    6: "mdi-chart-line",
    7: "mdi-pound",

    50: "mdi-puzzle",
    51: "mdi-gamepad-square",
    52: "mdi-bell",
    53: "mdi-account-multiple", 
    
    60: "mdi-bank", 
    61: "mdi-server", 
    62: "mdi-shield", 
    63: "mdi-export",
    64: "mdi-sitemap",
    65: "mdi-home-variant",

    100: "mdi-account-location",
    1000: "mdi-account-multiple",
}