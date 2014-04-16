var databaseObject = require('./Database.js');
//var sizeManager = require('./SizeManager.js');
//var versionManager = require('./VersionManager.js');

function Race(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	//	In some cases the row will be a join of the class and contain the items prefixed with "Class"
	if(row.RaceID == undefined){
		this.ID = row.ID;
		this.Name = row.Name;
		this.Description = row.Description;
		this.Speed = row.Speed;
	}
	else{
		this.ID = row.RaceID;
		this.Name = row.RaceName;
		this.Description = row.RaceDescription;
		this.Speed = row.RaceSpeed;
	}
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
					var value = new Class(rows[0]);
					value.Success = true;
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
	}
};