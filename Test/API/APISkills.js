var assert = require('assert');
/*
	

var dndAPI = require('../MageHandAPI.js');
var validUsername = 'Test1';
var validPassword = 'password';

describe('GetSkillType -', function(){
	beforeEach(function(done){
		dndAPI.Start(function(){
			done();
		});
	})
	
	describe('Valid call:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, 1, function(result){
					assert.equal(result.Auth.Success, true);
					done();
				});
			});
		})
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, 1, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Result.ID: 1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, 1, function(result){
					assert.equal(result.Result.ID, 1);
					assert.notEqual(result.Result.Name, undefined);
					done();
				});
			});
		})
	})

	describe('Invalid call (missing param: "RaceID"):', function(){
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Success:false', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.equal(result.Result.Success, false);
					done();
				});
			});
		})
		it('Should return a result with error information', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.equal(result.Result.Success, false);
					assert.notEqual(result.Result.Reason, undefined);
					done();
				});
			});
		})
	})
});

describe('ListCharacterAbilities -', function(){
	var validSearchFullTitle = 'Three little pigs';
	var validSearchPartialTitle = 'little pigs';
	var validSearchDescription = 'blown';
	
	beforeEach(function(done){
		dndAPI.Start(function(){
			done();
		});
	})
	
	describe('Valid search by full Title:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchFullTitle, function(result){
					assert.equal(result.Auth.Success, true);
					done();
				});
			});
		})
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchFullTitle, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Result.ID: 1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchFullTitle, function(result){
					assert.equal(result.Result.ID, 1);
					assert.equal(result.Result.Title, 'Three little pigs');
					assert.equal(result.Result.Description, 'blown by wolf');
					assert.equal(result.Result.Parent, undefined);
					done();
				});
			});
		})
	})
	
	describe('Valid search by partial Title:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchPartialTitle, function(result){
					assert.equal(result.Auth.Success, true);
					done();
				});
			});
		})
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchPartialTitle, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Result.ID: 1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchPartialTitle, function(result){
					assert.equal(result.Result.ID, 1);
					assert.equal(result.Result.Title, 'Three little pigs');
					assert.equal(result.Result.Description, 'blown by wolf');
					assert.equal(result.Result.Parent, undefined);
					done();
				});
			});
		})
	})
	
	describe('Valid search by Description:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchDescription, function(result){
					assert.equal(result.Auth.Success, true);
					done();
				});
			});
		})
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchDescription, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Result.ID: 1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, validSearchDescription, function(result){
					assert.equal(result.Result.ID, 1);
					assert.equal(result.Result.Title, 'Three little pigs');
					assert.equal(result.Result.Description, 'blown by wolf');
					assert.equal(result.Result.Parent, undefined);
					done();
				});
			});
		})
	})
	
	describe('Valid call (missing param: "Search"):', function(){
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return a result of more than 1:', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.ListCharacterAbilities(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.notEqual(result.Result.length, 0);
					assert.notEqual(result.Result.length, 1);
					done();
				});
			});
		})
	})
});
*/