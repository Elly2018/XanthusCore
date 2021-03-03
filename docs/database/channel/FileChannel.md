# FileChannel

## Body

```typescript
interface IFileChannel extends IBaseChannel<FileSetting>, IDatabaseBase{
    root: string,
}
```

## Schema

```typescript
const SFileChannel:mongoose.Schema = new mongoose.Schema({
    setting:{
        color: String,
        use_nas: Boolean,
        nas:[
            {label: String, address: String},
        ]
    },
    link: String,
    root: String,
    createdate: {type: Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md), [IBaseChannel](./../../base/IBaseChannel.md), [FileSetting](./FileSetting.md)

## Description

## Properties