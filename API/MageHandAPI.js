//	API
var database = require('./Database');

var accountManager = require('./Managers/AccountManager');
var loginManager = require('./Managers/LoginManager');
var characterManager = require('./Managers/CharacterManager');
var classManager = require('./Managers/ClassManager');
var storyManager = require('./Managers/StoryManager');
var skillManager = require('./Managers/SkillManager');
var raceManager = require('./Managers/RaceManager');
var sizeManager = require('./Managers/SizeManager');
var sessionManager = require('./Managers/SessionManager');
var runthroughManager = require('./Managers/RunthroughManager');
	
var mageHandAPI = module.exports = {
	Start: Start,
	Login: Login,
	Authorise: Authorise,
	GetAccount: GetAccount,
	GetCharacter: GetCharacter,
	GetAccountCharacters: GetAccountCharacters,
	GetClass: GetClass,
	GetClasses: GetClasses,
	GetStory: GetStory,
	SearchStories: SearchStories,
	GetSkillType: GetSkillType,
	GetRace: GetRace,
	GetRaces: GetRaces,
	GetSize: GetSize,
	GetSession: GetSession,
	GetCharacterSkill: GetCharacterSkill,
	GetRunthrough: GetRunthrough
};

function DnDResponse(result, auth){
	this.Result = result;
	this.Auth = auth;
}

function Start(successCallback){
	database.Restart({
		host	: 'localhost',
		user	: 'root',
		password: '',
		database: 'DnDBackend',
		error	: function (err){
			//
		},
		success	: successCallback
	});
};

function Login(username, password, callback){
	loginManager.Login(username, password, callback);
}

function Authorise(aID, sID, callback){
	loginManager.Authorise(aID, sID, function(authorisation){
		callback(authorisation);
	});
}

function GetAccount(aID, sID, username, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			accountManager.GetByUsername(username, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetCharacter(aID, sID, characterID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			characterManager.Get(characterID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetAccountCharacters(aID, sID, accountAID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			characterManager.GetByAccount(accountAID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetClass(aID, sID, ID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			classManager.Get(ID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetClasses(aID, sID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			classManager.List(function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetSession(aID, sID, sessionID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			sessionManager.GetSession(sessionID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetStories(aID, sID, sessionID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			storyManager.GetStories(sessionID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetStory(aID, sID, storyID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			storyManager.Get(storyID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function SearchStories(aID, sID, storyText, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			storyManager.Search(storyText, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetSkillType(aID, sID, skillTypeID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			skillManager.Get(skillTypeID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetRace(aID, sID, raceID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			raceManager.Get(raceID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetRaces(aID, sID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			raceManager.List(function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetSize(aID, sID, sizeID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			sizeManager.Get(sizeID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetSession(aID, sID, sessionID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			sessionManager.Get(sessionID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetCharacterSkill(aID, sID, characterID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			skillManager.GetByCharacter(characterID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function GetRunthrough(aID, sID, runthroughID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			runthroughManager.Get(runthroughID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

//	Admin calls
function GetAdminAccount(aID, sID, sID, sessionID, callback){
	Authorise(aID, sID, function(authorised){
		if(authorised.Success){
			sessionManager.GetSession(sessionID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

//	HTTP Binding

var crypto = require('crypto');
var util = require('util');
var express = require('express');
var app = express();

var database = require('./Database.js');
//	Auth
app.get('/login/:Username/:Password', function(req, res){
	Login(req, res);
});
//	Account
app.get('/account/:AID/:SID/:Username', function(req, res){
	GetAccount(req, res);
});
//	Character
app.get('/character/:AID/:SID/:CharacterID', function(req, res){
	GetCharacter(req, res);
});
app.get('/account/character/:AID/:SID/:AccountAID', function(req, res){
	GetAccountCharacters(req, res);
});
//	Session
app.get('/session/:AID/:SID/:SessionID', function(req, res){
	GetSession(req, res);
});
//	Class
app.get('/story/:AID/:SID/:StoryID', function(req, res){
	GetStory(req, res);
});

var server = undefined;

mageHandAPI.Start(function(){
	console.log('Starting...');
});

process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function (text) {
	var command = text;
	var commands = text.split(' ');
	if(commands.length > 1)
		command = commands[0] + '\n';

	switch(command){
		case 'quit\n':
			quit();
			break;
		case 'stop\n':
			kill();
			break;
		case 'start\n':
			start(commands);
			break;
		default:
			console.log('	Commands available:');
			console.log('	Start		- Start the server');
			console.log('			- (Optional) Port');
			console.log('	Stop		- Stop the server');
			console.log('	Quit		- Release server assets and drop to command line.');
			break;
	}
});

function start(commands){
	var port = 1024;
	if(commands.length > 1)
		port = parseInt(commands[1]);

	server = app.listen(port, function() {
	    console.log('	Listening on port %d', server.address().port);
	});
}

function kill() {
	if(server != undefined){
		console.log('	Stopping server...');
		server.close();
		server = undefined;
	}
}

function quit(){
	kill();
	console.log('	Quitting...');
	process.exit();
}




/***************    .    ****************/
/*
	This will be removed soon, as I plan to move over to the Sodium library shortly:
	http://bitwiseshiftleft.github.io/sjcl/
	
//	Acceptable hash algorithms in order of 'best' to 'worst'.
var acceptableHashes = ['sha512WithRSAEncryption', 'sha512', 'sha384WithRSAEncryption', 'sha384', 'sha256WithRSAEncryption', 'sha256'];
var availableHashes = crypto.getHashes();
var selectedHash = GetBestHash(acceptableHashes, availableHashes);
//console.log('Selected hash: "' + selectedHash + '"');

function GetData(request, response, callback){
	var data = '';
	request.on('data', function(chunk){
		data += chunk;
	});
	
	request.on('end', function(){
		callback(data, response);
	});
}
*/
//	API Calls:

	//	Expect Username, Password. Return AID + sessionID
	function Login(request, response){
		if(request.params != undefined){
			mageHandAPI.Login(request.params.Username, request.params.Password, function(apiResponse){
				if(apiResponse.Error){
					EndResponse(response, 500, apiResponse);
				}
				else{
					EndResponse(response, 200, apiResponse);
				}
			});
		}
	}

	function GetAccount(request, response){
		mageHandAPI.GetAccount(request.params.AID, request.params.SID, request.params.Username, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetCharacter(request, response){
		mageHandAPI.GetCharacter(request.params.AID, request.params.SID, request.params.CharacterID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetAccountCharacters(request, response){
		mageHandAPI.GetAccountCharacters(request.params.AID, request.params.SID, request.params.AccountAID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetSession(request, response){
		mageHandAPI.GetSession(request.params.AID, request.params.SID, request.params.SessionID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetStory(request, response){
		mageHandAPI.GetStory(request.params.AID, request.params.SID, request.params.StoryID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

/*
	function GetAdminAccount(request, response){
		mageHandAPI.getAdminAccount(request.params.AID, request.params.SID, request.params.AccountAID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}
*/
//	Utility Functions

function EndResponse(response, code, endObject){
	response.send(JSON.stringify(endObject));
}