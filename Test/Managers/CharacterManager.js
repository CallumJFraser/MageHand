var assert = require('assert');
var manager = require('../../CharacterManager.js');

var blank = undefined;

function test(){
	var MatchingObject = function(value, validObject){
		it('Value != undefined', function(){
			assert.notEqual(value, undefined);
		})
		it('Reason == undefined', function(){
			assert.equal(value.Reason, undefined);
		})
		it('ID == ID', function(){
			assert.equal(value.ID, validObject.ID);
		})
		it('Name == Name', function(){
			assert.equal(value.Name, validObject.Name);
		})
		it	('Class != undefined', function(){
			assert.notEqual(value.Class, undefined);
		})
		it('Experiance == Experiance', function(){
			assert.equal(value.Experiance, validObject.Experiance);
		})
		it('Race != undefined', function(){
			assert.notEqual(value.Race, undefined);
		})
		it('Age == Age', function(){
			assert.equal(value.Age, validObject.Age);
		})
		it('Height == Height', function(){
			assert.equal(value.Height, validObject.Height);
		})
		it('Strength == Strength', function(){
			assert.equal(value.Strength, validObject.Strength);
		})
		it('Dexterity == Dexterity', function(){
			assert.equal(value.Dexterity, validObject.Dexterity);
		})
		it('Constitution == Constitution', function(){
			assert.equal(value.Constitution, validObject.Constitution);
		})
		it('Inteligence == Inteligence', function(){
			assert.equal(value.Inteligence, validObject.Inteligence);
		})
		it('Wisdom == Wisdom', function(){
			assert.equal(value.Wisdom, validObject.Wisdom);
		})
		it('Charisma == Charisma', function(){
			assert.equal(value.Charisma, validObject.Charisma);
		})
		it('HP == HP', function(){
			assert.equal(value.HP, validObject.HP);
		})
		it('AC == AC', function(){
			assert.equal(value.AC, validObject.AC);
		})
		it('Fortitude == Fortitude', function(){
			assert.equal(value.Fortitude, validObject.Fortitude);
		})
		it('Reflex == Reflex', function(){
			assert.equal(value.Reflex, validObject.Reflex);
		})
		it('Will == Will', function(){
			assert.equal(value.Will, validObject.Will);
		})
		it('Grapple == Grapple', function(){
			assert.equal(value.Grapple, validObject.Grapple);
		})
		it('BaseAttack == BaseAttack', function(){
			assert.equal(value.BaseAttack, validObject.BaseAttack);
		})
		it('SpellResistance == SpellResistance', function(){
			assert.equal(value.SpellResistance, validObject.SpellResistance);
		})
		it('TouchAC == TouchAC', function(){
			assert.equal(value.TouchAC, validObject.TouchAC);
		})
		it('FlatFootedAC == FlatFootedAC', function(){
			assert.equal(value.FlatFootedAC, validObject.FlatFootedAC);
		})
	};
	
	var validRow = {"ID":1,"AccountAID":"1","Name":"Test","Experiance":4500,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Initiative":3,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"ClassID":1,"ClassName":"Bard","ClassVersionID":1,"ClassDescription":"","RaceID":1,"RaceName":"Gnome","RaceDescription":"They are, like, waay small.","RaceSizeID":1,"RaceSpeed":20,"SizeID":1,"SizeName":"Small"};
	var validObject = {"ID":1,"Name":"Test","Class":{"ID":1,"Name":"Bard","Description":"","Version":{"ID":1,"Name":"Test"}},"Experiance":4500,"Race":{"ID":1,"Name":"Gnome","Description":"They are, like, waay small.","Speed":20},"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"Success":true};

	describe('Public functions:', function(){
		it('FromObject != undefined', function(){
			assert.notEqual(manager.FromObject, undefined);
		})
		it('GetCharacter != undefined', function(){
			assert.notEqual(manager.Get, undefined);
		})
		it('GetAccountCharacters != undefined', function(){
			assert.notEqual(manager.GetByAccount, undefined);
		})
	})
	
	describe('FromObject:', function(){
		describe('Valid', function(){
			var character = manager.FromObject(validRow);
			MatchingObject(character, validObject);
		})
		describe('Missing "ID":', function(){
			var missingID = validRow;
			missingID.ID = undefined;
			var character = manager.FromObject(missingID);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
			it('ID == undefined', function(){
				assert.equal(character.ID, undefined);
			})
		})
		describe('Invalid:', function(){
			var character = manager.FromObject(undefined);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
			it('Reason != undefined', function(){
				assert.notEqual(character.Reason, undefined);
			})
		})
	})
	
	describe('Get:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		describe('Valid:', function(){
			it('Value != undefined', function(done){
				manager.Get(valid, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason == undefined', function(done){
				manager.Get(valid, function(value){
					assert.equal(value.Reason, undefined);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.Get(valid, function(value){
					MatchingObject(value, validObject);
					done();
				});
			})
		})
		describe('Invalid "ID" Value:', function(){
			it('Value != undefined', function(done){
				manager.Get(invalid, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason != undefined', function(done){
				manager.Get(invalid, function(value){
					assert.notEqual(value.Reason, undefined);
					done();
				});
			})
			it('Success == false', function(done){
				manager.Get(invalid, function(value){
					assert.equal(value.Success, false);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.Get(invalid, function(value){
					MatchingObject(value, validObject);
					done();
				});
			})
		})
		describe('Invalid "ID" Format:', function(){
			it('Value != undefined', function(done){
				manager.Get(invalidFormat, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason != undefined', function(done){
				manager.Get(invalidFormat, function(value){
					assert.notEqual(value.Reason, undefined);
					done();
				});
			})
			it('Success == false', function(done){
				manager.Get(invalidFormat, function(value){
					assert.equal(value.Success, false);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.Get(invalidFormat, function(value){
					MatchingObject(value, validObject);
					done();
				});
			})
		})
		describe('Missing "ID":', function(){
			it('Value != undefined', function(done){
				manager.Get(blank, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason != undefined', function(done){
				manager.Get(blank, function(value){
					assert.notEqual(value.Reason, undefined);
					done();
				});
			})
			it('Success == false', function(done){
				manager.Get(invalidFormat, function(value){
					assert.equal(value.Success, false);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.Get(blank, function(value){
					MatchingObject(value, validObject);
					done();
				});
			})
		})
	})
	
	describe('GetByAccount:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		describe('Valid:', function(){
			it('Value != undefined', function(done){
				manager.GetByAccount(valid, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason == undefined', function(done){
				manager.GetByAccount(valid, function(value){
					assert.equal(value.Reason, undefined);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.GetByAccount(valid, function(value){
					MatchingObject(value, validObject);
					done();
				});
			});
		})
		describe('Invalid "ID" Value:', function(){
			it('Value != undefined', function(done){
				manager.GetByAccount(invalid, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason != undefined', function(done){
				manager.GetByAccount(invalid, function(value){
					assert.notEqual(value.Reason, undefined);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.GetByAccount(invalid, function(value){
					MatchingObject(value, validObject);
					done();
				});
			});
		})
		describe('Invalid "ID" Format:', function(){
			it('Value != undefined', function(done){
				manager.GetByAccount(invalidFormat, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason != undefined', function(done){
				manager.GetByAccount(invalidFormat, function(value){
					assert.notEqual(value.Reason, undefined);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.GetByAccount(invalidFormat, function(value){
					MatchingObject(value, validObject);
					done();
				});
			});
		})
		describe('Missing "ID":', function(){
			it('Value != undefined', function(done){
				manager.GetByAccount(blank, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason != undefined', function(done){
				manager.GetByAccount(blank, function(value){
					assert.notEqual(value.Reason, undefined);
					done();
				});
			})
			it('Return == Character', function(done){
				manager.GetByAccount(blank, function(value){
					MatchingObject(value, validObject);
					done();
				});
			});
		})
	})
};

module.exports = {
	Test: function(){
		test();
	}
};