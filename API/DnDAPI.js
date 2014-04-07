var database = require('./Database.js');

var accountManager = require('./AccountManager.js');
var loginManager = require('./LoginManager.js');
var characterManager = require('./CharacterManager.js');

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

function authorise(auth, callback){
	if(auth != undefined){
		loginManager.Authorise(auth.AID, auth.SessionID, auth.Username, function(authorisation){
			callback(authorisation);
		});
	}
	else{
		callback({ Success:false, Reason:'Missing authentication parameters'});
	}
}

function getAccount(auth, username, callback){
	authorise(auth, function(authorised){
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

function getCharacter(auth, characterID, callback){
	authorise(auth, function(authorised){
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

function getAccountCharacters(auth, accountAID, callback){
	authorise(auth, function(authorised){
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

function getSession(auth, sessionID, callback){
	authorise(auth, function(authorised){
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

function getAdminAccount(auth, sessionID, callback){
	authorise(auth, function(authorised){
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
	Start:function(success){
		start(success);
	},
	Login:function(username, password, callback) {
		login(username, password, callback);
	},
	Authorise:function(auth, callback){
		authorise(auth, callback);
	},
	GetAccount:function(auth, username, callback){
		getAccount(auth, username, callback);
	},
	GetCharacter:function(auth, characterID, callback){
		getCharacter(auth, characterID, callback);
	},
	GetAccountCharacters:function(auth, accountAID, callback){
		getAccountCharacters(auth, accountAID, callback);
	}
};