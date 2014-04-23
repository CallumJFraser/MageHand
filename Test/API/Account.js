var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';

module.exports = {
	Test: function(){
		describe('Public functions:', function(){
			if('GetAccount != undefined', function(done){
				assert.notEqual(dndAPI.GetAccount, undefined);
				done();
			});
		})

		describe('GetAccount:', function(){
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Success = true', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
							assert.equal(result.Auth.Success, true);
							done();
						});
					});
				});
				it('Result = Account', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
							assert.equal(result.Result.ID, 1);
							assert.equal(result.Result.AID, 1);
							assert.equal(result.Result.Username, 'Test1');
							done();
						});
					});
				});
			})
			describe('Missing "Username":', function(){
				it('Result != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Success = false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.equal(result.Result.Success, false);
							done();
						});
					});
				});
				it('Reason != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.notEqual(result.Result.Reason, undefined);
							done();
						});
					});
				});
				it('Result != Account', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
							assert.equal(result.Result.ID, 1);
							assert.equal(result.Result.AID, 1);
							assert.equal(result.Result.Username, 'Test1');
							done();
						});
					});
				});
			})
		})
	}
};