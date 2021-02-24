# IAccount

## Body

```typescript
interface IAccount{
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
    servers: [],
    createdate: { type: Date, default: Date.now }
})
```