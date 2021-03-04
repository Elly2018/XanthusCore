# INav_UpdateProjectList

## Body

```typescript
interface INavUpdateProjectList extends IBase {
    projects: Array<INavProjectElement>
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Reference

[INav_ProjectElement](./INav_ProjectElement.md)

## Description

When user login or server have some event occurred\
Server send the message to all clients to 
update navigation bar element list\
User can manually trigger server feedback information by sending [request](./../../server/nav/INav_UpdateServerListR.md) message

## Properties

**projects**: The servers create / update element