# IDatabaseBase

## Body
```typescript
export interface IDatabaseBase {
    _id?: string,
    meta?:string,
    createdate: number,
}
```

## Description

Some basic properties that each database interface should have

## Properties

**_id**: Document ID

**meta**: Extra information

**createdate**: Document create date