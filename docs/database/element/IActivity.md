# Activity

## Body
```typescript
interface IActivity extends IDatabaseBase {
    title: string,
    account: string,
    task: string,
    description: string,
    starttime: number,
    endtime: number,
    property: number,
}
```

## Description

Account activity log

## Properties

**title**: Activity title

**account**: Target account

**project**: Working project

**description**: Working description

**starttime**: When does the activity start

**endtime**: When does the activity end

**property**: Working category

**hours**: Total work hours