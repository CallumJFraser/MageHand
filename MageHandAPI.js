var database = require('./Database');

var accountManager = require('./AccountManager');
var loginManager = require('./LoginManager');
var characterManager = require('./CharacterManager');
var classManager = require('./ClassManager');
var storyManager = require('./StoryManager');
var skillManager = require('./SkillManager');
	
module.exports = {
	Start: function(success){
		Start(success);
	},
	Login: function(username, password, callback) {
		Login(username, password, callback);
	},
	Authorise: function(aID, sID, callback){
		Authorise(aID, sID, callback);
	},
	GetAccount: function(aID, sID, username, callback){
		GetAccount(aID, sID, username, callback);
	},
	GetCharacter: function(aID, sID, characterID, callback){
		GetCharacter(aID, sID, characterID, callback);
	},
	GetAccountCharacters: function(aID, sID, accountAID, callback){
		GetAccountCharacters(aID, sID, accountAID, callback);
	},
	GetClass:function(aID, sID, ID, callback){
		GetClass(aID, sID, ID, callback);
	},
	GetStory: function(aID, sID, storyID, callback){
		GetStory(aID, sID, storyID, callback);
	},
	SearchStories: function(aID, sID, storyText, callback){
		SearchStories(aID, sID, storyText, callback);
	},
	GetAbillity:  function(aID, sID, abilityID, callback){
		GetAbility(aID, sID, abilityID, callback);
	},
	GetSkillType:  function(aID, sID, skillTypeID, callback){
		GetSkillType(aID, sID, skillTypeID, callback);
	}
};

function DnDResponse(result, auth){
	this.Result = result;
	this.Auth = auth;
}

function Start(success){
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
			storyManager.GetStory(storyID, function(data){
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
			storyManager.SearchStories(storyText, function(data){
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
			skillManager.GetSkillType(skillTypeID, function(data){
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