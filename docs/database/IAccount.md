# IAccount

## Body

```typescript
interface IAccount{
    _id: string,
    username: string,
    password: string,
    class: string,
    block: boolean,
    servers: Array<string>,
    createdate: number
}
```

## Schema

```typescript
const SAccount:mongoose.Schema = new mongoose.Schema({
    username: String,
    password: String,
    class: String,
    block: Boolean,
    servers: [String],
    createdate: { type: Date, default: Date.now }
})
```

## Description

Define account data format

## Properties

**username**: Account username

**password**: Account password

**class**: Account class (ID)

**block**: Is account block

**servers**: Join server list

**createdate**: When does the account created