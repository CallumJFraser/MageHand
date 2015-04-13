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
			it('Valid:', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetClass(loginResponse.AID, loginResponse.SID, 1, function(result){
						assert.equal(result.Auth.Success, true);
						assert.notEqual(result.Result, undefined);
						assert.notEqual(result.Result.ID, undefined);
						assert.notEqual(result.Result.Name, undefined);
						assert.notEqual(result.Result.Version, undefined);
						assert.notEqual(result.Result.Description, undefined);
						done();
					});
				});
			});

			it('Invalid call (missing param: "ClassID"):', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetClass(loginResponse.AID, loginResponse.SID, undefined, function(result){
						assert.notEqual(result.Result, undefined);
						assert.equal(result.Result.Success, false);
						assert.equal(result.Result.Success, false);
						assert.notEqual(result.Result.Reason, undefined);
						done();
					});
				});
			});
		})
	}
};