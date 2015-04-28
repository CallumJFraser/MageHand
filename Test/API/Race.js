var assert = require('assert');
var dndAPI = require('../../MageHandAPI.js');

var validUsername = 'Test1';
var validPassword = 'password';
//	TODO:	Tests
module.exports = {
	Test: function(){
	
		describe('Public functions:', function(){
			it('GetRace != undefined', function(done){
				assert.notEqual(dndAPI.GetRace, undefined);
				done();
			});
		})

		describe('GetRace:', function(){
			it('Valid:', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetRace(loginResponse.AID, loginResponse.SID, 1, function(result){
						assert.equal(result.Auth.Success, true);
						assert.notEqual(result.Result, undefined);
						assert.notEqual(result.Result.ID, undefined);
						assert.notEqual(result.Result.Name, undefined);
						assert.notEqual(result.Result.Description, undefined);
						assert.notEqual(result.Result.Size, undefined);
						assert.notEqual(result.Result.Version, undefined);
						assert.notEqual(result.Result.Speed, undefined);
						done();
					});
				});
			})

			it('Invalid call (missing param: "RaceID"):', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetRace(loginResponse.AID, loginResponse.SID, undefined, function(result){
						assert.notEqual(result.Result, undefined);
						assert.equal(result.Result.Success, false);
						assert.notEqual(result.Result.Reason, undefined);
						done();
					});
				});
			})
		})

		describe('GetRaces:', function(){

			it('Valid:', function(done){
				dndAPI.Login(validUsername, validPassword, function(loginResponse){
					dndAPI.GetRaces(loginResponse.AID, loginResponse.SID, function(result){
						assert.equal(result.Auth.Success, true);
						assert.notEqual(result.Result, undefined);
						var first = result.Result[0];
						assert.notEqual(first, undefined);
						assert.notEqual(first.ID, undefined);
						assert.notEqual(first.Name, undefined);
						assert.notEqual(first.Description, undefined);
						assert.notEqual(first.Speed, undefined);
						assert.notEqual(first.Size, undefined);
						assert.notEqual(first.Version, undefined);
						done();
					});
				})
			})
		})
	}
};