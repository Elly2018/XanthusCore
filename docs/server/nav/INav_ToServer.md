# INav_ToServer

## Body

```typescript
interface INavToServer extends IBase {
    server_id: string
}
```

## Description

Server receiver\
When user click server button on navigation bar\
It will send a singal tells server client is viewing the target server page\
Server will response with [INav_ToServerReply](./../../client/nav/INav_ToServerReply.md)

## Properties

**server_id**: Enter server id