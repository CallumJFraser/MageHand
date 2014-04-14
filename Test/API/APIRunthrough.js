var assert = require('assert');
/*
	

var dndAPI = require('../MageHandAPI.js');
var validUsername = 'Test1';
var validPassword = 'password';
	
describe('GetRunthrough -', function(){
	beforeEach(function(done){
		dndAPI.Start(function(){
			done();
		});
	})
	describe('Valid call:', function(){
		it('Should return Success:true', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, 1, function(result){
					assert.equal(result.Auth.Success, true);
					done();
				});
			});
		})
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, 1, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Result.ID: 1', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, 1, function(result){
					assert.equal(result.Result.ID, 1);
					assert.equal(result.Result.Name, 'Gnome');
					assert.equal(result.Result.Description, 'They are, like, waay small.');
					assert.equal(result.Result.SizeID, 1);
					assert.equal(result.Result.Speed, 20);
					done();
				});
			});
		})
	})

	describe('Invalid call (missing param: "RunthroughID"):', function(){
		it('Should return a Result', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.notEqual(result.Result, undefined);
					done();
				});
			});
		})
		it('Should return Success:false', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.equal(result.Result.Success, false);
					done();
				});
			});
		})
		it('Should return a result with error information', function(done){
			dndAPI.Login(validUsername, validPassword, function(loginResponse){
				dndAPI.GetRunthrough(loginResponse.AID, loginResponse.SID, undefined, function(result){
					assert.equal(result.Result.Success, false);
					assert.notEqual(result.Result.Reason, undefined);
					done();
				});
			});
		})
	})
})
*/