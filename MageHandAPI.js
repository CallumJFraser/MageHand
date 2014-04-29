var database = require('./Database');

var accountManager = require('./AccountManager');
var loginManager = require('./LoginManager');
var characterManager = require('./CharacterManager');
var classManager = require('./ClassManager');
var storyManager = require('./StoryManager');
var skillManager = require('./SkillManager');

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
			accountManager.GetByUsername(username, function(data){
				callback(new DnDResponse(data, authorised));
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
			characterManager.Get(characterID, function(data){
				callback(new DnDResponse(data, authorised));
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
			characterManager.GetByAccount(accountAID, function(data){
				callback(new DnDResponse(data, authorised));
			});
		}
		else{
			callback(new DnDResponse({ Success:false, Reason: 'See authorisation' }, authorised));
		}
	});
}

function getClass(aID, sID, ID, callback){
	authorise(aID, sID, function(authorised){
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

function getSession(aID, sID, sessionID, callback){
	authorise(aID, sID, function(authorised){
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

function getStories(aID, sID, sessionID, callback){
	authorise(aID, sID, function(authorised){
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

function getStory(aID, sID, storyID, callback){
	authorise(aID, sID, function(authorised){
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

function searchStories(aID, sID, storyText, callback){
	authorise(aID, sID, function(authorised){
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

function getSkillType(aID, sID, skillTypeID, callback){
	authorise(aID, sID, function(authorised){
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
function getAdminAccount(aID, sID, sID, sessionID, callback){
	authorise(aID, sID, function(authorised){
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
	GetClass:function(aID, sID, ID, callback){
		getClass(aID, sID, ID, callback);
	},
	GetStory: function(aID, sID, storyID, callback){
		getStory(aID, sID, storyID, callback);
	},
	SearchStories: function(aID, sID, storyText, callback){
		searchStories(aID, sID, storyText, callback);
	},
	GetAbillity:  function(aID, sID, abilityID, callback){
		getAbility(aID, sID, abilityID, callback);
	},
	GetSkillType:  function(aID, sID, skillTypeID, callback){
		getSkillType(aID, sID, skillTypeID, callback);
	}
};