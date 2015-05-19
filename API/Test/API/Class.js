"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';

describe('Public functions:', function(){
	if('GetClass != undefined', function(done){
		assert.notEqual(dndAPI.GetClass, undefined);
		done();
	});
	if('GetClasses != undefined', function(done){
		assert.notEqual(dndAPI.GetClasses, undefined);
		done();
	});
})

describe('GetClass:', function(){
	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetClass(loginResponse.AID, loginResponse.SID, 1, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Name, undefined);
				assert.notEqual(result.Result.Version, undefined);
				assert.notEqual(result.Result.Description, undefined);
				done();
			});
		});
	});

	it('Invalid call (missing param: "ClassID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetClass(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	});
})

describe('GetClasses:', function(){
	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetClasses(loginResponse.AID, loginResponse.SID, function(result){
				assert.equal(result.Auth.Success, true);
				assert.notEqual(result.Result, undefined);
				var first = result.Result[0];
				assert.notEqual(first.ID, undefined);
				assert.notEqual(first.Name, undefined);
				assert.notEqual(first.Version, undefined);
				assert.notEqual(first.Description, undefined);
				done();
			});
		});
	});
})