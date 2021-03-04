# INav_UpdateBadgesR

## Body

```typescript
interface INavUpdateBadgesR extends IBase {
    projects: Array<string>
}
```

## Inherit

[IBase](./../../base/IBase.md)

## Description

Projects notification count request\
User want to know how many how many unread or uncheck messages it has miss in project\
Server will reply with [INav_UpdateBadgesR](./../../client/nav/INav_UpdateBadges.md)

## Properties

**projects**: Project ID list