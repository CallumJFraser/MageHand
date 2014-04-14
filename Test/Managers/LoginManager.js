var assert = require('assert');
var manager = require('../../LoginManager.js');

var validUsername = 'Test1';
var validPwd = 'password';

function test(){
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
			var invalidPwd = 'password';
			var blank = undefined;
			var blankPwd = undefined;
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.Login(valid, validPwd, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = true', function(done){
					manager.Login(valid, validPwd, function(result){
						assert.equal(result.Success, true);
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('Result = Login', function(done){
					manager.Login(valid, validPwd, function(result){
						assert.equal(result.AccountID, 1);
						assert.equal(result.Username, validUsername);
						assert.equal(result.AID, '1');
						assert.notEqual(result.SID, undefined);
						done();
					});
				})
			})
			describe('Invalid:', function(){
				it('Result != undefined', function(done){
					manager.Login(invalid, invalidPwd, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Login(invalid, invalidPwd, function(result){
						assert.equal(result.Success, false);
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result = Fail', function(done){
					manager.Login(invalid, invalidPwd, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
			})
			describe('Missing "Username":', function(){
				it('Result != undefined', function(done){
					manager.Login(undefined, validPwd, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Login(undefined, validPwd, function(result){
						assert.equal(result.Success, false);
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result = Fail', function(done){
					manager.Login(undefined, validPwd, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
			})
			describe('Missing "Password":', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, undefined, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Login(validUsername, undefined, function(result){
						assert.equal(result.Success, false);
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result = Fail', function(done){
					manager.Login(validUsername, undefined, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
			})
			describe('Missing "Username", "Password":', function(){
				it('Result != undefined', function(done){
					manager.Login(undefined, undefined, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Login(undefined, undefined, function(result){
						assert.equal(result.Success, false);
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result = Fail', function(done){
					manager.Login(undefined, undefined, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
			})
		})
		
		describe('Authorise:', function(){
			var validUsername = 'Test1';
			var validPwd = 'password';
			var invalid = 'invalid';
			var blank = undefined;
			
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, loginResult.SID, function(result){
							assert.equal(result.Success, true);
							assert.equal(result.SID, loginResult.SID);
							done();
						});
					});
				})
				it('Success = true', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, loginResult.SID, function(result){
							assert.equal(result.Success, true);
							assert.equal(result.Reason, undefined);
							done();
						});
					});
				})
				it('Result = Authorisation', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, loginResult.SID, function(result){
							assert.notEqual(result.SID, undefined);
							done();
						});
					});
				})
			})
			describe('Invalid "AID":', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(invalid, loginResult.SID, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					});
				})
				it('Success = false', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(invalid, loginResult.SID, function(result){
							assert.equal(result.Success, false);
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
				it('Result = Fail', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(invalid, loginResult.SID, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
			})
			describe('Invalid "SID":', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, invalid, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					});
				})
				it('Success = false', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, invalid, function(result){
							assert.equal(result.Success, false);
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
				it('Result = Fail', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, invalid, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
			})
			describe('Missing "AID":', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(blank, loginResult.SID, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					});
				})
				it('Success = false', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(blank, loginResult.SID, function(result){
							assert.equal(result.Success, false);
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
				it('Result = Fail', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(blank, loginResult.SID, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
			})
			describe('Missing "SID":', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, blank, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					});
				})
				it('Success = false', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, blank, function(result){
							assert.equal(result.Success, false);
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
				it('Result = Fail', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(loginResult.AID, blank, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
			})
			describe('Missing "AID", "SID":', function(){
				it('Result != undefined', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(blank, blank, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					});
				})
				it('Success = false', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(blank, blank, function(result){
							assert.equal(result.Success, false);
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
				it('Result = Fail', function(done){
					manager.Login(validUsername, validPwd, function(loginResult){
						manager.Authorise(blank, blank, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					});
				})
			})
		})
	})
};

module.exports = {
	Test: function(){
		test();
	}
};