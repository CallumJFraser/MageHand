var async = require('async');
var databaseObject = require('./Database');
var versionManager = require('./VersionManager');

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