# ILeave

## Body

```typescript
interface ILeave extends IDatabaseBase {
    account: string,
    type: number,
    subject: string,
    content: string
}
```

## Description

Record store account ask for leave

## Properties

**account**: Account target

**type**: Type of leave

**subject**: Record subject

**content**: Record message content