var databaseObject = require('./Database.js');

function SkillType(row){
	this.Success = true;
	this.AccountID = row.ID;
	this.Username = row.Username;
	this.AID = row.AID;
	this.SID = row.Created + row.Hash + row.AID + row.LastLogin;
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
}

function getSkillType(skillTypeID, callback){
	if(characterID == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetSkillType', [skillTypeID], function(rows){
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
	GetSkillType: function (skillTypeID, callback){
		getSkillType(skillTypeID, callback);
	}
};