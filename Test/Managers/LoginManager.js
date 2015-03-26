var assert = require('assert');
var manager = require('../../Managers/LoginManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
	
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
			
				describe('Valid:', function(){
					it('Result != undefined', function(done){
						manager.Login(valid, validPwd, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					})
					it('Success == true', function(done){
						manager.Login(valid, validPwd, function(result){
							assert.equal(result.Success, true);
							done();
						});
					})
					it('Reason == undefined', function(done){
						manager.Login(valid, validPwd, function(result){
							assert.equal(result.Reason, undefined);
							done();
						});
					})
					it('Valid', function(done){
						manager.Login(valid, validPwd, function(result){
							assert.equal(result.AccountID, 1);
							assert.equal(result.Username, valid);
							assert.equal(result.AID, '1');
							assert.notEqual(result.SID, undefined);
							done();
						});
					})
				})
				
				describe('Invalid "Username":', function(){
					it('Result != undefined', function(done){
						manager.Login(invalid, validPwd, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					})
					it('Success == false', function(done){
						manager.Login(invalid, validPwd, function(result){
							assert.equal(result.Success, false);
							done();
						});
					})
					it('Reason != undefined', function(done){
						manager.Login(invalid, validPwd, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					})
					it('Valid', function(done){
						manager.Login(invalid, validPwd, function(result){
							assert.equal(result.AccountID, undefined);
							assert.equal(result.Username, undefined);
							assert.equal(result.AID, undefined);
							assert.equal(result.SID, undefined);
							done();
						});
					})
				})
				
				describe('Invalid "Password":', function(){
					it('Result != undefined', function(done){
						manager.Login(valid, invalidPwd, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					})
					it('Success == false', function(done){
						manager.Login(valid, invalidPwd, function(result){
							assert.equal(result.Success, false);
							done();
						});
					})
					it('Reason != undefined', function(done){
						manager.Login(valid, invalidPwd, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					})
					it('Valid', function(done){
						manager.Login(valid, invalidPwd, function(result){
							assert.equal(result.AccountID, undefined);
							assert.equal(result.Username, undefined);
							assert.equal(result.AID, undefined);
							assert.equal(result.SID, undefined);
							done();
						});
					})
				})
				
				describe('Missing "Username":', function(){
					it('Result != undefined', function(done){
						manager.Login(blank, validPwd, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					})
					it('Success == false', function(done){
						manager.Login(blank, validPwd, function(result){
							assert.equal(result.Success, false);
							done();
						});
					})
					it('Reason != undefined', function(done){
						manager.Login(blank, validPwd, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					})
					it('Valid', function(done){
						manager.Login(blank, validPwd, function(result){
							assert.equal(result.AccountID, undefined);
							assert.equal(result.Username, undefined);
							assert.equal(result.AID, undefined);
							assert.equal(result.SID, undefined);
							done();
						});
					})
				})
				
				describe('Missing "Password":', function(){
					it('Result != undefined', function(done){
						manager.Login(valid, blank, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					})
					it('Success == false', function(done){
						manager.Login(valid, blank, function(result){
							assert.equal(result.Success, false);
							done();
						});
					})
					it('Reason != undefined', function(done){
						manager.Login(valid, blank, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					})
					it('Valid', function(done){
						manager.Login(valid, blank, function(result){
							assert.equal(result.AccountID, undefined);
							assert.equal(result.Username, undefined);
							assert.equal(result.AID, undefined);
							assert.equal(result.SID, undefined);
							done();
						});
					})
				})
				
				describe('Missing "Username", "Password":', function(){
					it('Result != undefined', function(done){
						manager.Login(blank, blank, function(result){
							assert.notEqual(result, undefined);
							done();
						});
					})
					it('Success = false', function(done){
						manager.Login(blank, blank, function(result){
							assert.equal(result.Success, false);
							assert.notEqual(result.Reason, undefined);
							done();
						});
					})
					it('Reason != undefined', function(done){
						manager.Login(blank, blank, function(result){
							assert.notEqual(result.Reason, undefined);
							done();
						});
					})
					it('Valid', function(done){
						manager.Login(blank, blank, function(result){
							assert.equal(result.AccountID, undefined);
							assert.equal(result.Username, undefined);
							assert.equal(result.AID, undefined);
							assert.equal(result.SID, undefined);
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
					it('Success', function(done){
						manager.Login(validUsername, validPwd, function(loginResult){
							manager.Authorise(loginResult.AID, loginResult.SID, function(result){
								assert.equal(result.Success, true);
								assert.equal(result.Reason, undefined);
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
	}
};