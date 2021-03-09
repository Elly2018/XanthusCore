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

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[PostType](./PostType.md)

## Description

A container store html message as content\
and post data can be use in different scenario

## Properties

**belong**: Which channel or project it belong

**title**: Post title

**posttype**: Post type

**sender**: Who write the post

**content**: html string content

**deadline**: Last date for finish (Only works when type is task)