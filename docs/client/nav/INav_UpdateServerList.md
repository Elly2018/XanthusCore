# INav_UpdateServerList

## Body

```typescript
interface INavUpdateServerList extends IBase {
    servers: Array<INavServerElement>
}
```

## Description

When user login or server have some event occurred\
Server send the message to all clients to 
update navigation bar element list\
User can manually trigger server feedback information by sending [request](./../../server/nav/INav_UpdateServerListR.md) message

## Properties

**servers**: The servers create / update element, see more in [here](./INav_ServerElement.md)