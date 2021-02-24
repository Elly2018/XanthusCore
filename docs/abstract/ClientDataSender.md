# DataSender

## Body

```typescript
abstract class ClientDataSender<T>{
    public SendMessage(data:T, sender:ws){
        sender.send(JSON.stringify(data));
    }
}
```

## Description

Response for the websocket network sender\
Sender will check type error, prevent sending error package out

You probably thinking why are we need two sender [DataSender](./DataSender.md)\
Because according to [ws](https://www.npmjs.com/package/ws)\
Server store WebSocket instance as clients\
Client store ws instance as self

## Method

**SendMessage**: Sending data out by using argument **sender**

## Example

For example we want to create a post link sender

```typescript
// Define format
interface LikePost extends IBase {
    post: string
}

// Define sender
class PostLinkSender extends DataSender<LikePost> {}

// Create sender instance
const sender:PostLinkSender = new PostLinkSender();

// Sending data
sender.SendMessage({header: "LinkPost", value: post.id}, sender);
```