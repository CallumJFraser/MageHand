"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: GetByID,
	List: GetList
};

function Class(row){
	if(row == undefined) {
		return Promise.reject(new Failed('Missing parameter'));
	}

	return new Promise(function(resolve, reject){
		versionManager.Get(row.VersionID).then(function(version){
			var object = {};
			object.ID = row.ID;
			object.Name = row.Name;
			object.Description = row.Description;
			object.Version = version;
			resolve(object);
		});
	});
}

function GetByID(id){
	if(id == undefined){
		return new Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function(resolve, reject){
				databaseObject.Procedure('sp_GetClass', [id], function(rows){
					if(rows.length > 0){
						Class(rows[0]).then(resolve, reject);
					}
					else{
						reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return new Promise.reject(new Failed('Invalid parameter'));
		}
	}
}

function GetList(callback){
	databaseObject.Procedure('sp_GetClasses', [], function(rows){
		if(rows.length > 0){
			var characterLists = [];
			Promise.map(rows, function(item, eachCallback){
					Class(item, function(value){
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