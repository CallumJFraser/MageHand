"Use Strict";

var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();
var manager = require('../../Managers/SkillManager.js');

var blank = undefined;


describe('Skill Manager', function(){
	var fakeDatabase = {};
	var fakeManager = proxyquire('../../Managers/SkillManager.js', {
		'../Database': fakeDatabase
	});

	describe('Public functions:', function(){
		it('Get != undefined', function(){
			assert.notEqual(manager.Get, undefined);
		});
		it('GetByCharacter != undefined', function(){
			assert.notEqual(manager.GetByCharacter, undefined);
		});
	})

	describe('Get:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			var validRow = {"ID":1,"Name":"Test", "BaseStatID":1, "Usable":true, "Description":"Description"};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSkill');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.notEqual(result.ID, undefined);	
				assert.notEqual(result.Name, undefined);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSkill');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSkill');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);	
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSkill');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				done();
			});
		})
	})

	describe('GetByCharacter:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			manager.GetByCharacter(valid, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.length > 0, true);
				assert.notEqual(result[0].CharacterID, undefined);
				assert.notEqual(result[0].Skill, undefined);
				assert.notEqual(result[0].Ranks, undefined);
				assert.notEqual(result[0].Info, undefined);
				assert.notEqual(result[0].MiscModifier, undefined);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			manager.GetByCharacter(invalid, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(){
		})

		it('Missing "ID":', function(){
		})
	})
})