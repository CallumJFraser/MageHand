var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';
		
module.exports = {
	Test: function(){

		describe('Public functions:', function(){
			if('GetCharacter != undefined', function(done){
				assert.notEqual(dndAPI.GetCharacter, undefined);
				done();
			});
			if('GetAccountCharacters != undefined', function(done){
				assert.notEqual(dndAPI.GetAccountCharacters, undefined);
				done();
			});
		})

		describe('GetCharacter:', function(){

			describe('Valid call:', function(){
				it('Should return a Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Should not return Success:false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.notEqual(result.Result.Success, false);
							done();
						});
					});
				});
				it('Should return a valid Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.equal(resultObject.ID, 1);
							assert.equal(resultObject.Name, 'Test');
							assert.notEqual(resultObject.ClassID, undefined);
							assert.equal(resultObject.Experiance, 4500);
							assert.notEqual(resultObject.RaceID, undefined);
							assert.equal(resultObject.Age, 100);
							assert.equal(resultObject.Height, 100);
							assert.equal(resultObject.Strength, 10);
							assert.equal(resultObject.Dexterity, 14);
							assert.equal(resultObject.Constitution, 10);
							assert.equal(resultObject.Inteligence, 10);
							assert.equal(resultObject.Wisdom, 10);
							assert.equal(resultObject.Charisma, 19);
							assert.equal(resultObject.HP, 20);
							assert.equal(resultObject.AC, 18);
							assert.equal(resultObject.Fortitude, 3);
							assert.equal(resultObject.Reflex, 3);
							assert.equal(resultObject.Will, 3);
							assert.equal(resultObject.Grapple, 2);
							assert.equal(resultObject.BaseAttack, 3);
							assert.equal(resultObject.SpellResistance, 10);
							assert.equal(resultObject.TouchAC, 18);
							assert.equal(resultObject.FlatFootedAC, 15);
							done();
						});
					});
				});
			})

			describe('Invalid call (missing param: "CharacterID"):', function(){
				it('Should return a Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Should return a valid Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.equal(result.Result.Success, false);
							assert.notEqual(result.Result.Reason, undefined);
							done();
						});
					});
				});
			})
		})

		describe('GetAccountCharacters:', function(){

			describe('Valid:', function(){
				it('Should return a Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Should return a Result array', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.equal(result.Result.length, 2);
							done();
						});
					});
				});
				it('Should return valid Results', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result[0];
							assert.equal(resultObject.ID, 1);
							assert.equal(resultObject.Name, 'Test');
							assert.notEqual(resultObject.ClassID, undefined);
							assert.equal(resultObject.Experiance, 4500);
							assert.notEqual(resultObject.RaceID, undefined);
							assert.equal(resultObject.Age, 100);
							assert.equal(resultObject.Height, 100);
							assert.equal(resultObject.Strength, 10);
							assert.equal(resultObject.Dexterity, 14);
							assert.equal(resultObject.Constitution, 10);
							assert.equal(resultObject.Inteligence, 10);
							assert.equal(resultObject.Wisdom, 10);
							assert.equal(resultObject.Charisma, 19);
							assert.equal(resultObject.HP, 20);
							assert.equal(resultObject.AC, 18);
							assert.equal(resultObject.Fortitude, 3);
							assert.equal(resultObject.Reflex, 3);
							assert.equal(resultObject.Will, 3);
							assert.equal(resultObject.Grapple, 2);
							assert.equal(resultObject.BaseAttack, 3);
							assert.equal(resultObject.SpellResistance, 10);
							assert.equal(resultObject.TouchAC, 18);
							assert.equal(resultObject.FlatFootedAC, 15);
							done();
						});
					});
				});
			})

			describe('Missing "AccountAID":', function(){
				it('Should return Success:false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.equal(result.Result.Success, false);
							done();
						});
					});
				});
				it('Should return a Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, undefined, function(result){
							assert.notEqual(result.Result, undefined);
							done();
						});
					});
				});
				it('Should return a valid Result', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, undefined, function(result){
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