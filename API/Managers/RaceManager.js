"Use Strict";

var async = require('async');
var databaseObject = require('../Database');
var sizeManager = require('../Managers/SizeManager');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get,
	List: GetList
};

function Race(row, callback){
	if(row == undefined)
		callback('Passed data undefined', Failed('Missing parameter'));
	async.parallel(
		[
			function(parallelCallback){
				sizeManager.Get(row.SizeID, function(err, result){
					parallelCallback(err, result)
				});
			},
			function(parallelCallback){
				versionManager.Get(row.VersionID, function(err, result){
					parallelCallback(err, result)
				});
			}
		],
		function(err, results){
			if(err)
				callback(err, undefined);
			var object = {};
			object.ID = row.ID;
			object.Name = row.Name;
			object.Description = row.Description;
			object.Speed = row.Speed;
			object.Size = results[0];
			object.Version = results[1];
			callback(undefined, object);
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
			databaseObject.Procedure('sp_GetRace', [id], function(err, rows){
				if(rows.length > 0 && !err){
					Race(rows[0], function(err, value){
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
	databaseObject.Procedure('sp_GetRaces', [], function(err, rows){
		if(rows.length > 0 && !err){
			async.map(rows, function(item, eachCallback){
					Race(item, function(err, value){
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
			callback(err, new Failed('No matching results'));
		}
	});
}