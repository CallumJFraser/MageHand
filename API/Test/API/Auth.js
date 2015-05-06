"Use Strict";

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
			it('Valid:', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					assert.equal(loginResponse.Success, true);
					assert.notEqual(loginResponse.AccountID, undefined);
					assert.notEqual(loginResponse.AID, undefined);
					assert.notEqual(loginResponse.Username, undefined);
					assert.equal(loginResponse.Reason, undefined);
					assert.notEqual(loginResponse.SID, undefined);
					done();
				});
			});

			it('Missing "Username":', function(done){
				dndAPI.Login(validUsername, invalidPassword, function(loginResponse){
					assert.equal(loginResponse.Success, false);
					assert.equal(loginResponse.AccountID, undefined);
					assert.equal(loginResponse.AID, undefined);
					assert.equal(loginResponse.Username, undefined);
					assert.notEqual(loginResponse.Reason, undefined);
					assert.equal(loginResponse.SID, undefined);
					done();
				});
			});

			it('Missing "Password":', function(done){
				dndAPI.Login(invalidUsername, validPassword, function(loginResponse){
					assert.equal(loginResponse.Success, false);
					assert.equal(loginResponse.AccountID, undefined);
					assert.equal(loginResponse.AID, undefined);
					assert.equal(loginResponse.Username, undefined);
					assert.notEqual(loginResponse.Reason, undefined);
					assert.equal(loginResponse.SID, undefined);
					assert.notEqual(loginResponse.Reason, undefined);
					done();
				});
			});
		})
	
		describe('Authorise:', function(){

			it('Valid:', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.Authorise(loginResponse.AID, loginResponse.SID, function(result){
						assert.equal(result.Success, true);
						assert.notEqual(result.SID, undefined);
						done();
					});
				});
			});

			it('Missing "AID":', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.Authorise('FAIL', loginResponse.SID, function(result){
						assert.equal(result.Success, false);
						assert.equal(result.SID, undefined);
						done();
					});
				});
			});

			it('Missing "SID":', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.Authorise(loginResponse.AID, 'FAIL', function(result){
						assert.equal(result.Success, false);
						assert.equal(result.SID, undefined);
						done();
					});
				});
			});
		})
	}
};