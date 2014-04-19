var assert = require('assert');
var manager = require('../../CharacterManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
	
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
				var result = manager.FromObject(validRow);
				it('Value != undefined', function(){
					assert.notEqual(result, undefined);
				})
				it('Reason == undefined', function(){
					assert.equal(result.Reason, undefined);
				})
				it('ID == ID', function(){
					assert.equal(result.ID, validObject.ID);
				})
				it('Name == Name', function(){
					assert.equal(result.Name, validObject.Name);
				})
				it('Class != undefined', function(){
					assert.notEqual(result.Class, undefined);
				})
				it('Experiance == Experiance', function(){
					assert.equal(result.Experiance, validObject.Experiance);
				})
				it('Race != undefined', function(){
					assert.notEqual(result.Race, undefined);
				})
				it('Age == Age', function(){
					assert.equal(result.Age, validObject.Age);
				})
				it('Height == Height', function(){
					assert.equal(result.Height, validObject.Height);
				})
				it('Strength == Strength', function(){
					assert.equal(result.Strength, validObject.Strength);
				})
				it('Dexterity == Dexterity', function(){
					assert.equal(result.Dexterity, validObject.Dexterity);
				})
				it('Constitution == Constitution', function(){
					assert.equal(result.Constitution, validObject.Constitution);
				})
				it('Inteligence == Inteligence', function(){
					assert.equal(result.Inteligence, validObject.Inteligence);
				})
				it('Wisdom == Wisdom', function(){
					assert.equal(result.Wisdom, validObject.Wisdom);
				})
				it('Charisma == Charisma', function(){
					assert.equal(result.Charisma, validObject.Charisma);
				})
				it('HP == HP', function(){
					assert.equal(result.HP, validObject.HP);
				})
				it('AC == AC', function(){
					assert.equal(result.AC, validObject.AC);
				})
				it('Fortitude == Fortitude', function(){
					assert.equal(result.Fortitude, validObject.Fortitude);
				})
				it('Reflex == Reflex', function(){
					assert.equal(result.Reflex, validObject.Reflex);
				})
				it('Will == Will', function(){
					assert.equal(result.Will, validObject.Will);
				})
				it('Grapple == Grapple', function(){
					assert.equal(result.Grapple, validObject.Grapple);
				})
				it('BaseAttack == BaseAttack', function(){
					assert.equal(result.BaseAttack, validObject.BaseAttack);
				})
				it('SpellResistance == SpellResistance', function(){
					assert.equal(result.SpellResistance, validObject.SpellResistance);
				})
				it('TouchAC == TouchAC', function(){
					assert.equal(result.TouchAC, validObject.TouchAC);
				})
				it('FlatFootedAC == FlatFootedAC', function(){
					assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
				})
		})
			describe('Missing "ID":', function(){
				var missingID = validRow;
				missingID.ID = undefined;
				var result = manager.FromObject(missingID);
					it('Value != undefined', function(){
					assert.notEqual(result, undefined);
				})
				it('ID == undefined', function(){
					assert.equal(result.ID, undefined);
				})
				it('Name == Name', function(){
					assert.equal(result.Name, validObject.Name);
				})
				it('Class != undefined', function(){
					assert.notEqual(result.Class, undefined);
				})
				it('Experiance == Experiance', function(){
					assert.equal(result.Experiance, validObject.Experiance);
				})
				it('Race != undefined', function(){
					assert.notEqual(result.Race, undefined);
				})
				it('Age == Age', function(){
					assert.equal(result.Age, validObject.Age);
				})
				it('Height == Height', function(){
					assert.equal(result.Height, validObject.Height);
				})
				it('Strength == Strength', function(){
					assert.equal(result.Strength, validObject.Strength);
				})
				it('Dexterity == Dexterity', function(){
					assert.equal(result.Dexterity, validObject.Dexterity);
				})
				it('Constitution == Constitution', function(){
					assert.equal(result.Constitution, validObject.Constitution);
				})
				it('Inteligence == Inteligence', function(){
					assert.equal(result.Inteligence, validObject.Inteligence);
				})
				it('Wisdom == Wisdom', function(){
					assert.equal(result.Wisdom, validObject.Wisdom);
				})
				it('Charisma == Charisma', function(){
					assert.equal(result.Charisma, validObject.Charisma);
				})
				it('HP == HP', function(){
					assert.equal(result.HP, validObject.HP);
				})
				it('AC == AC', function(){
					assert.equal(result.AC, validObject.AC);
				})
				it('Fortitude == Fortitude', function(){
					assert.equal(result.Fortitude, validObject.Fortitude);
				})
				it('Reflex == Reflex', function(){
					assert.equal(result.Reflex, validObject.Reflex);
				})
				it('Will == Will', function(){
					assert.equal(result.Will, validObject.Will);
				})
				it('Grapple == Grapple', function(){
					assert.equal(result.Grapple, validObject.Grapple);
				})
				it('BaseAttack == BaseAttack', function(){
					assert.equal(result.BaseAttack, validObject.BaseAttack);
				})
				it('SpellResistance == SpellResistance', function(){
					assert.equal(result.SpellResistance, validObject.SpellResistance);
				})
				it('TouchAC == TouchAC', function(){
					assert.equal(result.TouchAC, validObject.TouchAC);
				})
				it('FlatFootedAC == FlatFootedAC', function(){
					assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
				})
			})
			describe('Invalid:', function(){
				var result = manager.FromObject(undefined);
				it('Value != undefined', function(){
					assert.notEqual(result, undefined);
				})
				it('Reason != undefined', function(){
					assert.notEqual(result.Reason, undefined);
				})
				it('Name == undefined', function(){
					assert.equal(result.Name, undefined);
				})
				it('Class == undefined', function(){
					assert.equal(result.Class, undefined);
				})
				it('Experiance == undefined', function(){
					assert.equal(result.Experiance, undefined);
				})
				it('Race == undefined', function(){
					assert.equal(result.Race, undefined);
				})
				it('Age == undefined', function(){
					assert.equal(result.Age, undefined);
				})
				it('Height == undefined', function(){
					assert.equal(result.Height, undefined);
				})
				it('Strength == undefined', function(){
					assert.equal(result.Strength, undefined);
				})
				it('Dexterity == undefined', function(){
					assert.equal(result.Dexterity, undefined);
				})
				it('Constitution == undefined', function(){
					assert.equal(result.Constitution, undefined);
				})
				it('Inteligence == undefined', function(){
					assert.equal(result.Inteligence, undefined);
				})
				it('Wisdom == undefined', function(){
					assert.equal(result.Wisdom, undefined);
				})
				it('Charisma == undefined', function(){
					assert.equal(result.Charisma, undefined);
				})
				it('HP == undefined', function(){
					assert.equal(result.HP, undefined);
				})
				it('AC == undefined', function(){
					assert.equal(result.AC, undefined);
				})
				it('Fortitude == undefined', function(){
					assert.equal(result.Fortitude, undefined);
				})
				it('Reflex == undefined', function(){
					assert.equal(result.Reflex, undefined);
				})
				it('Will == undefined', function(){
					assert.equal(result.Will, undefined);
				})
				it('Grapple == undefined', function(){
					assert.equal(result.Grapple, undefined);
				})
				it('BaseAttack == undefined', function(){
					assert.equal(result.BaseAttack, undefined);
				})
				it('SpellResistance == undefined', function(){
					assert.equal(result.SpellResistance, undefined);
				})
				it('TouchAC == undefined', function(){
					assert.equal(result.TouchAC, undefined);
				})
				it('FlatFootedAC == undefined', function(){
					assert.equal(result.FlatFootedAC, undefined);
				})
			})
		})
	
		describe('Get:', function(){

			var valid = 1;
			var invalid = 0;
			var invalidFormat = 'invalid';

			describe('Valid:', function(){
				it('Value != undefined', function(done){
					manager.Get(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('ID == ID', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.ID, validObject.ID);
						done();
					});
				})
				it('Name == Name', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Name, validObject.Name);
						done();
					});
				})
				it('Class != undefined', function(done){
					manager.Get(valid, function(result){
						assert.notEqual(result.Class, undefined);
						done();
					});
				})
				it('Experiance == Experiance', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Experiance, validObject.Experiance);
							done();
					});
				})
				it('Race != undefined', function(done){
					manager.Get(valid, function(result){
						assert.notEqual(result.Race, undefined);
						done();
					});
				})
				it('Age == Age', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Age, validObject.Age);
						done();
					});
				})
				it('Height == Height', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Height, validObject.Height);
						done();
					});
				})
				it('Strength == Strength', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Strength, validObject.Strength);
						done();
					});
				})
				it('Dexterity == Dexterity', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Dexterity, validObject.Dexterity);
						done();
					});
				})
				it('Constitution == Constitution', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Constitution, validObject.Constitution);
						done();
					});
				})
				it('Inteligence == Inteligence', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Inteligence, validObject.Inteligence);
						done();
					});
				})
				it('Wisdom == Wisdom', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Wisdom, validObject.Wisdom);
						done();
					});
				})
				it('Charisma == Charisma', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Charisma, validObject.Charisma);
						done();
					});
				})
				it('HP == HP', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.HP, validObject.HP);
						done();
					});
				})
				it('AC == AC', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.AC, validObject.AC);
						done();
					});
				})
				it('Fortitude == Fortitude', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Fortitude, validObject.Fortitude);
						done();
					});
				})
				it('Reflex == Reflex', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Reflex, validObject.Reflex);
						done();
					});
				})
				it('Will == Will', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Will, validObject.Will);
						done();
					});
				})
				it('Grapple == Grapple', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Grapple, validObject.Grapple);
						done();
					});
				})
				it('BaseAttack == BaseAttack', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.BaseAttack, validObject.BaseAttack);
						done();
					});
				})
				it('SpellResistance == SpellResistance', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.SpellResistance, validObject.SpellResistance);
						done();
					});
				})
				it('TouchAC == TouchAC', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.TouchAC, validObject.TouchAC);
						done();
					});
				})
				it('FlatFootedAC == FlatFootedAC', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
						done();
					});
				})
			})
			describe('Invalid "ID" Value:', function(){
				it('Value != undefined', function(done){
					manager.Get(invalid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Get(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Success == false', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Name == Name', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Name, undefined);
						done();
					});
				})
				it('Class == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Class, undefined);
						done();
					});
				})
				it('Experiance == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Experiance, undefined);
						done();
					});
				})
				it('Race != undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Race, undefined);
						done();
					});
				})
				it('Age == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Age, undefined);
						done();
					});
				})
				it('Height == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Height, undefined);
						done();
					});
				})
				it('Strength == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Strength, undefined);
						done();
					});
				})
				it('Dexterity == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Dexterity, undefined);
						done();
					});
				})
				it('Constitution == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Constitution, undefined);
						done();
					});
				})
				it('Inteligence == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Inteligence, undefined);
						done();
					});
				})
				it('Wisdom == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Wisdom, undefined);
						done();
					});
				})
				it('Charisma == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Charisma, undefined);
						done();
					});
				})
				it('undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.HP, undefined);
						done();
					});
				})
				it('AC == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.AC, undefined);
						done();
					});
				})
				it('Fortitude == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Fortitude, undefined);
						done();
					});
				})
				it('Reflex == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Reflex, undefined);
						done();
					});
				})
				it('Will == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Will, undefined);
						done();
					});
				})
				it('Grapple == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Grapple, undefined);
						done();
					});
				})
				it('BaseAttack == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.BaseAttack, undefined);
						done();
					});
				})
				it('SpellResistance == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.SpellResistance, undefined);
						done();
					});
				})
				it('TouchAC == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.TouchAC, undefined);
						done();
					});
				})
				it('FlatFootedAC == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.FlatFootedAC, undefined);
						done();
					});
				})
			})
			describe('Invalid "ID" Format:', function(){
				it('Value != undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Success == false', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Name == Name', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Name, undefined);
						done();
					});
				})
				it('Class == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Class, undefined);
						done();
					});
				})
				it('Experiance == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Experiance, undefined);
						done();
					});
				})
				it('Race != undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Race, undefined);
						done();
					});
				})
				it('Age == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Age, undefined);
						done();
					});
				})
				it('Height == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Height, undefined);
						done();
					});
				})
				it('Strength == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Strength, undefined);
						done();
					});
				})
				it('Dexterity == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Dexterity, undefined);
						done();
					});
				})
				it('Constitution == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Constitution, undefined);
						done();
					});
				})
				it('Inteligence == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Inteligence, undefined);
						done();
					});
				})
				it('Wisdom == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Wisdom, undefined);
						done();
					});
				})
				it('Charisma == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Charisma, undefined);
						done();
					});
				})
				it('undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.HP, undefined);
						done();
					});
				})
				it('AC == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.AC, undefined);
						done();
					});
				})
				it('Fortitude == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Fortitude, undefined);
						done();
					});
				})
				it('Reflex == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Reflex, undefined);
						done();
					});
				})
				it('Will == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Will, undefined);
						done();
					});
				})
				it('Grapple == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Grapple, undefined);
						done();
					});
				})
				it('BaseAttack == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.BaseAttack, undefined);
						done();
					});
				})
				it('SpellResistance == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.SpellResistance, undefined);
						done();
					});
				})
				it('TouchAC == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.TouchAC, undefined);
						done();
					});
				})
				it('FlatFootedAC == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.FlatFootedAC, undefined);
						done();
					});
				})
			})
			describe('Missing "ID":', function(){
				it('Value != undefined', function(done){
					manager.Get(blank, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Get(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Success == false', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Name == Name', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Name, undefined);
						done();
					});
				})
				it('Class == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Class, undefined);
						done();
					});
				})
				it('Experiance == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Experiance, undefined);
						done();
					});
				})
				it('Race != undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Race, undefined);
						done();
					});
				})
				it('Age == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Age, undefined);
						done();
					});
				})
				it('Height == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Height, undefined);
						done();
					});
				})
				it('Strength == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Strength, undefined);
						done();
					});
				})
				it('Dexterity == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Dexterity, undefined);
						done();
					});
				})
				it('Constitution == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Constitution, undefined);
						done();
					});
				})
				it('Inteligence == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Inteligence, undefined);
						done();
					});
				})
				it('Wisdom == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Wisdom, undefined);
						done();
					});
				})
				it('Charisma == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Charisma, undefined);
						done();
					});
				})
				it('undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.HP, undefined);
						done();
					});
				})
				it('AC == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.AC, undefined);
						done();
					});
				})
				it('Fortitude == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Fortitude, undefined);
						done();
					});
				})
				it('Reflex == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Reflex, undefined);
						done();
					});
				})
				it('Will == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Will, undefined);
						done();
					});
				})
				it('Grapple == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Grapple, undefined);
						done();
					});
				})
				it('BaseAttack == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.BaseAttack, undefined);
						done();
					});
				})
				it('SpellResistance == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.SpellResistance, undefined);
						done();
					});
				})
				it('TouchAC == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.TouchAC, undefined);
						done();
					});
				})
				it('FlatFootedAC == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.FlatFootedAC, undefined);
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
					manager.GetByAccount(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('ID == ID', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].ID, validObject.ID);
						done();
					});
				})
				it('Name == Name', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Name, validObject.Name);
						done();
					});
				})
				it('Class != undefined', function(done){
					manager.GetByAccount(valid, function(result){
						assert.notEqual(result[0].Class, undefined);
						done();
					});
				})
				it('Experiance == Experiance', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Experiance, validObject.Experiance);
						done();
					});
				})
				it('Race != undefined', function(done){
					manager.GetByAccount(valid, function(result){
						assert.notEqual(result[0].Race, undefined);
						done();
					});
				})
				it('Age == Age', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Age, validObject.Age);
						done();
					});
				})
				it('Height == Height', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Height, validObject.Height);
						done();
					});
				})
				it('Strength == Strength', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Strength, validObject.Strength);
						done();
					});
				})
				it('Dexterity == Dexterity', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Dexterity, validObject.Dexterity);
						done();
					});
				})
				it('Constitution == Constitution', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Constitution, validObject.Constitution);
						done();
					});
				})
				it('Inteligence == Inteligence', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Inteligence, validObject.Inteligence);
						done();
					});
				})
				it('Wisdom == Wisdom', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Wisdom, validObject.Wisdom);
						done();
					});
				})
				it('Charisma == Charisma', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Charisma, validObject.Charisma);
						done();
					});
				})
				it('HP == HP', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].HP, validObject.HP);
						done();
					});
				})
				it('AC == AC', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].AC, validObject.AC);
						done();
					});
				})
				it('Fortitude == Fortitude', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Fortitude, validObject.Fortitude);
						done();
					});
				})
				it('Reflex == Reflex', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Reflex, validObject.Reflex);
						done();
					});
				})
				it('Will == Will', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Will, validObject.Will);
						done();
					});
				})
				it('Grapple == Grapple', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].Grapple, validObject.Grapple);
						done();
					});
				})
				it('BaseAttack == BaseAttack', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].BaseAttack, validObject.BaseAttack);
						done();
					});
				})
				it('SpellResistance == SpellResistance', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].SpellResistance, validObject.SpellResistance);
						done();
					});
				})
				it('TouchAC == TouchAC', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].TouchAC, validObject.TouchAC);
						done();
					});
				})
				it('FlatFootedAC == FlatFootedAC', function(done){
					manager.GetByAccount(valid, function(result){
						assert.equal(result[0].FlatFootedAC, validObject.FlatFootedAC);
						done();
					});
				})
			})
			describe('Invalid "ID" Value:', function(){
				it('Value != undefined', function(done){
					manager.GetByAccount(invalid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByAccount(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result == undefined', function(done){
					manager.GetByAccount(invalid, function(result){
						assert.equal(result[0], undefined);
						done();
					});
				});
			})
			describe('Invalid "ID" Format:', function(){
				it('Value != undefined', function(done){
					manager.GetByAccount(invalidFormat, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByAccount(invalidFormat, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result == undefined', function(done){
					manager.GetByAccount(invalidFormat, function(result){
						assert.equal(result[0], undefined);
						done();
					});
				});
			})
			describe('Missing "ID":', function(){
				it('Value != undefined', function(done){
					manager.GetByAccount(blank, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByAccount(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Result == undefined', function(done){
					manager.GetByAccount(blank, function(result){
						assert.equal(result[0], undefined);
						done();
					});
				});
			})
		})
	}
};