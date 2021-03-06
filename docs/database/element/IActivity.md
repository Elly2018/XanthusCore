# Activity

## Body
```typescript
interface IActivity extends IDatabaseBase {
    title: string,
    account: string,
    project: string,
    description: string,
    starttime: number,
    endtime: number,
    property: number,
    finishrate: number,
    quality: number,
}
```

## Schema

```typescript
const SActivity:mongoose.Schema = new mongoose.Schema({
    title: String,
    account: String,
    project: String,
    description: String,
    starttime: Number,
    endtime: Number,
    property: Number,
    finishrate: Number,
    quality: Number,
    createdate: Number,
})
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

**finishrate**: Finish rate

**quality**: Quality rate