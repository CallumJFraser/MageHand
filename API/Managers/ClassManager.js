"Use Strict";

var async = require('async');
var databaseObject = require('../Database');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: GetByID,
	List: GetList
};

function Class(row, callback){
	async.map(
		[row.VersionID],
		function(item, parallelCallback){
			versionManager.Get(item, function(result){
				parallelCallback(null, result)
			});
		},
		function(err, results){
			if(row == undefined)
				return new Failed('Missing parameter');
			var object = {};
			object.ID = row.ID;
			object.Name = row.Name;
			object.Description = row.Description;
			object.Version = results[0];
			callback(object);
		}
	);
}

function GetByID(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetClass', [id], function(rows){
				if(rows.length > 0){
					Class(rows[0], function(value){
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

function GetList(callback){
	databaseObject.Procedure('sp_GetClasses', [], function(rows){
		if(rows.length > 0){
			var characterLists = [];
			async.map(rows, function(item, eachCallback){
					Class(item, function(value){
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
				}
			);	
		}
		else{
			callback(new Failed('No matching results'));
		}
	});
}