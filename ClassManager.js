var databaseObject = require('./Database');
var versionManager = require('./VersionManager');
var Failed = require('./Failed');

module.exports = {
	Get: function (id, callback){
		GetByID(id, callback);
	}
};

function Class(row, callback){
	if(row == undefined)
		return new Failed('Missing parameter');
	var object = {};
	object.ID = row.ID;
	object.Name = row.Name;
	object.Description = row.Description;
	object.VersionID = row.VersionID;
	callback(object);
}

function GetByID(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetClass', [id], function(rows){
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