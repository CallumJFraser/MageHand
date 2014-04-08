var databaseObject = require('./Database.js');

function Character(row){
	this.ID = row.ID;
	this.Name = row.Name;
	this.AccountID = row.AccountID;
	this.ClassID = row.ClassID;
	this.Experiance = row.Experiance;
	this.RaceID = row.RaceID;
	this.Age = row.Age;
	this.Height = row.Height;
	this.Strength = row.Strength;
	this.Dexterity = row.Dexterity;
	this.Constitution = row.Constitution;
	this.Inteligence = row.Inteligence;
	this.Wisdom = row.Wisdom;
	this.Charisma = row.Charisma;
	this.HP = row.HP;
	this.AC = row.AC;
	this.Initative = row.Initative
	this.Fortitude = row.Fortitude
	this.Reflex = row.Reflex;
	this.Will = row.Will;
	this.Grapple = row.Grapple;
	this.BaseAttack = row.BaseAttack;
	this.SpellResistance = row.SpellResistance;
	this.TouchAC = row.TouchAC;
	this.FlatFootedAC = row.FlatFootedAC;
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
}

function getCharacter(characterID, callback){
	if(characterID == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetCharacterByID', [characterID], function(rows){
			if(rows.length > 0){
				var character = new Character(rows[0]);
				character.Success = true;
				callback(character);
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

function getAccountCharacters(accountAID, callback){
	if(accountAID == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetCharacterByAccount', accountAID, function(rows){
			if(rows.length > 0){
				var rowArray = [];
				for(var i = 0; i < rows.length; i++){
					rowArray.push(new Character(rows[i]));
				}
				callback(rowArray);
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

module.exports = {
	GetCharacter: function(characterID, callback){
		getCharacter(characterID, callback);
	},
	GetAccountCharacters: function(accountAID, callback){
		getAccountCharacters(accountAID, callback);
	}
};