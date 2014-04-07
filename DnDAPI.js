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

function authorise(aID, sessionID, callback){
	loginManager.Authorise(aID, sessionID, function(authorisation){
		callback(authorisation);
	});
}

function getAccount(aID, sessionID, username, callback){
	authorise(aID, sessionID, function(authorised){
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

function getCharacter(aID, sessionID, characterID, callback){
	authorise(aID, sessionID, function(authorised){
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

function getAccountCharacters(aID, sessionID, accountAID, callback){
	authorise(aID, sessionID, function(authorised){
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

function getSession(aID, sessionID, sessionID, callback){
	authorise(aID, sessionID, function(authorised){
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

function getAdminAccount(aID, sessionID, sessionID, callback){
	authorise(aID, sessionID, function(authorised){
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
	Authorise:function(aID, sessionID, callback){
		authorise(aID, sessionID, callback);
	},
	GetAccount:function(aID, sessionID, username, callback){
		getAccount(aID, sessionID, username, callback);
	},
	GetCharacter:function(aID, sessionID, characterID, callback){
		getCharacter(aID, sessionID, characterID, callback);
	},
	GetAccountCharacters:function(aID, sessionID, accountAID, callback){
		getAccountCharacters(aID, sessionID, accountAID, callback);
	}
};