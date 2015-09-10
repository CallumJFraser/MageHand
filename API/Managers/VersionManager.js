"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var Failed = require('../Failed');

module.exports = {
	Get: Get
};

function Version(row){
	if(row == undefined)
		return Promise.reject(new Failed('Missing parameter'));
	var object = {};
	object.ID = row.ID;
	object.Name = row.Name;
	return Promise.resolve(object);
}

function Get(id){
	if(id == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function(resolve, reject){
				databaseObject.Procedure('sp_GetVersion', [intID], function(data){
					if(data.length > 0){
						Version(data[0]).then(resolve, reject);
					}
					else{
						reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}