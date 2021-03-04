# IProject

## Body

```typescript
export interface IProject extends IDatabaseBase {
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
}
```

## Schema

```typescript
const SProject:mongoose.Schema = new mongoose.Schema({
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

## Inherit

[IDatabaseBase](./../base/IDatabaseBase.md)

## Reference

[IProjectElement](./IProjectElement.md), 
[IProjectTemp](./IProjectTemp.md), 
[IProjectGroupChannel](./IProjectGroupChannel.md)

## Description

Define project data format

## Properties

**name**: Project name

**extension**: Project profile picture extension

**owner**: Which account own the project

**color**: Default icon background color

**group**: Project group list

**staff**: Project staff list

**role**: Project role list

**template**: Channel template

**channel**: Channel ID list

**createdate**: Project create date