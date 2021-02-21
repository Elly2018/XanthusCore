import ws from 'ws'

export abstract class DataSender<T>{
    public SendMessage(data:T, sender:WebSocket){
        sender.send(JSON.stringify(data));
    }
}

export abstract class ClientDataSender<T>{
    public SendMessage(data:T, sender:ws){
        sender.send(JSON.stringify(data));
    }
}