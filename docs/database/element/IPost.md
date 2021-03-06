# IPost

## Body
```typescript
interface IPost extends IDatabaseBase {
    belong: string,
    title: string,
    posttype : number,
    sender: string,
    content: string,
    deadline: number,
}
```

## Schema
```typescript
const SPost:mongoose.Schema = new mongoose.Schema({
    belong: String,
    title: String,
    posttype : Number,
    sender: String,
    content: String,
    deadline: Date,
    createdate: {type:Date, default: Date.now}
})
```
## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[PostType](./PostType.md)

## Description

A container store html message as content\
and post data can be use in different scenario\
Check [here](./PostType.md) to see all the scenario

## Properties

**belong**: Which channel or project it belong

**title**: Post title

**posttype**: Post type

**sender**: Who write the post

**content**: html string content

**deadline**: Last date for finish (Only works when type is task)