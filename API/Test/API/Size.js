"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI.js');

var validUsername = 'Test1';
var validPassword = 'password';

describe('Public functions:', function(){
	if('GetSize != undefined', function(done){
		assert.notEqual(dndAPI.GetSize, undefined);
		done();
	});
})

describe('GetSize:', function(){

	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetSize(loginResponse.AID, loginResponse.SID, 1, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Name, undefined);
				done();
			});
		});
	})

	it('Invalid call (missing param: "SizeID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetSize(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})
})