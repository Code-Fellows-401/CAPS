# CAPS

Phase 1 Requirements/
Today, we begin the first of a 4-Phase build of the CAPS system, written in Node.js. In this first phase, our goal is to setup a system of events and handlers, with the intent being to change out the eventing system as we go, but keeping the handlers themselves largely the same. The task of “delivering a package” doesn’t change (the handler), even if the mechanism for triggering that task (the event) does.

The following user/developer stories detail the major functionality for this phase of the project.

![uml](./module/images/uml.png) -> Lab 10

Testing ->
As a vendor, I want to alert the system when I have a package to be picked up./
As a driver, I want to be notified when there is a package to be delivered./
As a driver, I want to alert the system when I have picked up a package and it is in transit./
As a driver, I want to alert the system when a package has been delivered./
As a vendor, I want to be notified when my package has been delivered./
And as developers, here are some of the development stories that are relevant to the above./

As a developer, I want to use industry standards for managing the state of each package.
As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.

Technical Requirements / Notes
In order to switch from Node Events to Socket.io, the refactoring process will involve changes to each application to use the core features of Socket.io.

Overview

The goal of this lab is to create a namespaced Socket.io event server, and to configure Vendor and Driver Client Modules.

The Socket Server will create a namespace of caps that will receive all CAPS event traffic.
Each Vendor and Driver Client will connect to the caps namespace.
The server will emit specific events to each socket that is listening for their designated events from the Global Event Pool defined in the Server.
Each Vendor will only emit and listen for specific events based on their Vendor ID. This will be managed by rooms within Socket.io.
Each Driver will “pick up” a package when the vendor notifies the Server that an “order” is ready and simulate “in-transit” and “delivered” events.
The expected output of the 3 running applications is the same as it was in Phase 2.

## Whiteboard:

![uml](./module/images/lab-11.png) -> Lab 11
