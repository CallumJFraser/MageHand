var database = require('./Database.js');

var accountManager = require('./AccountManager.js');
var loginManager = require('./LoginManager.js');
var characterManager = require('./CharacterManager.js');
var storyManager = require('./StoryManager.js');

function DnDResponse(result, auth){
	this.Result = result;
	this.Auth = auth;
}

function start(success){
	database.Start({
		host	: 'localhost',
		user	: 'root',
		password: '',
		database: 'DnDBackend',
		error	: function (err){
			//
		},
		success	: success
	});
};

function login(username, password, callback){
	loginManager.Login(username, password, callback);
}

function authorise(aID, sID, callback){
	loginManager.Authorise(aID, sID, function(authorisation){
		callback(authorisation);
	});
}

function getAccount(aID, sID, username, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			accountManager.GetByUsername(username, function(account){
				callback(new DnDResponse(account, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function getCharacter(aID, sID, characterID, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			characterManager.GetCharacter(characterID, function(character){
				callback(new DnDResponse(character, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function getAccountCharacters(aID, sID, accountAID, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			characterManager.GetAccountCharacters(accountAID, function(character){
				callback(new DnDResponse(character, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function getSession(aID, sID, sessionID, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			sessionManager.GetSession(sessionID, function(characters){
				callback(new DnDResponse(characters, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function getStories(aID, sID, sessionID, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			storyManager.GetStories(sessionID, function(characters){
				callback(new DnDResponse(characters, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function getStory(aID, sID, storyID, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			storyManager.GetStory(storyID, function(characters){
				callback(new DnDResponse(characters, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function searchStories(aID, sID, storyText, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			storyManager.SearchStories(storyText, function(characters){
				callback(new DnDResponse(characters, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

//	Admin calls
function getAdminAccount(aID, sID, sID, sessionID, callback){
	authorise(aID, sID, function(authorised){
		if(authorised.Success){
			sessionManager.GetSession(sessionID, function(characters){
				callback(new DnDResponse(characters, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}
	
module.exports = {
	Start: function(success){
		start(success);
	},
	Login: function(username, password, callback) {
		login(username, password, callback);
	},
	Authorise: function(aID, sID, callback){
		authorise(aID, sID, callback);
	},
	GetAccount: function(aID, sID, username, callback){
		getAccount(aID, sID, username, callback);
	},
	GetCharacter: function(aID, sID, characterID, callback){
		getCharacter(aID, sID, characterID, callback);
	},
	GetAccountCharacters: function(aID, sID, accountAID, callback){
		getAccountCharacters(aID, sID, accountAID, callback);
	},
	GetStory: function(aID, sID, storyID, callback){
		getStory(aID, sID, storyID, callback);
	},
	SearchStories: function(aID, sID, storyText, callback){
		searchStories(aID, sID, storyText, callback);
	}
	
};