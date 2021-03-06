# ProjectPermission

## Body
```typescript
interface ProjectPermission {
    projectModify: boolean,
    channelModify: boolean,
    billVisibility: boolean,
    billModify: boolean,
    graphVisibility: boolean,
    taskModify: boolean,
    requestModify: boolean,
}
```

## Description

Project management permission options

## Properties

**projectModify**: Can open administrator panel

**channelModify**: Can modify any channel setting

**billVisibility**: Can see bill channel

**billModify**: Can submit bill data and modify it

**graphVisibility**: Can see graph channel

**taskModify**: Can submit task data and modify and delete it

**requestModify**: Cab submit response to request