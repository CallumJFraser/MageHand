var async = require('async');
var databaseObject = require('../Database');
var storyManager = require('../Managers/StoryManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get
};

function Runthrough(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	async.map(
		[row.StoryID],
		function(item, parallelCallback){
			storyManager.Get(item, function(result){
				parallelCallback(undefined, result)
			});
		},
		function(err, results){
			if(err != undefined)
				callback(undefined);
				
			var object = {};
			object.ID = row.ID;
			object.Story = results[0];
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
			databaseObject.Procedure('sp_GetRunthroughByID', [id], function(rows){
				if(rows.length > 0){
					Runthrough(rows[0], function(value){
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