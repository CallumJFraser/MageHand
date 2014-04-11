var databaseObject = require('./Database.js');

function SkillType(row){
	this.ID = row.ID;
	this.Name = row.Name;
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
		databaseObject.Procedure('sp_GetSkillType', [id], function(rows){
			if(rows.length > 0){
				var value = new SkillType(rows[0]);
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
	}
};