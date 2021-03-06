"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var classManager = require('../Managers/ClassManager');
var raceManager = require('../Managers/RaceManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get,
	GetByAccount: GetByAccount,
	GetBySession: GetBySession
};

function Character(data){
	if(data == undefined)
		return Promise.reject(new Failed('Missing parameter'));

	return new Promise(function(resolve, reject){
		var classPromise = new Promise(function(classResolve){
			classManager.Get(data.ClassID, function(result){
				classResolve(result);
			});
		});
		var racePromise = new Promise(function(raceResolve){
			raceManager.Get(data.RaceID, function(result){
				raceResolve(result)
			});
		});

		Promise.all([classPromise, racePromise])
			.then(function(results){
				var object = {};
				object.ID = data.ID;
				object.Name = data.Name;
				object.AccountAID = data.AccountAID;
				object.Experiance = data.Experiance;
				object.Age = data.Age;
				object.Height = data.Height;
				object.Strength = data.Strength;
				object.Dexterity = data.Dexterity;
				object.Constitution = data.Constitution;
				object.Inteligence = data.Inteligence;
				object.Wisdom = data.Wisdom;
				object.Charisma = data.Charisma;
				object.HP = data.HP;
				object.AC = data.AC;
				object.Initative = data.Initative
				object.Fortitude = data.Fortitude
				object.Reflex = data.Reflex;
				object.Will = data.Will;
				object.Grapple = data.Grapple;
				object.BaseAttack = data.BaseAttack;
				object.SpellResistance = data.SpellResistance;
				object.TouchAC = data.TouchAC;
				object.FlatFootedAC = data.FlatFootedAC;
				object.Class = results[0];
				object.Race = results[1];
				resolve(object);
			});
		});
}

function Get(id, callback){
	if(id == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function(resolve, reject){
				databaseObject.Procedure('sp_GetCharacterByID', [intID], function(data){
					if(data.length > 0){
						Character(data[0]).then(function(value){
							resolve(value);
						},
						function(value){
							reject(value);
						});
					}
					else{
						reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}
//	TODO:	Update to only pull in the ID values fo the matching characters.
function GetByAccount(id){
	if(id == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function(resolve, reject){
				databaseObject.Procedure('sp_GetCharacterByAccount', [intID], function(rows){
					if(rows.length > 0){
						var characterPromises = rows.map(function(row){
							return Character(row);
						});

						Promise.settle(characterPromises).then(function(characters) {
							var characterArray = [];
							characters.forEach(function(item){
								if(item.isFulfilled())
									characterArray.push(item.value());
							});
							resolve(characterArray);
						});
					}
					else{
						reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}

function GetBySession(sessionID, callback){
	if(sessionID == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intSessionID = parseInt(sessionID);
		if(intSessionID > 0){
			return new Promise(function(resolve, reject){
				databaseObject.Procedure('sp_GetSessionCharacters', [intSessionID], function(data){
					if(data.length > 0){
						Character(data[0]).then(function (character){
							resolve(character);
						});
					}
					else{
						reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}