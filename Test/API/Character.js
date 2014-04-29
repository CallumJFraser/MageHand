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
				it('Success = false', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							assert.notEqual(result.Result.Success, false);
							done();
						});
					});
				});
				it('ID != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.ID, undefined);
							done();
						});
					});
				});
				it('Name != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Name, undefined);
							done();
						});
					});
				});
				it('Class != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Class, undefined);
							done();
						});
					});
				});
				it('Experiance != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Experiance, undefined);
							done();
						});
					});
				});
				it('Race != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Race, undefined);
							done();
						});
					});
				});
				it('Age != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Age, undefined);
							done();
						});
					});
				});
				it('Height != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Height, undefined);
							done();
						});
					});
				});
				it('Strength != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Strength, undefined);
							done();
						});
					});
				});
				it('Dexterity != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Dexterity, undefined);
							done();
						});
					});
				});
				it('Constitution != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Constitution, undefined);
							done();
						});
					});
				});
				it('Inteligence != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Inteligence, undefined);
							done();
						});
					});
				});
				it('Wisdom != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Wisdom, undefined);
							done();
						});
					});
				});
				it('Charisma != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Charisma, undefined);
							done();
						});
					});
				});
				it('HP != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.HP, undefined);
							done();
						});
					});
				});
				it('AC != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.AC, undefined);
							done();
						});
					});
				});
				it('Fortitude != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Fortitude, undefined);
							done();
						});
					});
				});
				it('Reflex != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Reflex, undefined);
							done();
						});
					});
				});
				it('Will != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Will, undefined);
							done();
						});
					});
				});
				it('Grapple != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.Grapple, undefined);
							done();
						});
					});
				});
				it('BaseAttack != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.BaseAttack, undefined);
							done();
						});
					});
				});
				it('SpellResistance != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.SpellResistance, undefined);
							done();
						});
					});
				});
				it('TouchAC != undefined', function(done){
					dndAPI.Login(validUsername, validPassword, function(loginResponse){
						dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
							var resultObject = result.Result;
							assert.notEqual(resultObject.TouchAC, undefined);
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
							assert.notEqual(resultObject.Class, undefined);
							assert.equal(resultObject.Experiance, 4500);
							assert.notEqual(resultObject.Race, undefined);
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