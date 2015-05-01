var async = require('async');
var databaseObject = require('../Database');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get,
	Search: Search
};

function Story(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	async.map(
		[row.VersionID],
		function(item, parallelCallback){
			versionManager.Get(item, function(result){
				parallelCallback(undefined, result)
			});
		},
		function(err, results){
			if(err != undefined)
				callback(undefined);
				
			var object = {};
			object.ID = row.ID;
			object.Name = row.Name;
			object.Title = row.Title;
			object.Description = row.Description;
			object.ParentID = row.ParentID;
			object.Version = results[0];
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
			databaseObject.Procedure('sp_GetStoryByID', [id], function(rows){
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
		else{
			callback(new Failed('Invalid parameter'));
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