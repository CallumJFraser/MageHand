var async = require('async');
var databaseObject = require('../Database');
var sizeManager = require('../Managers/SizeManager');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: function (id, callback){
		Get(id, callback);
	},
	List: function (callback){
		GetList(callback);
	}
};

function Race(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	async.parallel(
		[
			function(parallelCallback){
				sizeManager.Get(row.SizeID, function(result){
					parallelCallback(null, result)
				});
			},
			function(parallelCallback){
				versionManager.Get(row.VersionID, function(result){
					parallelCallback(null, result)
				});
			}
		],
		function(err, results){
			if(err != undefined)
				callback(undefined);
			var object = {};
			object.ID = row.ID;
			object.Name = row.Name;
			object.Description = row.Description;
			object.Speed = row.Speed;
			object.Size = results[0];
			object.Version = results[1];
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
			databaseObject.Procedure('sp_GetRace', [id], function(rows){
				if(rows.length > 0){
					Race(rows[0], function(value){
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
	databaseObject.Procedure('sp_GetRaces', [], function(rows){
		if(rows.length > 0){
			async.map(rows, function(item, eachCallback){
					Race(item, function(value){
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