var assert = require('assert');
var manager = require('../CharacterManager.js');

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
	it('Class != undefined', function(){
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

describe('Character Manager -', function(){

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
		var validID = 1;
		describe('Valid:', function(describeDone){
			it('Value != undefined', function(done){
				manager.Get(validID, function(value){
					assert.notEqual(value, undefined);
					done();
				});
			})
			it('Reason == undefined', function(done){
				manager.Get(validID, function(value){
					assert.equal(value.Reason, undefined);
					done();
				});
			})
			manager.Get(validID, function(value){
				MatchingObject(value, validObject);
				describeDone();
			});
		})
		describe('Missing "":', function(){
			var character = manager.FromObject(undefined);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
			it('Reason != undefined', function(){
				assert.notEqual(character.Reason, undefined);
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
	
	describe('GetByAccount:', function(){
		var validAccount = '';
		describe('Valid:', function(describeDone){
			var character = manager.FromObject(undefined);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
			it('Reason != undefined', function(){
				assert.notEqual(character.Reason, undefined);
			})
			manager.Get(validAccount, function(value){
				MatchingObject(value, validObject);
				describeDone();
			});
		})
		describe('Missing "":', function(){
			var character = manager.FromObject(undefined);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
			it('Reason != undefined', function(){
				assert.notEqual(character.Reason, undefined);
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
})