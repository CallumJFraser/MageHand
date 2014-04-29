var databaseObject = require('./Database');
var versionManager = require('./VersionManager');

function Size(row, callback){
	console.log('size - call');
	if(row == undefined)
		return new Failed('Missing parameter');
	var object = {};
	object.ID = row.ID;
	object.Name = row.Name;
	callback(object);
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
}

function getByID(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetSize', [id], function(rows){
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

module.exports = {
	Get: function (id, callback){
		getByID(id, callback);
	}
};