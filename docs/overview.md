# Documentation

Most of format have some basic properties\
In order to prevent copy paste\
we using inheritance to solve this problem

* Base class
    * [IBase](./base/IBase.md)

There are some class response for complicated work here\
But the structure works little different in client and server

* Abstract class
    * [Main Network Receiver](./abstract/MainReceiver.md)
    * [Network Receiver](./abstract/DataReceiver.md)
    * [Network Receiver Base](./abstract/DataReceiverBase.md)
    * Network Sender

Server receive data format, it is also client sender data format

* Server receive format
    * Login
        1. ILogin_Login
        2. ILogin_Logout
    
Client receive data format, it is also server sender data format

* Client receive format
    * Login
        1. ILogin_Reply

Database format will affect how [mongoose](https://www.npmjs.com/package/mongoose)
create collection and document

* Database format
    1. IAccount

Etc object format for convenience purposes

* Utility
    1. AccountingFormat