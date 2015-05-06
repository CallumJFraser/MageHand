"Use Strict";

var async = require('async');
var databaseObject = require('../Database');
var Failed = require('../Failed');

module.exports = {
	Get: GetByID
};

function Class(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	var object = {};
	object.ID = row.ID;
	object.Start = row.Start;
	object.End = row.End;
	object.RunthroughID = row.RunthroughID;
	callback(object);
}

function GetByID(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetSessionByID', [id], function(rows){
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
