var databaseObject = require('./Database');

function Version(row, callback){
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

function Get(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetVersion', [intID], function(data){
				if(data.length > 0){
					Version(data[0],function(value){
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
		Get(id, callback);
	}
};