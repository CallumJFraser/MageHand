"Use Strict";

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
	
var mageHandAPI = {
	Start: APIStart,
	Login: APILogin,
	Authorise: APIAuthorise,
	GetAccount: APIGetAccount,
	GetCharacter: APIGetCharacter,
	GetAccountCharacters: APIGetAccountCharacters,
	GetClass: APIGetClass,
	GetClasses: APIGetClasses,
	GetStory: APIGetStory,
	SearchStories: APISearchStories,
	GetSkillType: APIGetSkillType,
	GetRace: APIGetRace,
	GetRaces: APIGetRaces,
	GetSize: APIGetSize,
	GetSession: APIGetSession,
	GetCharacterSkill: APIGetCharacterSkill,
	GetRunthrough: APIGetRunthrough
};

module.exports = mageHandAPI;

function DnDResponse(result, auth){
	this.Result = result;
	this.Auth = auth;
}

function APIStart(successCallback){
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

function APILogin(username, password, callback){
	loginManager.Login(username, password, callback);
}

function APIAuthorise(aID, sID, callback){
	loginManager.Authorise(aID, sID, function(authorisation){
		callback(authorisation);
	});
}

function APIGetAccount(aID, sID, username, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetCharacter(aID, sID, characterID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetAccountCharacters(aID, sID, accountAID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetClass(aID, sID, ID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetClasses(aID, sID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetSession(aID, sID, sessionID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetStories(aID, sID, sessionID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetStory(aID, sID, storyID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APISearchStories(aID, sID, storyText, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetSkillType(aID, sID, skillTypeID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetRace(aID, sID, raceID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetRaces(aID, sID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetSize(aID, sID, sizeID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetSession(aID, sID, sessionID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetCharacterSkill(aID, sID, characterID, callback){
	APIAuthorise(aID, sID, function(authorised){
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

function APIGetRunthrough(aID, sID, runthroughID, callback){
	APIAuthorise(aID, sID, function(authorised){
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
function APIGetAdminAccount(aID, sID, sID, sessionID, callback){
	APIAuthorise(aID, sID, function(authorised){
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
