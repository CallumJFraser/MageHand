var assert = require('assert');
/*
	
*/
var dndAPI = require('../MageHandAPI.js');
var validUsername = 'Test1';
var validPassword = 'password';
	
describe('GetAccount', function(){
	beforeEach(function(done){
		dndAPI.Start(function(){
			done();
		});
	})

	describe('Valid call to GetAccount:', function(){
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
					assert.equal(result.Auth.Success, true);
					done();
				});
			});
		})
		it('Should return Result.ID: 1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, 'Test1', function(result){
					assert.equal(result.Result.ID, 1);
					assert.equal(result.Result.AID, 1);
					assert.equal(result.Result.Username, 'Test1');
					done();
				});
			});
		})
	})

	describe('Invalid call to GetAccount (missing param: "Username"):', function(){
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Success:false', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.equal(result.Result.Success, false);
					done();
				});
			});
		})
		it('Should return a result with error information', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetAccount(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.equal(result.Result.Success, false);
					assert.notEqual(result.Result.Reason, undefined);
					done();
				});
			});
		})
	})
})