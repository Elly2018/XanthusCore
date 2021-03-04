# Database

Database format will affect how [mongoose](https://www.npmjs.com/package/mongoose)
create collection and document

## Base

Abstract(concept) interface, contain 'must have' properties for documents

1. [DatabaseBase](./base/IDatabaseBase.md)
2. [BaseChannel](./base/IBaseChannel.md)
3. [BaseChannelSetting](./base/IBaseChannelSetting.md)

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

All kinds of channel data format\
Depend on target [channel header](./database/Channel.md)'s type\
The data is separate store in the different collections\
Because each channel have different feature

1. [TextChannel](./database/channel/TextChannel.md)
    * [TextSetting](./database/channel/TextSetting.md)
2. [FileChannel](./database/channel/FileChannel.md)
    * [FileSetting](./database/channel/FileSetting.md)
    * [Nas](./database/channel/Nas.md)
3. [LogChannel](./database/channel/LogChannel.md)

## Element

1. [Accounting](./database/element/Accounting.md)
2. [Class](./database/element/Class.md)
    * [ClassPermission](./database/element/ClassPermission.md)
3. [FileFilter](./database/element/FileFilter.md)
4. [FileURL](./database/element/FileURL.md)
5. [Group](./database/element/Group.md)
6. [Log](./database/element/Log.md)
7. [Message](./database/element/Message.md)
    * [IReply](./database/element/IReply.md)
8. [Role](./database/element/Role.md)
    * [RoleTemplate](./database/element/RoleTemplate.md)
    * [RolePermission](./database/element/RolePermission.md)
    * [ProjectPermission](./database/element/ProjectPermission.md)
    * [ChannelPermission](./database/element/ChannelPermission.md)