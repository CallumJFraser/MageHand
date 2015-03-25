var async = require('async');
var databaseObject = require('../Database');
var Failed = require('../Failed');
	
module.exports = {
	Get: function(id, callback){
		Get(id, callback);
	},
	GetByCharacter: function(id, callback){
		GetByCharacter(id, callback);
	}
};

function Skill(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	var object = {};
	object.ID = row.ID;
	object.Name = row.Name;
	object.BaseStatID = row.BaseStatID;
	object.Usable = row.Usable;
	object.Description = row.Description;
	object.Version = {};
	callback(object);
}

function CharacterSkill(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	async.map(
		[row.SkillID],
		function(item, parallelCallback){
			Get(item, function(result){
				parallelCallback(null, result);
			})
		},
		function (err, results){
			if(err != undefined)
				callback(undefined);
			var object = {};
			object.CharacterID = row.CharacterID;
			object.Ranks = row.Ranks;
			object.Info = row.Info;
			object.MiscModifier = row.MiscModifier;
			object.Skill = results[0];
			callback(object);
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
			databaseObject.Procedure('sp_GetSkill', [id], function(rows){
				if(rows.length > 0){
					Skill(rows[0], callback);
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

function GetByCharacter(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetCharactersSkill', [intID], function(data){
				if(data.length > 0){
					async.map(
						data,
						function(item, eachCallback){
							CharacterSkill(item, function(value){
								eachCallback(null, value);
							});
						},
						function(err, results){
							if(err != undefined){
								callback(undefined);
							}
							callback(results);
						}
					);
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