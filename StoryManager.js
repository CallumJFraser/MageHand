var async = require('async');
var databaseObject = require('./Database');
var versionManager = require('./VersionManager');

function Story(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	async.each([
			function(parallelCallback){
				sizeManager.Get(row.VersionID, function(result){
					parallelCallback(null, result)
				});
			}
		],
		function(err, results){
			if(results.length > 0){
				var object = {};
				object.ID = row.ID;
				object.Name = row.Name;
				object.Title = row.Title;
				object.Description = row.Description;
				object.VersionID = results[0];
				callback(object);
			}
		}
	);
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
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

module.exports = {
	Get: function (id, callback){
		Get(id, callback);
	}
};