interface IServerElement{
    id: String,
    roles: Array<String>
}

interface IServerTemp{
    title: String,
    channeltype: Number
}

interface IServer{
    name: String,
    group: Array<IServerElement>,
    staff: Array<IServerElement>,
    role:Array<String>,
    template:{
        lobby: Array<IServerTemp>,
        group: Array<IServerTemp>
    },
    channel:{
        lobby:Array<String>,
        group:Array<String>
    },
    createdate?: Date
}