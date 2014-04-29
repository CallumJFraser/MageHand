var databaseObject = require('./Database');

function SkillType(row, callback){
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
			databaseObject.Procedure('sp_GetSkillType', [id], function(rows){
				if(rows.length > 0){
					var value = new SkillType(rows[0]);
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
		return new SkillType(row);
	}
};