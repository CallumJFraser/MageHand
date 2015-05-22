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
			versionManager.Get(item, function(err, result){
				parallelCallback(err, result)
			});
		},
		function(err, results){
			if(row == undefined)
				callback('Row undefined', Failed('Missing parameter'));
			if(err)
				callback(err, Failed('There was an error.'));
			var object = {};
			object.ID = row.ID;
			object.Name = row.Name;
			object.Description = row.Description;
			object.Version = results[0];
			callback(undefined, object);
		}
	);
}

function GetByID(id, callback){
	if(id == undefined){
		callback('Id undefined', new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetClass', [id], function(err, rows){
				if(rows.length > 0 && !err){
					Class(rows[0], function(err, value){
						callback(err, value);
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

function GetList(callback){
	databaseObject.Procedure('sp_GetClasses', [], function(err, rows){
		if(rows.length > 0 && !err){
			var characterLists = [];
			async.map(rows, function(item, eachCallback){
					Class(item, function(err, value){
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
				}
			);	
		}
		else{
			callback('No results', new Failed('No matching results'));
		}
	});
}