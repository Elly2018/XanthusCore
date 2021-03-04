# INav_BadgesPackageElement

## Body

```typescript
interface INavBadgesPackageElement {
    project_id: string,
    isProfile: boolean,
    value: number
}
```

## Description

Navigation bar badges update element

## Properties

**project_id**: Target project

**isProfile**: If it's profile, logic will ignore project_id
Then update the badges on profile button

**value**: Value number