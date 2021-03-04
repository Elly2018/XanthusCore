# INav_ToProjectReply

## Body

```typescript
interface INavToProjectReply extends IBase {
    project: IProject
}
```

## Inherit

[IBaseReply](./../../base/IBaseReply.md)

## Reference

[IServer](./../../database/IServer.md)

## Description

Server receiver\
After user click project button on navigation bar\
Server should send project information back to client\
Because client is viewing the page, it is waiting for response

## Properties

**project**: Server object