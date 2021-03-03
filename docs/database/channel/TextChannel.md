# TextChannel

## Body
```typescript
interface ITextChannel extends IBaseChannel<TextSetting>, IDatabaseBase{
    setting:TextSetting,
}
```

## Schema
```typescript
const STextChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        delay: Number
    },
    createdate: {type: Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md), [IBaseChannel](./../../base/IBaseChannel.md), [TextSetting](./TextSetting.md)

## Description

## Properties