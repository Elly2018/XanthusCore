# Documentation

## Base class

Most of format have some basic properties\
In order to prevent copy paste\
we using inheritance to solve this problem

* [IBase](./base/IBase.md)
* [IBaseReply](./base/IBaseReply.md)

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

#### Login

1. [ILogin_Login](./server/login/ILogin_Login.md)

#### Nav

1. [INav_ToServer](./server/nav/INav_ToServer.md)
2. [INav_CreateServer](./server/nav/INav_CreateServer.md)
    * [INav_Template](./server/nav/INav_Template.md)
    * [IServerTemp](./database/IServerTemp.md)
3. [INav_AddServer](./server/nav/INav_AddServer.md)
4. [INav_UpdateBadgesR](./server/nav/INav_UpdateBadgesR.md)
5. [INav_UpdateServerListR](./server/nav/INav_UpdateServerListR.md)
6. [INav_UpdateClassR](./server/nav/INav_UpdateClassR.md)

#### Profile

1. [IProfile_ChangeColor](./server/profile/IProfile_ChangeColor.md)
2. [IProfile_ChangeUsername](./server/profile/IProfile_ChangeUsername.md)
3. [IProfile_ChangePassword](./server/profile/IProfile_ChangePassword.md)

#### Server

1. IServer_ChangeColor
2. IServer_ChangeName
3. IServer_CreateInviteCode
4. IServer_ModifyGroup
5. IServer_ModifyRole
6. IServer_ModifyStaff
7. IServer_UpdateChannelR
8. IServer_UpdateR

#### Channel

1. IChannel_ToChannel
2. IChannel_UpdateBadgesR
3. IChannel_ReadNotices

#### Text channel

1. ITextChannel_LoadMessage

## Client receive format

Client receive data format, it is also server sender data format

#### Login

1. [ILogin_Reply](./client/login/ILogin_Reply.md)

#### Nav

1. [INav_ToServerReply](./client/nav/INav_ToServerReply.md)
2. [INav_UpdateUser](./client/nav/INav_UpdateUser.md)
3. [INav_UpdateBadges](./client/nav/INav_UpdateBadges.md)
    * [INav_BadgesPackageElement](./client/nav/INav_BadgesPackageElement.md)
4. [INav_UpdateServerList](./client/nav/INav_UpdateServerList.md)
    * [INav_ServerElement](./client/nav/INav_ServerElement.md)
5. [INav_UpdateClass](./client/nav/INav_UpdateClass.md)

#### Server

1. IServer_InviteCode
2. IServer_Update
3. IServer_UpdateChannel

#### Channel

1. IChannel_ToChannelReply
2. IChannel_UpdateBadges

## Database format

Database format will affect how [mongoose](https://www.npmjs.com/package/mongoose)
create collection and document

#### Main

1. [IAccount](./database/IAccount.md)
2. [IServer](./database/IServer.md)
    * [IServerElement](./database/IServerElement.md)
    * [IServerTemp](./database/IServerTemp.md)
    * [IServerGroupChannel](./database/IServerGroupChannel.md)
3. IChannel

#### Channel

1. IBaseChannel
2. IFileChannel
3. ILogChannel
4. ITextChannel

#### Element

1. IClass
2. IFileFilter
3. IFileURL
4. IGroup
5. ILog
6. IMessage
7. IRole

## Utility

Etc object format for convenience purposes

1. [AccountingFormat](./utility/AccountingFormat.md)
2. [ChannelType](./utility/ChannelType.md)