"Use Strict";

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
			storyManager.Get(item, function(err, result){
				parallelCallback(err, result)
			});
		},
		function(err, results){
			if(err)
				callback(err, undefined);

			var object = {};
			object.ID = row.ID;
			object.Story = results[0];
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
			databaseObject.Procedure('sp_GetRunthroughByID', [id], function(err, rows){
				if(rows.length > 0 && !err){
					Runthrough(rows[0], function(err, value){
						callback(err, value);
					});
				}
				else{
					callback(err, new Failed('No matching results'));
				}
			});
		}
		else{
			callback('Invalid id', new Failed('Invalid parameter'));
		}
	}
}