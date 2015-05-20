"Use Strict";

var async = require('async');
var databaseObject = require('../Database');
var classManager = require('../Managers/ClassManager');
var raceManager = require('../Managers/RaceManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get,
	GetByAccount: GetByAccount,
	GetBySession: GetBySession
};

function Character(data, callback){
	if(data == undefined)
		callback('Passed data undefined', Failed('Missing parameter'));
	async.parallel([
			function(parallelCallback){
				classManager.Get(data.ClassID, function(err, result){
					parallelCallback(err, result)
				});
			},
			function(parallelCallback){
				raceManager.Get(data.RaceID, function(err, result){
					parallelCallback(err, result)
				});
			}
		],
		function(err, results){
			if(results.length > 1 && !err){
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
				callback(undefined, object);
			}
			else{
				callback(err, undefined);
			}
		}
	);
}

function Get(id, callback){
	if(id == undefined){
		callback('Id undefined', new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetCharacterByID', [intID], function(err, data){
				if(data.length > 0 && !err){
					Character(data[0], function(err, value){
						callback(err, value);
					});
				}
				else{
					callback(err, new Failed('No matching results'));
				}
			});
		}
		else{
			callback(indID, new Failed('Invalid parameter'));
		}
	}
}
//	TODO:	Update to only pull in the ID values fo the matching characters.
function GetByAccount(id, callback){
	if(id == undefined){
		callback('Id undefined', new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetCharacterByAccount', [intID], function(err, data){
				if(data.length > 0 && !err){
					async.map(data, function(item, eachCallback){
							Character(item, function(err, value){
								eachCallback(err, value);
							});
						},
						function(err, results){
							if(err != undefined){
								callback(err, undefined);
							}
							else{
								callback(undefined, results);
							}
						});
				}
				else{
					callback(err, new Failed('No matching results'));
				}
			});
		}
		else{
			callback(intID, new Failed('Invalid parameter'));
		}
	}
}

function GetBySession(sessionID, callback){
	if(sessionID == undefined){
		callback('Session id undefined', new Failed('Missing parameter'));
	}
	else{
		var intSessionID = parseInt(sessionID);
		if(intSessionID > 0){
			databaseObject.Procedure('sp_GetSessionCharacters', [intSessionID], function(err, data){
				if(data.length > 0 && !err){
					var length = data.length;
					var characterLists = [];
					async.map(data, function(item, eachCallback){
							Character(item, function(err, value){
								eachCallback(err, value);
							});
						},
						function(err, results){
							if(err != undefined){
								callback(err, undefined);
							}
							else{
								callback(undefined, results);
							}
						});	
				}
				else{
					callback(err, new Failed('No matching results'));
				}
			});
		}
		else{
			callback(intSessionID, new Failed('Invalid parameter'));
		}
	}
}