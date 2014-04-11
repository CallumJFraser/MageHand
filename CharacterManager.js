var databaseObject = require('./Database.js');
var classManager = require('./ClassManager.js');
var raceManager = require('./RaceManager.js');

function Character(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	this.ID = row.ID;
	this.Name = row.Name;
	this.AccountID = row.AccountID;
	this.Class = classManager.FromObject(row);
	this.Experiance = row.Experiance;
	this.Race = raceManager.FromObject(row);
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
	return this;
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
}

function Get(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetCharacterByID', [id], function(rows){
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

function GetByAccount(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetCharacterByAccount', [id], function(rows){
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
	Get: function(id, callback){
		Get(id, callback);
	},
	GetByAccount: function(id, callback){
		GetByAccount(id, callback);
	},
	FromObject: function(row){
		return new Character(row);
	}
};