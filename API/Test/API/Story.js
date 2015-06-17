"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI.js');

var validUsername = 'Test1';
var validPassword = 'password';

describe('Public functions:', function(){
	if('GetStory != undefined', function(done){
		assert.notEqual(dndAPI.GetStory, undefined);
		done();
	});
	if('ListStory != undefined', function(done){
		assert.notEqual(dndAPI.ListStory, undefined);
		done();
	});
})

describe.skip('GetStory:', function(){
	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetStory(loginResponse.AID, loginResponse.SID, 1, function(result){
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Title, undefined);
				assert.notEqual(result.Result.Description, undefined);
				done();
			});
		});
	})

	it('Invalid call (missing param: "RaceID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetStory(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})
})

describe.skip('SearchStories:', function(){
	var validSearchFullTitle = 'Three little pigs';
	var validSearchPartialTitle = 'little pigs';
	var validSearchDescription = 'wolf';

	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.SearchStories(loginResponse.AID, loginResponse.SID, validSearchFullTitle, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Title, undefined);
				assert.notEqual(result.Result.Description, undefined);
				done();
			});
		});
	})

	it('Valid partial Title:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.SearchStories(loginResponse.AID, loginResponse.SID, validSearchPartialTitle, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Title, undefined);
				assert.notEqual(result.Result.Description, undefined);
				done();
			});
		});
	})

	it('Valid Description:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.SearchStories(loginResponse.AID, loginResponse.SID, validSearchDescription, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Title, undefined);
				assert.notEqual(result.Result.Description, undefined);
				done();
			});
		});
	})

	it('Valid call (missing param: "Search"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.SearchStories(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.length, 0);
				assert.notEqual(result.Result.length, 1);
				done();
			});
		});
	})
})