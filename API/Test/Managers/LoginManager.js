"Use Strict";

var assert = require('assert');
var manager = require('../../Managers/LoginManager.js');

var blank = undefined;

describe('Login Manager -', function(){

	describe('Public functions:', function(){
		it('Login != undefined', function(){
			assert.notEqual(manager.Login, undefined);
		})
		it('Authorise != undefined', function(){
			assert.notEqual(manager.Authorise, undefined);
		})
	})

	describe('Login:', function(){
		var valid = 'Test1';
		var validPwd = 'password';
		var invalid = 'invalid';
		var invalidPwd = 'notPassword';

		it('Valid:', function(done){
			manager.Login(valid, validPwd, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.AccountID, 1);
				assert.equal(result.Username, valid);
				assert.equal(result.AID, '1');
				assert.notEqual(result.SID, undefined);
				done();
			});
		})

		it('Invalid "Username":', function(done){
			manager.Login(invalid, validPwd, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Invalid "Password":', function(done){
			manager.Login(valid, invalidPwd, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Missing "Username":', function(done){
			manager.Login(blank, validPwd, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Missing "Password":', function(done){
			manager.Login(valid, blank, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Missing "Username", "Password":', function(done){
			manager.Login(blank, blank, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})
	})

	describe('Authorise:', function(){
		var validUsername = 'Test1';
		var validPwd = 'password';
		var invalid = 'invalid';
		var blank = undefined;

		it('Valid:', function(done){
			manager.Login(validUsername, validPwd, function(loginResult){
				manager.Authorise(loginResult.AID, loginResult.SID, function(result){
					assert.equal(result.Success, true);
					assert.equal(result.SID, loginResult.SID);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.notEqual(result.SID, undefined);
					done();
				});
			});
		})

		it('Invalid "AID":', function(done){
			manager.Login(validUsername, validPwd, function(loginResult){
				manager.Authorise(invalid, loginResult.SID, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			});
		})

		it('Missing "AID":', function(done){
			manager.Login(validUsername, validPwd, function(loginResult){
				manager.Authorise(blank, loginResult.SID, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			});
		})

		it('Missing "SID":', function(done){
			manager.Login(validUsername, validPwd, function(loginResult){
				manager.Authorise(loginResult.AID, blank, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			});
		})

		it('Missing "AID", "SID":', function(done){
			manager.Login(validUsername, validPwd, function(loginResult){
				manager.Authorise(blank, blank, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			});
		})
	})
})