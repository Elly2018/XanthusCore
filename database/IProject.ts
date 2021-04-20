import { Schema, Document } from 'mongoose'

export interface IProjectElement{
    id: string,
    roles: Array<string>
}

export class IProjectLobbyChannel{
    text: string = ""
    file: string = ""
    request: string = ""
    graph: string = ""
    bill: string = ""
    outsource: string = ""
}

export class IProjectGroupChannel{
    /**
     * Group ID
     */
    id: string = ""
    /**
     * Group name
     */
    name: string = ""

    text: string = ""
    task: string = ""
    issue: string = ""
}

export interface IProject {
    _id?: string
    /**
     * Project name
     */
    name: string
    /**
     * Belong to which project group
     */
    belong: string
    /**
     * Project second name, usually English name
     */
    secondary: string
    description: string
    /**
     * Total budget for the project, TWD
     */
    budget: number
    /**
     * Project start daytime
     */
    startday: number
    /**
     * Project end daytime
     */
    endday: number
    /**
     * Sign daytime
     */
    sign: number
    /**
     * Initial cash, TWD
     */
    initial: number
    /**
     * Who's the owner of this project
     */
    owner: string
    color: string
    group: Array<IProjectElement>
    staff: Array<IProjectElement>
    role: Array<string>
    code: Array<string>
    channel:{
        lobby:IProjectLobbyChannel
        group:Array<IProjectGroupChannel>
    }
}

export class IProjectDocs extends Document implements IProject {
    name: string = ""
    belong: string = ""
    secondary: string = ""
    description: string = ""
    budget: number = 0
    startday: number = 0
    endday: number = 0
    sign: number = 0
    initial: number = 0
    owner: string = ""
    color: string = ""
    group: Array<IProjectElement> = []
    staff: Array<IProjectElement> = []
    role: Array<string> = []
    code: Array<string> = []
    channel:{
        lobby:IProjectLobbyChannel,
        group:Array<IProjectGroupChannel>
    } = {
        lobby: new IProjectLobbyChannel(),
        group: []
    }

    profileURL(address:string):string{
        return `${address}/Project/${this.id}`
    }
    GroupCount():number{
        return this.group.length;
    }
    StaffCount():number{
        return this.staff.length;
    }
    RoleCount():number{
        return this.role.length;
    }
}

export const SProject:Schema = new Schema({
    name: String,
    belong: String,
    secondary: String,
    description: String,
    budget: Number,
    startday: Number,
    endday: Number,
    sign: Number,
    Initial: Number,
    owner: String,
    color: {
        type: String,
        default: "#129853"
    },
    group: [
        {
            id: String,
            roles: [String]
        }
    ],
    staff: [
        {
            id: String,
            roles: [String],
        }
    ],
    role:[String],
    code:[String],
    channel:{
        lobby:{
            text: String,
            file: String,
            request: String,
            graph: String,
            bill: String,
            outsource: String
        },
        group:[
            {
                id: String,
                name: String,
                text: String,
                task: String,
                issue: String
            }
        ]
    },
    createdate: {type:Date, default:Date.now}
})