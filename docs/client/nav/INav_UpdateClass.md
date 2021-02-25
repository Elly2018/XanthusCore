# INav_UpdateClass

## Body

```typescript
interface INavUpdateClass extends IBase {
    class : IClass
}
```

## Description

Client components will sometime need to know user class to determine\
whether or not user have permission to act on it\
This will require to need to know current class status

Client will get message after sending [request](./../../server/nav/INav_UpdateClassR.md) to the server

## Properties

**class**: Class element, see more in [here](./../../database/IClass.md)