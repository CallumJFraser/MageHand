"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';

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

	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, 1, function(result){
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.Success, false);
				var resultObject = result.Result;
				assert.notEqual(resultObject.ID, undefined);
				assert.notEqual(resultObject.Name, undefined);
				assert.notEqual(resultObject.Class, undefined);
				assert.notEqual(resultObject.Experiance, undefined);
				assert.notEqual(resultObject.Race, undefined);
				assert.notEqual(resultObject.Age, undefined);
				assert.notEqual(resultObject.Height, undefined);
				assert.notEqual(resultObject.Strength, undefined);
				assert.notEqual(resultObject.Dexterity, undefined);
				assert.notEqual(resultObject.Constitution, undefined);
				assert.notEqual(resultObject.Inteligence, undefined);
				assert.notEqual(resultObject.Wisdom, undefined);
				assert.notEqual(resultObject.Charisma, undefined);
				assert.notEqual(resultObject.HP, undefined);
				assert.notEqual(resultObject.AC, undefined);
				assert.notEqual(resultObject.Fortitude, undefined);
				assert.notEqual(resultObject.Reflex, undefined);
				assert.notEqual(resultObject.Will, undefined);
				assert.notEqual(resultObject.Grapple, undefined);
				assert.notEqual(resultObject.BaseAttack, undefined);
				assert.notEqual(resultObject.SpellResistance, undefined);
				assert.notEqual(resultObject.TouchAC, undefined);
				done();
			});
		});
	});

	it('Invalid call (missing param: "CharacterID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetCharacter(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				var resultObject = result.Result;
				assert.equal(resultObject.ID, undefined);
				assert.equal(resultObject.Name, undefined);
				assert.equal(resultObject.Class, undefined);
				assert.equal(resultObject.Experiance, undefined);
				assert.equal(resultObject.Race, undefined);
				assert.equal(resultObject.Age, undefined);
				assert.equal(resultObject.Height, undefined);
				assert.equal(resultObject.Strength, undefined);
				assert.equal(resultObject.Dexterity, undefined);
				assert.equal(resultObject.Constitution, undefined);
				assert.equal(resultObject.Inteligence, undefined);
				assert.equal(resultObject.Wisdom, undefined);
				assert.equal(resultObject.Charisma, undefined);
				assert.equal(resultObject.HP, undefined);
				assert.equal(resultObject.AC, undefined);
				assert.equal(resultObject.Fortitude, undefined);
				assert.equal(resultObject.Reflex, undefined);
				assert.equal(resultObject.Will, undefined);
				assert.equal(resultObject.Grapple, undefined);
				assert.equal(resultObject.BaseAttack, undefined);
				assert.equal(resultObject.SpellResistance, undefined);
				assert.equal(resultObject.TouchAC, undefined);
				done();
			});
		});
	});
})

describe('GetAccountCharacters:', function(){

	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, 1, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.length, 2);
				var resultObject = result.Result[0];
				assert.notEqual(resultObject.ID, undefined);
				assert.notEqual(resultObject.Name, undefined);
				assert.notEqual(resultObject.Class, undefined);
				assert.notEqual(resultObject.Experiance, undefined);
				assert.notEqual(resultObject.Race, undefined);
				assert.notEqual(resultObject.Age, undefined);
				assert.notEqual(resultObject.Height, undefined);
				assert.notEqual(resultObject.Strength, undefined);
				assert.notEqual(resultObject.Dexterity, undefined);
				assert.notEqual(resultObject.Constitution, undefined);
				assert.notEqual(resultObject.Inteligence, undefined);
				assert.notEqual(resultObject.Wisdom, undefined);
				assert.notEqual(resultObject.Charisma, undefined);
				assert.notEqual(resultObject.HP, undefined);
				assert.notEqual(resultObject.AC, undefined);
				assert.notEqual(resultObject.Fortitude, undefined);
				assert.notEqual(resultObject.Reflex, undefined);
				assert.notEqual(resultObject.Will, undefined);
				assert.notEqual(resultObject.Grapple, undefined);
				assert.notEqual(resultObject.BaseAttack, undefined);
				assert.notEqual(resultObject.SpellResistance, undefined);
				assert.notEqual(resultObject.TouchAC, undefined);
				done();
			});
		});
	});

	it('Missing "AccountAID":', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetAccountCharacters(loginResponse.AID, loginResponse.SID, undefined, function(result){
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	});
})