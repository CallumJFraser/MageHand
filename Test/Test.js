var database = require('../database');
var accountManager = require('./Managers/AccountManager');
var characterManager = require('./Managers/CharacterManager');
var classManager = require('./Managers/ClassManager');
var loginManager = require('./Managers/LoginManager');
var storyManager = require('./Managers/StoryManager');

var apiAuth = require('./API/Auth');
var apiAccount = require('./API/Account');
var apiCharacter = require('./API/Character');
var apiClass = require('./API/Class');
var apiRace = require('./API/Race');
var apiSize = require('./API/Size');
var apiSession = require('./API/Session');
var apiSkills = require('./API/Skills');
/*
var api = require('./API/');
var api = require('./API/');
var api = require('./API/');
*/
describe('Database:', function(){
	it('Restart', function(){
		database.Restart(undefined);
	})
})

// Test the managers
describe('Account Manager -', function(){
	accountManager.Test();	// Done
});

describe('Character Manager -', function(){
	characterManager.Test();	//	Done, may need some tests for the account version (ensure there isnt multiple records)?
});

describe('Class Manager -', function(){
	classManager.Test();	//	Done
});

describe('Login Manager -', function(){
	loginManager.Test();	//	Done
});

describe('Story Manager -', function(){
	storyManager.Test();	//	Done
});

describe('API Auth Manager -', function(){
	apiAuth.Test();	//	Done
});

describe('API Account -', function(){
	apiAccount.Test();	//	Done
});

describe('API Character -', function(){
	apiCharacter.Test();	//	Done
});
/*	TODO:
describe('API Class -', function(){
	apiClass.Test();	//	
});

describe('API Race -', function(){
	apiRace.Test();	//	
});

describe('API Size -', function(){
	apiSize.Test();	//	
});

describe('API Session -', function(){
	apiSession.Test();	//	
});

describe('API Skills -', function(){
	apiSkills.Test();	//	
});
*/