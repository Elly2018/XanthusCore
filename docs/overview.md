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
* Nav
1. [INav_ToProfile](./server/nav/INav_ToProfile.md)
2. [INav_ToServer](./server/nav/INav_ToServer.md)
3. [INav_CreateServer](./server/nav/INav_CreateServer.md)
4. [INav_AddServer](./server/nav/INav_AddServer.md)
5. [INav_UpdateBadgesR](./server/nav/INav_UpdateBadgesR.md)
6. [INav_UpdateServerListR](./server/nav/INav_UpdateServerListR.md)
7. [INav_UpdateClassR](./server/nav/INav_UpdateClassR.md)

## Client receive format

Client receive data format, it is also server sender data format

* Login
1. [ILogin_Reply](./client/login/ILogin_Reply.md)
* Nav
1. INav_ToServerReply
2. INav_CreateServerReply
3. INav_AddServerReply
4. INav_UpdateUser
5. INav_UpdateBadges
6. INav_UpdateServerList
7. INav_UpdateClass

## Database format

Database format will affect how [mongoose](https://www.npmjs.com/package/mongoose)
create collection and document

1. [IAccount](./database/IAccount.md)
2. [IServer](./database/IServer.md)
    * [IServerElement](./database/IServerElement.md)
    * [IServerTemp](./database/IServerTemp.md)
    * [IServerGroupChannel](./database/IServerGroupChannel.md)

## Utility

Etc object format for convenience purposes

1. AccountingFormat