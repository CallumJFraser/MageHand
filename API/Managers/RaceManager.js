"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var sizeManager = require('../Managers/SizeManager');
var versionManager = require('../Managers/VersionManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get,
	List: GetList
};

function Race(row){
	if(row == undefined) {
		return Promise.reject(new Failed('Missing parameter'));
	}
	var sizePromise = sizeManager.Get(row.SizeID);
	var versionPromise = versionManager.Get(row.VersionID);

	return new Promise(function(resolve, reject){
		Promise.join(
			sizePromise,
			versionPromise,
			function(sizeObject, versionObject) {
				var object = {};
				object.ID = row.ID;
				object.Name = row.Name;
				object.Description = row.Description;
				object.Speed = row.Speed;
				object.Size = sizeObject;
				object.Version = versionObject;
				resolve(object);
			}
		);
	});
}

function Get(id){
	if (id == undefined) {
		return Promise.reject(new Failed('Missing parameter'));
	} else {
		var intID = parseInt(id);
		if (intID > 0) {
			return new Promise(function (resolve, reject) {
				databaseObject.Procedure('sp_GetRace', [id], function(rows){
					if(rows.length > 0){
						Race(rows[0]).then(function(value){
							resolve(value);
						});
					} else {
						reject(new Failed('No matching results'));
					}
				});
			});
		} else {
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}

function GetList(){
	return new Promise(function(resolve, reject){
		databaseObject.Procedure('sp_GetRaces', [], function(rows){
			if(rows.length > 0){
				var racePromises = rows.map(function(row){
					return Race(row);
				});

				Promise.settle(racePromises).then(function(races) {
					var raceArray = [];
					races.forEach(function(item){
						if(item.isFulfilled())
							raceArray.push(item.value());
					});
					resolve(raceArray);
				});
			}
			else{
				reject(new Failed('No matching results'));
			}
		});
	});
}