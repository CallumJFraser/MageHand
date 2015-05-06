"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI.js');

var validUsername = 'Test1';
var validPassword = 'password';
//	TODO:	Tests
module.exports = {
	Test: function(){
	
		describe('Public functions:', function(){
			if('GetSession != undefined', function(done){
				assert.notEqual(dndAPI.GetSession, undefined);
				done();
			});
		})
	
		describe('GetSession:', function(){
		
			it('Valid:', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetSession(loginResponse.AID, loginResponse.SID, 1, function(result){
						assert.equal(result.Auth.Success, true);
						assert.notEqual(result.Result, undefined);
						assert.notEqual(result.Result.ID, undefined);
						assert.notEqual(result.Result.Start, undefined);
						//	Optional param set to null in db at the moment.
//							assert.notEqual(result.Result.End, undefined);
						assert.notEqual(result.Result.RunthroughID, undefined);
						done();
					});
				});
			})

			it('Invalid call (missing param: "RunthroughID"):', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetSession(loginResponse.AID, loginResponse.SID, undefined, function(result){
						assert.notEqual(result.Result, undefined);
						assert.equal(result.Result.Success, false);
						assert.notEqual(result.Result.Reason, undefined);
						done();
					});
				});
			})
		})
	}
};