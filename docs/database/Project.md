# IProject

## Body

```typescript
export interface IProject extends IDatabaseBase {
    name: string,
    secondary: string,
    budget: number,
    startday: number,
    endday: number,
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

**secondary**: Project English name,

**budget**: Project budget,

**startday**: Project start date,

**endday**: Project finish date,

**owner**: Which account own the project

**color**: Default icon background color

**group**: Project group list

**staff**: Project staff list

**role**: Project role list

**template**: Channel template

**channel**: Channel ID list

**createdate**: Project create date