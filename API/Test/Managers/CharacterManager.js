"Use Strict";

var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();

var blank = undefined;

var validObject = {"ID":1,"AccountAID":"1","Name":"Test","ClassID":1,"Experiance":4500,"RaceID":1,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"Success":true};

describe('Character Manager', function() {
	var fakeDatabase = {};
	var fakeManager = proxyquire('../../Managers/CharacterManager', {
		'../Database': fakeDatabase,
		'../Managers/ClassManager': {
			Get: function (id, callback){
				callback({});
			}
		},
		'../Managers/RaceManager': {
			Get: function (id, callback){
				callback({});
			}
		}
	});

	describe('Public functions:', function(){
		it('GetCharacter != undefined', function(){
			assert.notEqual(fakeManager.Get, undefined);
		})
		it('GetAccountCharacters != undefined', function(){
			assert.notEqual(fakeManager.GetByAccount, undefined);
		})
	})

	describe('Get:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			var validRow = {"ID":1,"AccountAID":"1","Name":"Test","Experiance":4500,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Initiative":3,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"ClassID":1,"RaceID":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.Name, validObject.Name);
				assert.notEqual(result.Class, undefined);
				assert.equal(result.Experiance, validObject.Experiance);
				assert.notEqual(result.Race, undefined);
				assert.equal(result.Age, validObject.Age);
				assert.equal(result.Height, validObject.Height);
				assert.equal(result.Strength, validObject.Strength);
				assert.equal(result.Dexterity, validObject.Dexterity);
				assert.equal(result.Constitution, validObject.Constitution);
				assert.equal(result.Inteligence, validObject.Inteligence);
				assert.equal(result.Wisdom, validObject.Wisdom);
				assert.equal(result.Charisma, validObject.Charisma);
				assert.equal(result.HP, validObject.HP);
				assert.equal(result.AC, validObject.AC);
				assert.equal(result.Fortitude, validObject.Fortitude);
				assert.equal(result.Reflex, validObject.Reflex);
				assert.equal(result.Will, validObject.Will);
				assert.equal(result.Grapple, validObject.Grapple);
				assert.equal(result.BaseAttack, validObject.BaseAttack);
				assert.equal(result.SpellResistance, validObject.SpellResistance);
				assert.equal(result.TouchAC, validObject.TouchAC);
				assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
				done();
			});
		})
		
		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid).then(function(value){
				done(value);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.Success, false);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Class, undefined);
				assert.equal(result.Experiance, undefined);
				assert.equal(result.Race, undefined);
				assert.equal(result.Age, undefined);
				assert.equal(result.Height, undefined);
				assert.equal(result.Strength, undefined);
				assert.equal(result.Dexterity, undefined);
				assert.equal(result.Constitution, undefined);
				assert.equal(result.Inteligence, undefined);
				assert.equal(result.Wisdom, undefined);
				assert.equal(result.Charisma, undefined);
				assert.equal(result.HP, undefined);
				assert.equal(result.AC, undefined);
				assert.equal(result.Fortitude, undefined);
				assert.equal(result.Reflex, undefined);
				assert.equal(result.Will, undefined);
				assert.equal(result.Grapple, undefined);
				assert.equal(result.BaseAttack, undefined);
				assert.equal(result.SpellResistance, undefined);
				assert.equal(result.TouchAC, undefined);
				assert.equal(result.FlatFootedAC, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat).then(function(value){
				done(value);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.Success, false);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Class, undefined);
				assert.equal(result.Experiance, undefined);
				assert.equal(result.Race, undefined);
				assert.equal(result.Age, undefined);
				assert.equal(result.Height, undefined);
				assert.equal(result.Strength, undefined);
				assert.equal(result.Dexterity, undefined);
				assert.equal(result.Constitution, undefined);
				assert.equal(result.Inteligence, undefined);
				assert.equal(result.Wisdom, undefined);
				assert.equal(result.Charisma, undefined);
				assert.equal(result.HP, undefined);
				assert.equal(result.AC, undefined);
				assert.equal(result.Fortitude, undefined);
				assert.equal(result.Reflex, undefined);
				assert.equal(result.Will, undefined);
				assert.equal(result.Grapple, undefined);
				assert.equal(result.BaseAttack, undefined);
				assert.equal(result.SpellResistance, undefined);
				assert.equal(result.TouchAC, undefined);
				assert.equal(result.FlatFootedAC, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank).then(function(value){
				done(value);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.Success, false);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Class, undefined);
				assert.equal(result.Experiance, undefined);
				assert.equal(result.Race, undefined);
				assert.equal(result.Age, undefined);
				assert.equal(result.Height, undefined);
				assert.equal(result.Strength, undefined);
				assert.equal(result.Dexterity, undefined);
				assert.equal(result.Constitution, undefined);
				assert.equal(result.Inteligence, undefined);
				assert.equal(result.Wisdom, undefined);
				assert.equal(result.Charisma, undefined);
				assert.equal(result.HP, undefined);
				assert.equal(result.AC, undefined);
				assert.equal(result.Fortitude, undefined);
				assert.equal(result.Reflex, undefined);
				assert.equal(result.Will, undefined);
				assert.equal(result.Grapple, undefined);
				assert.equal(result.BaseAttack, undefined);
				assert.equal(result.SpellResistance, undefined);
				assert.equal(result.TouchAC, undefined);
				assert.equal(result.FlatFootedAC, undefined);
				done();
			});
		})
	})

	describe('GetByAccount:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			var validRow = {"ID":1,"AccountAID":"1","Name":"Test","Experiance":4500,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Initiative":3,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"ClassID":1,"RaceID":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByAccount');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetByAccount(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.Name, validObject.Name);
				assert.notEqual(result.Class, undefined);
				assert.equal(result.Experiance, validObject.Experiance);
				assert.notEqual(result.Race, undefined);
				assert.equal(result.Age, validObject.Age);
				assert.equal(result.Height, validObject.Height);
				assert.equal(result.Strength, validObject.Strength);
				assert.equal(result.Dexterity, validObject.Dexterity);
				assert.equal(result.Constitution, validObject.Constitution);
				assert.equal(result.Inteligence, validObject.Inteligence);
				assert.equal(result.Wisdom, validObject.Wisdom);
				assert.equal(result.Charisma, validObject.Charisma);
				assert.equal(result.HP, validObject.HP);
				assert.equal(result.AC, validObject.AC);
				assert.equal(result.Fortitude, validObject.Fortitude);
				assert.equal(result.Reflex, validObject.Reflex);
				assert.equal(result.Will, validObject.Will);
				assert.equal(result.Grapple, validObject.Grapple);
				assert.equal(result.BaseAttack, validObject.BaseAttack);
				assert.equal(result.SpellResistance, validObject.SpellResistance);
				assert.equal(result.TouchAC, validObject.TouchAC);
				assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByAccount');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByAccount(invalid).then(
			function(result){
				done(result);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result[0], undefined);
				done();
			});
		});

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByAccount');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByAccount(invalidFormat).then(
			function(result){
				done(result);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result[0], undefined);
				done();
			});
		});

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetCharacterByAccount');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByAccount(blank).then(
			function(result){
				done(result);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result[0], undefined);
				done();
			});
		});
	})

	describe('GetBySession:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			var validRow = {"ID":1,"AccountAID":"1","Name":"Test","Experiance":4500,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Initiative":3,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"ClassID":1,"RaceID":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSessionCharacters');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetBySession(valid).then(function(result){
				assert.notEqual(result, undefined);
				console.log(result);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.Name, validObject.Name);
				assert.notEqual(result.Class, undefined);
				assert.equal(result.Experiance, validObject.Experiance);
				assert.notEqual(result.Race, undefined);
				assert.equal(result.Age, validObject.Age);
				assert.equal(result.Height, validObject.Height);
				assert.equal(result.Strength, validObject.Strength);
				assert.equal(result.Dexterity, validObject.Dexterity);
				assert.equal(result.Constitution, validObject.Constitution);
				assert.equal(result.Inteligence, validObject.Inteligence);
				assert.equal(result.Wisdom, validObject.Wisdom);
				assert.equal(result.Charisma, validObject.Charisma);
				assert.equal(result.HP, validObject.HP);
				assert.equal(result.AC, validObject.AC);
				assert.equal(result.Fortitude, validObject.Fortitude);
				assert.equal(result.Reflex, validObject.Reflex);
				assert.equal(result.Will, validObject.Will);
				assert.equal(result.Grapple, validObject.Grapple);
				assert.equal(result.BaseAttack, validObject.BaseAttack);
				assert.equal(result.SpellResistance, validObject.SpellResistance);
				assert.equal(result.TouchAC, validObject.TouchAC);
				assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSessionCharacters');
				assert.equal(values.length, 1);
				assert.equal(values, invalid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetBySession(invalid).then(function(result){
				done(result);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result[0], undefined);
				done();
			});
		});

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSessionCharacters');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetBySession(invalidFormat).then(function(result){
				done(result);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result[0], undefined);
				done();
			});
		});

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetSessionCharacters');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetBySession(blank).then(function(result){
				done(result);
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result[0], undefined);
				done();
			});
		});
	})
})