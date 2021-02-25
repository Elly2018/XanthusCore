# INav_BadgesPackageElement

## Body

```typescript
interface INavBadgesPackageElement {
    server_id: string,
    isProfile: boolean,
    value: number
}
```

## Description

Navigation bar badges update element

## Properties

**server_id**: Target server

**isProfile**: If it's profile, logic will ignore server_id
Then update the badges on profile button

**value**: Value number