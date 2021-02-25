# INav_ToProfile

## Body

```typescript
interface IBase {
    header: "INav-ToProfile"
}
```

## Description

Does not have its own interface, just use [IBase](./../../base/IBase.md) instead\
Server receiver\
When user click profile button\
It sending a signal tells server that will make client stop received
server and channel update data\
such as text channel update message\
Because client is not at that page anymore