var assert = require('assert');
var manager = require('../../CharacterManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
	
		var validRow = {"ID":1,"AccountAID":"1","Name":"Test","Experiance":4500,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Initiative":3,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"ClassID":1,"RaceID":1};
		var validObject = {"ID":1,"AccountAID":"1","Name":"Test","ClassID":1,"Experiance":4500,"RaceID":1,"Age":100,"Height":100,"Strength":10,"Dexterity":14,"Constitution":10,"Inteligence":10,"Wisdom":10,"Charisma":19,"HP":20,"AC":18,"Fortitude":3,"Reflex":3,"Will":3,"Grapple":2,"BaseAttack":3,"SpellResistance":10,"TouchAC":18,"FlatFootedAC":15,"Success":true};

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
				it('Value != undefined', function(done){
					manager.FromObject(validRow, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				});
				it('Reason == undefined', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				});
				it('ID == ID', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.ID, validObject.ID);
						done();
					});
				});
				it('Name == Name', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Name, validObject.Name);
						done();
					});
				});
				it('Class != undefined', function(done){
					manager.FromObject(validRow, function(result){
						assert.notEqual(result.Class, undefined);
						done();
					});
				});
				it('Experiance == Experiance', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Experiance, validObject.Experiance);
						done();
					});
				});
				it('Race != undefined', function(done){
					manager.FromObject(validRow, function(result){
						assert.notEqual(result.Race, undefined);
						done();
					});
				});
				it('Age == Age', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Age, validObject.Age);
						done();
					});
				});
				it('Height == Height', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Height, validObject.Height);
						done();
					});
				});
				it('Strength == Strength', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Strength, validObject.Strength);
						done();
					});
				});
				it('Dexterity == Dexterity', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Dexterity, validObject.Dexterity);
						done();
					});
				});
				it('Constitution == Constitution', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Constitution, validObject.Constitution);
						done();
					});
				});
				it('Inteligence == Inteligence', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Inteligence, validObject.Inteligence);
						done();
					});
				});
				it('Wisdom == Wisdom', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Wisdom, validObject.Wisdom);
						done();
					});
				});
				it('Charisma == Charisma', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Charisma, validObject.Charisma);
						done();
					});
				});
				it('HP == HP', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.HP, validObject.HP);
						done();
					});
				});
				it('AC == AC', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.AC, validObject.AC);
						done();
					});
				});
				it('Fortitude == Fortitude', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Fortitude, validObject.Fortitude);
						done();
					});
				});
				it('Reflex == Reflex', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Reflex, validObject.Reflex);
						done();
					});
				});
				it('Will == Will', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Will, validObject.Will);
						done();
					});
				});
				it('Grapple == Grapple', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.Grapple, validObject.Grapple);
						done();
					});
				});
				it('BaseAttack == BaseAttack', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.BaseAttack, validObject.BaseAttack);
						done();
					});
				});
				it('SpellResistance == SpellResistance', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.SpellResistance, validObject.SpellResistance);
						done();
					});
				});
				it('TouchAC == TouchAC', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.TouchAC, validObject.TouchAC);
						done();
					});
				});
				it('FlatFootedAC == FlatFootedAC', function(done){
					manager.FromObject(validRow, function(result){
						assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
						done();
					});
				});
			})

			describe('Missing "ID":', function(){
				it('Value != undefined', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Name == Name', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Name, validObject.Name);
						done();
					});
				})
				it('Class != undefined', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.notEqual(result.Class, undefined);
						done();
					});
				})
				it('Experiance == Experiance', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Experiance, validObject.Experiance);
						done();
					});
				})
				it('Race != undefined', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.notEqual(result.Race, undefined);
						done();
					});
				})
				it('Age == Age', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Age, validObject.Age);
						done();
					});
				})
				it('Height == Height', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Height, validObject.Height);
						done();
					});
				})
				it('Strength == Strength', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Strength, validObject.Strength);
						done();
					});
				})
				it('Dexterity == Dexterity', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Dexterity, validObject.Dexterity);
						done();
					});
				})
				it('Constitution == Constitution', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Constitution, validObject.Constitution);
						done();
					});
				})
				it('Inteligence == Inteligence', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Inteligence, validObject.Inteligence);
						done();
					});
				})
				it('Wisdom == Wisdom', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Wisdom, validObject.Wisdom);
						done();
					});
				})
				it('Charisma == Charisma', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Charisma, validObject.Charisma);
						done();
					});
				})
				it('HP == HP', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.HP, validObject.HP);
						done();
					});
				})
				it('AC == AC', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.AC, validObject.AC);
						done();
					});
				})
				it('Fortitude == Fortitude', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Fortitude, validObject.Fortitude);
						done();
					});
				})
				it('Reflex == Reflex', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Reflex, validObject.Reflex);
						done();
					});
				})
				it('Will == Will', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Will, validObject.Will);
						done();
					});
				})
				it('Grapple == Grapple', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.Grapple, validObject.Grapple);
						done();
					});
				})
				it('BaseAttack == BaseAttack', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.BaseAttack, validObject.BaseAttack);
						done();
					});
				})
				it('SpellResistance == SpellResistance', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.SpellResistance, validObject.SpellResistance);
						done();
					});
				})
				it('TouchAC == TouchAC', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.TouchAC, validObject.TouchAC);
						done();
					});
				})
				it('FlatFootedAC == FlatFootedAC', function(done){
					var missingID = validRow;
					missingID.ID = undefined;
					manager.FromObject(missingID, function(result){
						assert.equal(result.FlatFootedAC, validObject.FlatFootedAC);
						done();
					});
				})
			})
			
			describe('Invalid:', function(){
				it('Value != undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.notEqual(result, undefined);
					});
				})
				it('Reason != undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.notEqual(result.Reason, undefined);
					});
				})
				it('Name == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Name, undefined);
					});
				})
				it('Class == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Class, undefined);
					});
				})
				it('Experiance == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Experiance, undefined);
					});
				})
				it('Race == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Race, undefined);
					});
				})
				it('Age == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Age, undefined);
					});
				})
				it('Height == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Height, undefined);
					});
				})
				it('Strength == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Strength, undefined);
					});
				})
				it('Dexterity == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Dexterity, undefined);
					});
				})
				it('Constitution == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Constitution, undefined);
					});
				})
				it('Inteligence == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Inteligence, undefined);
					});
				})
				it('Wisdom == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Wisdom, undefined);
					});
				})
				it('Charisma == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Charisma, undefined);
					});
				})
				it('HP == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.HP, undefined);
					});
				})
				it('AC == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.AC, undefined);
					});
				})
				it('Fortitude == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Fortitude, undefined);
					});
				})
				it('Reflex == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Reflex, undefined);
					});
				})
				it('Will == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Will, undefined);
					});
				})
				it('Grapple == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.Grapple, undefined);
					});
				})
				it('BaseAttack == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.BaseAttack, undefined);
					});
				})
				it('SpellResistance == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.SpellResistance, undefined);
					});
				})
				it('TouchAC == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.TouchAC, undefined);
					});
				})
				it('FlatFootedAC == undefined', function(){
					manager.FromObject(undefined, function(result){
						assert.equal(result.FlatFootedAC, undefined);
					});
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