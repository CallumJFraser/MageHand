"Use Strict";

var assert = require('assert');
var dndAPI = require('../../MageHandAPI.js');

var validUsername = 'Test1';
var validPassword = 'password';

describe('Public functions:', function(){
	it('GetSkillType != undefined', function(done){
		assert.notEqual(dndAPI.GetSkillType, undefined);
		done();
	});
	it('GetCharacterSkill != undefined', function(done){
		assert.notEqual(dndAPI.GetCharacterSkill, undefined);
		done();
	});
})


describe.skip('GetSkillType -', function(){
	var validSkillTypeID = 1;
	var invalidSkillTypeID = 0;
	var incorrectSkillTypeID = undefined;

	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, validSkillTypeID, function(result){
				assert.notEqual(result.Result, undefined);
				assert.notEqual(result.Result.ID, undefined);
				assert.notEqual(result.Result.Name, undefined);
				assert.notEqual(result.Result.BaseStatID, undefined);
				assert.notEqual(result.Result.Usable, undefined);
				assert.notEqual(result.Result.Description, undefined);
				assert.notEqual(result.Result.Version, undefined);
				done();
			});
		});
	})

	it('Invalid call (incorrect param: "SkillTypeID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, invalidSkillTypeID, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})

	it('Invalid call (missing param: "SkillTypeID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetSkillType(loginResponse.AID, loginResponse.SID, incorrectSkillTypeID, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})
})

describe.skip('GetCharacterSkill -', function(){
	var validCharacterID = 1;
	var invalidCharacterID = 0;
	var incorrectCharacterID = undefined;

	it('Valid:', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetCharacterSkill(loginResponse.AID, loginResponse.SID, validCharacterID, function(result){
				assert.notEqual(result.Result, undefined);
				//	Need to write a better test on this bit.
				assert.notEqual(result.Result[0].CharacterID, undefined);
				assert.notEqual(result.Result[0].Ranks, undefined);
				assert.notEqual(result.Result[0].Info, undefined);
				assert.notEqual(result.Result[0].MiscModifier, undefined);
				assert.notEqual(result.Result[0].Skill, undefined);
				done();
			});
		});
	})

	it('Invalid call (missing param: "CharacterID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetCharacterSkill(loginResponse.AID, loginResponse.SID, invalidCharacterID, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})

	it('Invalid call (incorrect param: "CharacterID"):', function(done){
		dndAPI.Login(validUsername, validPassword, function(loginResponse){
			dndAPI.GetCharacterSkill(loginResponse.AID, loginResponse.SID, incorrectCharacterID, function(result){
				assert.notEqual(result.Result, undefined);
				assert.equal(result.Result.Success, false);
				assert.notEqual(result.Result.Reason, undefined);
				done();
			});
		});
	})
})