# FileURL

## Body
```typescript
interface IFileURL extends IDatabaseBase {
    name: string,
    url: string,
    filters:Array<string>,
    page_url:Array<string>,
}
```

## Schema
```typescript
const SFileURL:mongoose.Schema = new mongoose.Schema({
    name: String,
    url: String,
    filters:[String],
    page_url:[String],
    createdate: {type:Date, default:Date.now}
})
```
## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Description

File channel URL element, define the page link

## Properties

**name**: page title

**url**: Targeting location without drive label

**filters**: Page contain filters

**page_url**: Page contain URL