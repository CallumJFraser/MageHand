var assert = require('assert');
var manager = require('../../Managers/CharacterManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
	
		var validRow = {"ID":1,"AccountAID":"1","Name":"Test","Experiance":4500,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Initiative":3,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"ClassID":1,"RaceID":1};
		var validObject = {"ID":1,"AccountAID":"1","Name":"Test","ClassID":1,"Experiance":4500,"RaceID":1,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"Success":true};

		describe('Public functions:', function(){
			it('GetCharacter != undefined', function(){
				assert.notEqual(manager.Get, undefined);
			})
			it('GetAccountCharacters != undefined', function(){
				assert.notEqual(manager.GetByAccount, undefined);
			})
		})

		describe('Get:', function(){

			var valid = 1;
			var invalid = 0;
			var invalidFormat = 'invalid';

			it('Valid:', function(done){
				manager.Get(valid, function(result){
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
				manager.Get(invalid, function(result){
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
				manager.Get(invalidFormat, function(result){
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
				manager.Get(blank, function(result){
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
				manager.GetByAccount(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Reason, undefined);
					assert.equal(result[0].ID, validObject.ID);
					assert.equal(result[0].Name, validObject.Name);
					assert.notEqual(result[0].Class, undefined);
					assert.equal(result[0].Experiance, validObject.Experiance);
					assert.notEqual(result[0].Race, undefined);
					assert.equal(result[0].Age, validObject.Age);
					assert.equal(result[0].Height, validObject.Height);
					assert.equal(result[0].Strength, validObject.Strength);
					assert.equal(result[0].Dexterity, validObject.Dexterity);
					assert.equal(result[0].Constitution, validObject.Constitution);
					assert.equal(result[0].Inteligence, validObject.Inteligence);
					assert.equal(result[0].Wisdom, validObject.Wisdom);
					assert.equal(result[0].Charisma, validObject.Charisma);
					assert.equal(result[0].HP, validObject.HP);
					assert.equal(result[0].AC, validObject.AC);
					assert.equal(result[0].Fortitude, validObject.Fortitude);
					assert.equal(result[0].Reflex, validObject.Reflex);
					assert.equal(result[0].Will, validObject.Will);
					assert.equal(result[0].Grapple, validObject.Grapple);
					assert.equal(result[0].BaseAttack, validObject.BaseAttack);
					assert.equal(result[0].SpellResistance, validObject.SpellResistance);
					assert.equal(result[0].TouchAC, validObject.TouchAC);
					assert.equal(result[0].FlatFootedAC, validObject.FlatFootedAC);
					done();
				});
			})

			it('Invalid "ID" Value:', function(done){
				manager.GetByAccount(invalid, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result[0], undefined);
					done();
				});
			});

			it('Invalid "ID" Format:', function(done){
				manager.GetByAccount(invalidFormat, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result[0], undefined);
					done();
				});
			});

			it('Missing "ID":', function(done){
				manager.GetByAccount(blank, function(result){
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
				manager.GetByAccount(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Reason, undefined);
					assert.equal(result[0].ID, validObject.ID);
					assert.equal(result[0].Name, validObject.Name);
					assert.notEqual(result[0].Class, undefined);
					assert.equal(result[0].Experiance, validObject.Experiance);
					assert.notEqual(result[0].Race, undefined);
					assert.equal(result[0].Age, validObject.Age);
					assert.equal(result[0].Height, validObject.Height);
					assert.equal(result[0].Strength, validObject.Strength);
					assert.equal(result[0].Dexterity, validObject.Dexterity);
					assert.equal(result[0].Constitution, validObject.Constitution);
					assert.equal(result[0].Inteligence, validObject.Inteligence);
					assert.equal(result[0].Wisdom, validObject.Wisdom);
					assert.equal(result[0].Charisma, validObject.Charisma);
					assert.equal(result[0].HP, validObject.HP);
					assert.equal(result[0].AC, validObject.AC);
					assert.equal(result[0].Fortitude, validObject.Fortitude);
					assert.equal(result[0].Reflex, validObject.Reflex);
					assert.equal(result[0].Will, validObject.Will);
					assert.equal(result[0].Grapple, validObject.Grapple);
					assert.equal(result[0].BaseAttack, validObject.BaseAttack);
					assert.equal(result[0].SpellResistance, validObject.SpellResistance);
					assert.equal(result[0].TouchAC, validObject.TouchAC);
					assert.equal(result[0].FlatFootedAC, validObject.FlatFootedAC);
					done();
				});
			})

			it('Invalid "ID" Value:', function(done){
				manager.GetByAccount(invalid, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result[0], undefined);
					done();
				});
			});

			it('Invalid "ID" Format:', function(done){
				manager.GetByAccount(invalidFormat, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result[0], undefined);
					done();
				});
			});

			it('Missing "ID":', function(done){
				manager.GetByAccount(blank, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result[0], undefined);
					done();
				});
			});
		})
	}
};