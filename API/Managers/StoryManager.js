"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get,
	Search: Search
};

function Story(row){
	if(row == undefined)
		return Promise.reject(new Failed('Missing parameter'));
	return new Promise(function (resolve, reject){
		var object = {};
		object.ID = row.ID;
		object.Name = row.Name;
		object.Title = row.Title;
		object.Description = row.Description;
		object.ParentID = row.ParentID;
		versionManager.Get(row.VersionID).then(function(versionObject){
			object.Version = versionObject;
			resolve(object);
		},
		function(error){
			reject(error);
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
				databaseObject.Procedure('sp_GetStoryByID', [id], function(rows){
					if(rows.length > 0){
						Story(rows[0]).then(function(storyObject){
							resolve(storyObject);
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

function Search(term, callback){
	if(term == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_SearchStory', [term], function(rows){
			if(rows.length > 0){
				Story(rows[0], function(value){
					callback(value);
				});
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}