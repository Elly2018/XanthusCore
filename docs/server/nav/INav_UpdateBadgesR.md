# INav_UpdateBadgesR

## Body

```typescript
interface INavUpdateBadgesR extends IBase {
    servers: Array<string>
}
```

## Description

Servers notification count request\
User want to know how many how many unread or uncheck messages it has miss in server\
Server will reply with [INav_UpdateBadgesR](./../../client/nav/INav_UpdateBadges.md)

## Properties

**servers**: Server ID list