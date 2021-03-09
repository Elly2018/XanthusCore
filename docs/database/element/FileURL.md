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

## Inherit

[IDatabaseBase](./../../base/IDatabaseBase.md)

## Reference

[FileFilter](./FileFilter.md)

## Description

File channel URL element, define the page link

## Properties

**name**: page title

**url**: Targeting location without drive label

**filters**: Page contain filters

**page_url**: Page contain URL