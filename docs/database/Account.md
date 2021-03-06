# IAccount

## Body

```typescript
interface IAccount extends IDatabaseBase {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
    passportname: string,
    phone: string,
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
    firstname: String,
    lastname: String,
    passportname: String,
    phone: String,
    color: String,
    class: String,
    block: Boolean,
    projects: [String],
    createdate: {type: Date, default: Date.now}
})
```

## Inherit

[IDatabaseBase](./../base/IDatabaseBase.md)

## Description

Define account data format

## Properties

**username**: Account username

**password**: Account password

**firstname**: Staff first name

**lastname**: Staff last name

**passportname**: Staff passport English name

**phone**: Staff cellphone number

**color**: Account profile background color

**class**: Account class (ID)

**block**: Is account block

**projects**: Join project list

**createdate**: When does the account created