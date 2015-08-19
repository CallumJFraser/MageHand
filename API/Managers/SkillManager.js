"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var Failed = require('../Failed');
	
module.exports = {
	Get: Get,
	GetByCharacter: GetByCharacter
};

function Skill(row){
	if(row == undefined)
		return Promise.reject(new Failed('Missing parameter'));
	return new Promise(function(fulfill, reject) {
		var object = {};
		object.ID = row.ID;
		object.Name = row.Name;
		object.BaseStatID = row.BaseStatID;
		object.Usable = row.Usable;
		object.Description = row.Description;
		object.Version = {};
		fulfill(object);
	});
}

function CharacterSkill(row){
	if(row == undefined)
		return Promise.reject(new Failed('Missing parameter'));
	return new Promise(function(fulfill, reject) {
		var object = {};
		object.CharacterID = row.CharacterID;
		object.Ranks = row.Ranks;
		object.Info = row.Info;
		object.MiscModifier = row.MiscModifier;
		Get(row.SkillID).then(function(value){
			object.Skill = value;
			fulfill(object);
		},
		function(){
			reject();
		});
	});
}

function Get(id){
	if(id == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function(fulfill, reject){
				databaseObject.Procedure('sp_GetSkill', [id], function(rows){
					if(rows.length > 0){
						fulfill(Skill(rows[0]));
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

function GetByCharacter(id){
	if(id == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function(fulfill, reject){
				databaseObject.Procedure('sp_GetCharactersSkill', [intID], function(data){
					if(data.length > 0){
						Promise.map(
							data,
							function(item){
								return CharacterSkill(item);
							}).then(function(result){
								fulfill(result);
							}, function() {
								reject();
							});
					}
					else{
						return Promise.reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}