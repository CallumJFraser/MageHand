"Use Strict";

var databaseObject = require('../Database');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get
};

function Size(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	var object = {};
	object.ID = row.ID;
	object.Name = row.Name;
	callback(object);
}

function Get(id, callback){
	if(id == undefined){
		callback('Id undefined', new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetSize', [id], function(err, rows){
				if(rows.length > 0){
					Size(rows[0], function(value){
						callback(undefined, value);
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