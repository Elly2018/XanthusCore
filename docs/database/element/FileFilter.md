# FileFilter

## Body
```typescript
interface IFileFilter extends IDatabaseBase {
    name: string,
    start_with: string,
    end_with: string,
    extension: Array<string>,
    top_only: boolean,
}
```

## Schema
```typescript
const SFileFilter:mongoose.Schema = new mongoose.Schema({
    name: String,
    start_with: String,
    end_with: String,
    extension:[String],
    top_only: {type:Boolean, default: true},
    createdate: {type:Date, default:Date.now}
})
```

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

File channel filter element, Store the values which define the filter result

## Properties

**name**: Filter title

**start_with**: File name prefix

**end_with**: File name suffix

**extension**: File name extension

**top_only**: Is filter only search top root folder result