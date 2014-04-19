var databaseObject = require('./Database.js');

function Story(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	if(row.StoryID == undefined && row.StoryName == undefined && row.StoryTitle == undefined && row.StoryDescription == undefined){
		this.ID = row.ID;
		this.Name = row.Name;
		this.Title = row.Title;
		this.Description = row.Description;
	}
	else{
		this.ID = row.StoryID;
		this.Name = row.StoryName;
		this.Title = row.StoryTitle;
		this.Description = row.StoryDescription;
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
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetStoryByID', [id], function(rows){
				if(rows.length > 0){
					var value = new Story(rows[0]);
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
		return new Story(row);
	}
};