"Use Strict";

var net = require('net');

///	RoomUser: Stores the user account id (for identification), name (to display) and socket (to send messages)
function RoomUser(accountID, userName, socket){
	this.accountID = accountID;
	this.userName = userName;
	this.socket = socket;
}

RoomUser.prototype.send = function(message){
	//
}

///	Room: Stores the game sessionID (for identification), sessionKey (for validation), name (to display) and users (to message)
function Room(){
	this.sessionID = 0;
	this.sessionKey = '';
	this.name = '';
	this.users = [];
};

Room.prototype.getSession = function(){
	return this.sessionID;
}

Room.prototype.joinRoom = function(roomUser){
	this.users.push(roomUser)
}

Room.prototype.sendMessage = function(userName, message){
	for(var i = this.users.length; i >= 0; i--){
		this.users[i].write(userName + ' - ' + message);
	}
}

///	ChatServer: stores the running server variables.
function ChatServer(){
	this.server = {};
	this.rooms = [];
};

ChatServer.prototype.joinRoom = function(sessionID){
	var exists = false;
	for(var i = this.rooms.length; i  >= 0; i--){
		if (sessionID == this.rooms[i].getSession){
		
			exists = true;
		}
	}
	
	if(!exists){
	//
	}
}

ChatServer.prototype.start = function(config){
	this.server = net.createServer(function(socket){
		console.log('Chat connection: ');
		connections.push(socket);
	});
	console.log('TCP started...');
}	
	
module.exports = new Database();