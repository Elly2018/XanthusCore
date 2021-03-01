# IServer

## Body

```typescript
export interface IServer {
    name: string,
    owner: string,
    color: string,
    group: Array<IServerElement>,
    staff: Array<IServerElement>,
    role: Array<string>,
    template:{
        lobby: Array<IServerTemp>,
        group: Array<IServerTemp>
    },
    channel:{
        lobby:Array<string>,
        group:Array<IServerGroupChannel>
    },
    createdate: number
}
```

## Schema

```typescript
const SServer:mongoose.Schema = new mongoose.Schema({
    name: String,
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
            roles: [String]
        }
    ],
    role:[String],
    template:{
        lobby: [
            {title: String, channeltype: Number}
        ],
        group: [
            {title: String, channeltype: Number}
        ]
    },
    channel:{
        lobby:[String],
        group:[
            {
                name: String,
                channel: [String]
            }
        ]
    },
    createdate: {type:Date, default:Date.now}
})
```

## Description

Define server data format\
About sub interface, see more detail in\
[IServerElement](./IServerElement.md), [IServerTemp](./IServerTemp.md), [IServerGroupChannel](./IServerGroupChannel.md)

## Properties

**name**: Server name

**extension**: Server profile picture extension

**owner**: Which account own the server

**color**: Default icon background color

**group**: Server group list

**staff**: Server staff list

**role**: Server role list

**template**: Channel template

**channel**: Channel ID list

**createdate**: Server create date