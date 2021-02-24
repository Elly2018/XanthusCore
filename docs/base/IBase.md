# IBase

## Body
```typescript
interface IBase{
    header: String,
}
```

## Description

Most of data format will have basic properties

## Properties

**header**: Define the network package

## Example

For example if we want to define a new data format

```typescript
interface INewFormat extends IBase {
    property1: string,
    property2: string,
    ...
}
```

