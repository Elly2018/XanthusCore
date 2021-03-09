# Database

Database format will affect how [mongoose](https://www.npmjs.com/package/mongoose)
create collection and document

## Base

Abstract interface, contain 'must have' properties for some data format

1. [DatabaseBase](./base/IDatabaseBase.md)

## Main

Primary data, these object are on the top node\
They are connect with elements and channels collection

1. [Account](./database/Account.md)
2. [Project](./database/Project.md)
    * [IProjectElement](./database/IProjectElement.md)
    * [IProjectTemp](./database/IProjectTemp.md)
    * [IProjectGroupChannel](./database/IProjectGroupChannel.md)
3. [Channel](./database/Channel.md)
    * [ChannelNotice](./database/ChannelNotice.md)

## Channel

All kinds of channel setting data format\
Depend on target [channel header](./database/Channel.md)'s type\
The setting will have different format\
Because each channel have different feature

1. [TextSetting](./database/channel/TextSetting.md)
2. [FileSetting](./database/channel/FileSetting.md)
    * [Nas](./database/channel/Nas.md)

## Element

1. [Accounting](./database/element/Accounting.md)
2. [Activity](./database/element/IActivity.md)
3. [Class](./database/element/Class.md)
    * [ClassPermission](./database/element/ClassPermission.md)
4. [FileFilter](./database/element/FileFilter.md)
5. [FileURL](./database/element/FileURL.md)
6. [Group](./database/element/Group.md)
7. [Leave](./database/element/ILeave.md)
8. [Log](./database/element/Log.md)
    * [LogType](./database/element/LogType.md)
9. [Message](./database/element/Message.md)
    * [IReply](./database/element/IReply.md)
10. [Outsource](./database/element/IOutsource.md)
11. [Post](./database/element/IPost.md)
    * [PostType](./database/element/PostType.md)
12. [Rank](./database/element/IRank.md)
13. [Role](./database/element/Role.md)
    * [RoleTemplate](./database/element/RoleTemplate.md)
    * [RolePermission](./database/element/RolePermission.md)
    * [ProjectPermission](./database/element/ProjectPermission.md)
    * [ChannelPermission](./database/element/ChannelPermission.md)
14. [Salary](./database/element/ISalary.md)