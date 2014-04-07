var assert = require('assert');
/*
	
*/
var dndAPI = require('../DnDAPI.js');
var validUsername = 'Test1';
var validPassword = 'password';
var invalidUsername = 'invalid';
var invalidPassword = 'clearlywrong';

describe('Login -', function(){
	beforeEach(function(done){
		dndAPI.Start(function(){
			done();
		});
	})

	describe('Valid call:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.Success, true);
				done();
			});
		})
		it('Should return AccountID:1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.AccountID, 1);
				done();
			});
		})
		it('Should return AID:1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.AID, 1);
				done();
			});
		})
		it('Should return Username:"CallumJFraser"', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.Username, validUsername);
				done();
			});
		})
			//	5
		it('Should return Reason:undefined', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.Reason, undefined);
				done();
			});
		})
		it('Should return SessionID', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				assert.notEqual(loginResponse.SessionID, undefined);
				done();
			});
		})
	})

	describe('Invalid call (invalid param: "Username")', function(){
		it('Should return Success:false', function(done){
			dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
				assert.equal(loginResponse.Success, false);
				done();
			});
		})
		it('Should return AccountID:undefined', function(done){
			dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
				assert.equal(loginResponse.AccountID, undefined);
				done();
			});
		})
		it('Should return AID:undefined', function(done){
			dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
				assert.equal(loginResponse.AID, undefined);
				done();
			});
		})
		it('Should return Username:undefined', function(done){
			dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
				assert.equal(loginResponse.Username, undefined);
				done();
			});
		})
		it('Should return a Reason', function(done){
			dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
				assert.notEqual(loginResponse.Reason, undefined);
				done();
			});
		})
		it('Should return SessionID:undefined', function(done){
			dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
				assert.equal(loginResponse.SessionID, undefined);
				done();
			});
		})
	})

	describe('Invalid call (invalid param: "Password")', function(){
		it('Should return Success:false', function(done){
			dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.Success, false);
				done();
			});
		})
		it('Should return AccountID:undefined', function(done){
			dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.AccountID, undefined);
				done();
			});
		})
		it('Should return AID:undefined', function(done){
			dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.AID, undefined);
				done();
			});
		})
		it('Should return Username:undefined', function(done){
			dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.Username, undefined);
				done();
			});
		})
		it('Should return a Reason', function(done){
			dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
				assert.notEqual(loginResponse.Reason, undefined);
				done();
			});
		})
		it('Should return SessionID:undefined', function(done){
			dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
				assert.equal(loginResponse.SessionID, undefined);
				done();
			});
		})
	})

	describe('Invalid call (missing param: "Username", "Password"):', function(){
		it('Should return Success:false', function(done){
			dndAPI.Login(undefined, undefined, function(loginResponse){
				assert.equal(loginResponse.Success, false);
				done();
			});
		})
		it('Should return a Reason', function(done){
			dndAPI.Login(undefined, undefined, function(loginResponse){
				assert.notEqual(loginResponse.Reason, undefined);
				done();
			});
		})
	})
})
	
describe('Authorise -', function(){
	beforeEach(function(done){
		dndAPI.Start(function(){
			done();
		});
	})

	describe('Valid call:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.Authorise(loginResponse.AID, loginResponse.SessionID, function(result){
					assert.equal(result.Success, true);
					done();
				});
			});
		})
		it('Should return a SessionID', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.Authorise(loginResponse.AID, loginResponse.SessionID, function(result){
					assert.equal(result.SessionID, loginResponse.SessionID);
					done();
				});
			});
		})
	})

	describe('Invalid call (missing param: "AID"):', function(){
		it('Should return Success:false', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.Authorise('FAIL', loginResponse.SessionID, function(result){
					assert.equal(result.Success, false);
					done();
				});
			});
		})
		it('Should not return a SessionID', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.Authorise('FAIL', loginResponse.SessionID, function(result){
					assert.notEqual(result.SessionID, loginResponse.SessionID);
					done();
				});
			});
		})
	})

	describe('Invalid call (missing param: "SessionID"):', function(){
		it('Should return Login:false', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.Authorise(loginResponse.AID, 'FAIL', function(result){
					assert.equal(result.Success, false);
					done();
				});
			});
		})
			//	20
		it('Should not return a SessionID', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.Authorise(loginResponse.AID, 'FAIL', function(result){
					assert.notEqual(result.SessionID, loginResponse.SessionID);
					done();
				});
			});
		})
	})
})