var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';
//	TODO:	Tests
module.exports = {
	Test: function(){
	
		describe('Public functions:', function(){
			if('GetClass != undefined', function(done){
				assert.notEqual(dndAPI.GetClass, undefined);
				done();
			});
		})

		describe('GetClass:', function(){
			describe('Valid call:', function(){
				it('Should return Success:true', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetClass(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.equal(result.Auth.Success, true);
							done();
						});
					});
				});
				it('Should return a Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetClass(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Valid', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetClass(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.equal(result.Result.ID, 1);
							assert.equal(result.Result.Name, 'Bard');
							assert.notEqual(result.Result.VersionID, undefined);
							assert.equal(result.Result.Description, '');
							done();
						});
					});
				});
			})

			describe('Invalid call (missing param: "ClassID"):', function(){
				it('Should return a Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetClass(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Should return Success:false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetClass(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.equal(result.Result.Success, false);
							done();
						});
					});
				});
				it('Should return a result with error information', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetClass(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.equal(result.Result.Success, false);
							assert.notEqual(result.Result.Reason, undefined);
							done();
						});
					});
				});
			})
		})
	}
};