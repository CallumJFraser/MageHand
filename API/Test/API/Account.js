"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var invalidUsername = 'DoesntExist';
var validPassword = 'password';

describe('Public functions:', function(){
	if('GetAccount != undefined', function(done){
		assert.notEqual(dndAPI.GetAccount, undefined);
		done();
	});
})

describe('GetAccount:', function(){
	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.AID, undefined);
				assert.notEqual(result.Result.Username, undefined);
				done();
			});
		});
	});
	it('Missing "Username":', function(done){
		dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
			dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				assert.equal(result.Result.ID, undefined);
				assert.equal(result.Result.AID, undefined);
				assert.equal(result.Result.Username, undefined);
				done();
			});
		});
	});
})