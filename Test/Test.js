var database = require('../database.js');
var accountManager = require('./Managers/AccountManager.js');
var characterManager = require('./Managers/CharacterManager.js');
var classManager = require('./Managers/ClassManager.js');
var loginManager = require('./Managers/LoginManager.js');
var storyManager = require('./Managers/StoryManager.js');

describe('Database:', function(){
	it('Restart', function(){
		database.Restart(undefined);
	})
})

// Test the managers
describe('Account Manager -', function(){
	accountManager.Test();
});

describe('Character Manager -', function(){
	characterManager.Test();
});

describe('Class Manager -', function(){
	classManager.Test();
});

describe('Login Manager -', function(){
	loginManager.Test();
});

describe('Story Manager -', function(){
	storyManager.Test();
});