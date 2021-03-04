# IAccount

## Body

```typescript
interface IAccount extends IDatabaseBase {
    username: string,
    password: string,
    color: string,
    class: string,
    block: boolean,
    projects: Array<string>,
}
```

## Schema

```typescript
const SAccount:mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    color: String,
    class: String,
    block: Boolean,
    projects: [String],
    createdate: { type: Date, default: Date.now }
})
```

## Inherit

[IDatabaseBase](./../base/IDatabaseBase.md)

## Description

Define account data format

## Properties

**username**: Account username

**password**: Account password

**color**: Account profile background color

**class**: Account class (ID)

**block**: Is account block

**projects**: Join project list

**createdate**: When does the account created