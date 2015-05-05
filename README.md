##Synopsis

MageHand is a system for D&amp;D players to use. It helps DM's and players to focus less on the character stats and focus more on the game.
This GitHub project is for the API the site runs on.

This project was a reason to help me learn JavaScript better and to see what all of the fuss was about with node.
Please note that I am still learning: I welcome constructive criticism and any advice anyone is willing to give on ways to improve this codebase.
I am not afraid to make mistakes, as there is no better way to learn. For this reason there will be many checkins of files, mostly small, and mistakes will be made.

The development of this API was done on a mac and this is why the Test.command and Startup.command files are in the project. They where created to appease my lazyness for typing out the exact commands needed.

##Aims (What)

* Help make D&amp;D sessions as paperless as possible.
* Allow dnd sessions to be managed over distances.
* Cross platform

##Objectives (How)

* Web based system with API's made public.
* Support multiple versions of D&amp;D.
* Store character, user and session information in a database.

##Install

To install the API you will need to run the following commands in the projects root directory:

> npm install

> cd API

> npm install

##Running

To run the system you need to call the following command in the projects root directory:

> node MageHand

Once running the system has some commands that can be used to manipulate the server:

* Start - Start the server (You can optionally provide the port number after a space)
* Stop - Stop the server
* Quit - Release server assets and drop to command line.

Entering anything else will give the user a prompt with the availble commands.

##Testing

It is possible to run tests on Magehand once you have installed NodeJS and NPM by executing the following command in the projects root directory:

> grunt mochaTest

##Credits

Credit to [felixge](https://github.com/felixge) for the [MySQL package](https://github.com/felixge/node-mysql) now used in the project.
Credit also goes to [broofa](https://github.com/broofa) for the [Node-UUID package](https://github.com/broofa/node-uuid) also used in the project.
