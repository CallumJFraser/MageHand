"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI.js');

var validUsername = 'Test1';
var validPassword = 'password';

describe('Public functions:', function(){
	if('GetRunthrough != undefined', function(done){
		assert.notEqual(dndAPI.GetRunthrough, undefined);
		done();
	});
})

describe.skip('GetRunthrough:', function(){
	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, 1, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Story, undefined);
				done();
			});
		});
	})

	it('Invalid call (missing param: "RunthroughID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})
})