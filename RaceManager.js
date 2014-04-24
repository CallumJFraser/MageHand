var databaseObject = require('./Database.js');
//var sizeManager = require('./SizeManager.js');
//var versionManager = require('./VersionManager.js');

function Race(row){
	if(row == undefined)
		return new Failed('Missing parameter');

	this.ID = row.ID;
	this.Name = row.Name;
	this.Description = row.Description;
	this.Speed = row.Speed;
//	this.Size = sizeManager.FromObject(row);
//	this.Version = versionManager.FromObject(row);
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
			databaseObject.Procedure('sp_GetClass', [id], function(rows){
				if(rows.length > 0){
					var value = new Race(rows[0]);
					callback(value);
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
	},
	FromObject: function(row){
		return new Race(row);
	},
	FromID: function(id, callback){
		//
	}
};