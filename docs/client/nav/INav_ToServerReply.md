# INav_ToServerReply

## Body

```typescript
interface INavToServerReply extends IBase {
    server: IServer
}
```

## Description

Server receiver\
After user click server button on navigation bar\
Server should send server information back to client\
Because client is viewing the page, it is waiting for response

## Properties

**server**: Server object, see more detail in [here](./../../database/IServer.md)