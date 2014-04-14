var databaseObject = require('./Database.js');

function Version(row){
	//	In some cases the row will be a join of the class and contain the items prefixed with "Class"
	if(row.VersionID == undefined){
		this.ID = row.ID;
		this.Name = row.Name;
	}
	else{
		this.ID = row.VersionID;
		this.Name = row.VersionName;
	}
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
		databaseObject.Procedure('sp_GetVersion', [id], function(rows){
			if(rows.length > 0){
				var value = new Version(rows[0]);
				value.Success = true;
				callback(value);
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

module.exports = {
	Get: function (id, callback){
		Get(id, callback);
	},
	FromObject: function(row){
		return new Version(row);
	}
};