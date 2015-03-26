var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';
var invalidUsername = 'invalid';
var invalidPassword = 'clearlywrong';

module.exports = {
	Test: function(){
		describe('Public functions:', function(){
			if('Login != undefined', function(done){
				assert.notEqual(dndAPI.Login, undefined);
				done();
			});
			if('Authorise != undefined', function(done){
				assert.notEqual(dndAPI.Authorise, undefined);
				done();
			});
		})
	
		describe('Login:', function(){
			describe('Valid:', function(){
				it('Should return Success: true', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						assert.equal(loginResponse.Success, true);
						done();
					});
				});
				it('Should return AccountID: 1', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						assert.equal(loginResponse.AccountID, 1);
						done();
					});
				});
				it('Valid', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						assert.equal(loginResponse.AID, 1);
						assert.equal(loginResponse.Username, validUsername);
						assert.equal(loginResponse.Reason, undefined);
						assert.notEqual(loginResponse.SID, undefined);
						done();
					});
				});
			})

			describe('Missing "Username":', function(){
				it('Should return Success: false', function(done){
					dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
						assert.equal(loginResponse.Success, false);
						done();
					});
				});
				it('Should return AccountID: undefined', function(done){
					dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
						assert.equal(loginResponse.AccountID, undefined);
						done();
					});
				});
				it('Valid', function(done){
					dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
						assert.equal(loginResponse.AID, undefined);
						assert.equal(loginResponse.Username, undefined);
						assert.notEqual(loginResponse.Reason, undefined);
						assert.equal(loginResponse.SID, undefined);
						done();
					});
				});
			})
			describe('Missing "Password":', function(){
				it('Should return Success: false', function(done){
					dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
						assert.equal(loginResponse.Success, false);
						done();
					});
				});
				it('Should return AccountID: undefined', function(done){
					dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
						assert.equal(loginResponse.AccountID, undefined);
						done();
					});
				});
				it('Valid', function(done){
					dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
						assert.equal(loginResponse.AID, undefined);
						assert.equal(loginResponse.Username, undefined);
						assert.notEqual(loginResponse.Reason, undefined);
						assert.equal(loginResponse.SID, undefined);
						assert.equal(loginResponse.Success, false);
						assert.notEqual(loginResponse.Reason, undefined);
						done();
					});
				});
			})
		})
	
		describe('Authorise:', function(){

			describe('Valid:', function(){
				it('Should return Success: true', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.Authorise(loginResponse.AID, loginResponse.SID, function(result){
							assert.equal(result.Success, true);
							done();
						});
					});
				});
				it('Should return a SID', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.Authorise(loginResponse.AID, loginResponse.SID, function(result){
							assert.equal(result.SID, loginResponse.SID);
							done();
						});
					});
				});
			})

			describe('Missing "AID":', function(){
				it('Should return Success: false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.Authorise('FAIL', loginResponse.SID, function(result){
							assert.equal(result.Success, false);
							done();
						});
					});
				});
				it('Should not return a SID', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.Authorise('FAIL', loginResponse.SID, function(result){
							assert.notEqual(result.SID, loginResponse.SID);
							done();
						});
					});
				});
			})

			describe('Missing "SID":', function(){
				it('Should return Login: false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.Authorise(loginResponse.AID, 'FAIL', function(result){
							assert.equal(result.Success, false);
							done();
						});
					});
				});
				it('Should not return a SID', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.Authorise(loginResponse.AID, 'FAIL', function(result){
							assert.notEqual(result.SID, loginResponse.SID);
							done();
						});
					});
				});
			})
		})
	}
};