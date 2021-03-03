# TextChannel

## Body
```typescript
interface ITextChannel extends IBaseChannel<TextSetting>, IDatabaseBase{
}
```

## Schema
```typescript
const STextChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        delay: Number
    },
    link: String,
    createdate: {type: Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md), [IBaseChannel](./../../base/IBaseChannel.md), [TextSetting](./TextSetting.md)

## Description

## Properties