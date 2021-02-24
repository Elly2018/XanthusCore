# Documentation

## Base class

Most of format have some basic properties\
In order to prevent copy paste\
we using inheritance to solve this problem

* [IBase](./base/IBase.md)


## Abstract class

There are some class response for complicated work here\
But the structure works little different in client and server

* [Main Network Receiver](./abstract/MainReceiver.md)
* [Network Receiver](./abstract/DataReceiver.md)
* [Network Receiver Base](./abstract/DataReceiverBase.md)
* [Network Sender](./abstract/DataSender.md)
* [Client Network Sender](./abstract/ClientDataSender.md)

## Server receive format

Server receive data format, it is also client sender data format

* Login
    1. [ILogin_Login](./server/login/ILogin_Login.md)
    2. [ILogin_Logout](./server/login/ILogin_Logout.md)
    
## Client receive format

Client receive data format, it is also server sender data format

* Login
    1. [ILogin_Reply](./client/login/ILogin_Reply.md)

## Database format

Database format will affect how [mongoose](https://www.npmjs.com/package/mongoose)
create collection and document

1. [IAccount](./database/IAccount.md)

## Utility

Etc object format for convenience purposes

1. AccountingFormat