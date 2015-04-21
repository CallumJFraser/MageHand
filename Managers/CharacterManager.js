var async = require('async');
var databaseObject = require('../Database');
var classManager = require('../Managers/ClassManager');
var raceManager = require('../Managers/RaceManager');
var Failed = require('../Failed');

module.exports = {
	Get: function(id, callback){
		Get(id, callback);
	},
	GetByAccount: function(id, callback){
		GetByAccount(id, callback);
	},
	GetBySession: function(id, callback){
		GetBySession(id, callback);
	}
};

function Character(data, callback){
	if(data == undefined)
		return new Failed('Missing parameter');
	async.parallel([
			function(parallelCallback){
				classManager.Get(data.ClassID, function(result){
					parallelCallback(null, result)
				});
			},
			function(parallelCallback){
				raceManager.Get(data.RaceID, function(result){
					parallelCallback(null, result)
				});
			}
		],
		function(err, results){
			if(results.length > 1){
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
				callback(object);
			}
		}
	);
}

function Get(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetCharacterByID', [intID], function(data){
				if(data.length > 0){
					Character(data[0], function(value){
						callback(value);
					});
				}
				else{
					callback(new Failed('No matching results'));
				}
			});
		}
		else{
			callback(new Failed('Invalid parameter'));
		}
	}
}
//	TODO:	Update to only pull in the ID values fo the matching characters.
function GetByAccount(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetCharacterByAccount', [intID], function(data){
				if(data.length > 0){
					async.map(data, function(item, eachCallback){
							Character(item, function(value){
								eachCallback(null, value);
							});
						},
						function(err, results){
							if(err != undefined){
								console.log('Error');
							}
							else{
								callback(results);
							}
						});
				}
				else{
					callback(new Failed('No matching results'));
				}
			});
		}
		else{
			callback(new Failed('Invalid parameter'));
		}
	}
}

function GetBySession(sessionID, callback){
	if(sessionID == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intSessionID = parseInt(sessionID);
		if(intSessionID > 0){
			databaseObject.Procedure('sp_GetSessionCharacters', [intSessionID], function(data){
				if(data.length > 0){
					var length = data.length;
					var characterLists = [];
					async.map(data, function(item, eachCallback){
							Character(item, function(value){
								eachCallback(null, value);
							});
						},
						function(err, results){
							if(err != undefined){
								console.log('Error');
							}
							else{
								callback(results);
							}
						});	
				}
				else{
					callback(new Failed('No matching results'));
				}
			});
		}
		else{
			callback(new Failed('Invalid parameter'));
		}
	}
}