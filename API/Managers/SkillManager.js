"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var Failed = require('../Failed');
	
module.exports = {
	Get: Get,
	GetByCharacter: GetByCharacter
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
	return callback(object);
}

function CharacterSkill(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	return new Promise(function(fulfill, reject) {
		Get(row.SkillID, function(result){
			var object = {};
			object.CharacterID = row.CharacterID;
			object.Ranks = row.Ranks;
			object.Info = row.Info;
			object.MiscModifier = row.MiscModifier;
			object.Skill = result;
			fulfill(object);
		});
	});
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
					Promise.map(
						data,
						function(item){
							return CharacterSkill(item, function(value){
								return value;
							});
						}).then(function(results) {
							callback(results);
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