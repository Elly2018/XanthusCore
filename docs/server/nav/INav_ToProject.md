# INav_ToProject

## Body

```typescript
interface INavToProject extends IBase {
    project_id: string
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Description

Project receiver\
When user click project button on navigation bar\
It will send a singal tells project client is viewing the target project page\
Server will response with [INav_ToProjectReply](./../../client/nav/INav_ToProjectReply.md)

## Properties

**project_id**: Enter project id