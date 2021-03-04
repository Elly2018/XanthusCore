# Review

## Body
```typescript
interface IReview extends IDatabaseBase {
    account: string,
    attendance: Array<Attendance>,
    activity: Array<Activity>,
}
```

## Schema
```typescript
const SReview:mongoose.Schema = new mongoose.Schema({
    account: String,
    attendance:[
        {
            ahead_of_schedule: Number,
            change_of_rest: Number,
            holiday: Number,
            notes: String,
        }
    ],
    activity:[
        {
            title: String,
            project: String,
            description: String,
            week: Number,
            property: Number,
            hours: Number,
            finish_rate: Number,
            quality: Number,
        }
    ],
    createdate: Number
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[Attendance](./Attendance.md),
[Activity](./Activity.md)

## Description

Staff performance appraisal

## Properties

**account**: Account target

**attendance**: Staff attendance

**activity**: Staff activity

**createdate**: Use year and month (Ignore day)

