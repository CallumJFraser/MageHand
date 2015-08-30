"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var storyManager = require('../Managers/StoryManager');
var Failed = require('../Failed');

module.exports = {
	Get: Get
};

function Runthrough(row){
	if(!row)
		return Promise.reject(new Failed('Missing parameter'));

	return new Promise(function(resolve, reject){
		var object = {};
		object.ID = row.ID;
		storyManager.Get(row.StoryID).then(function(storyObject){
			if(storyObject) {
				object.Story = storyObject;
				resolve(object);
			} else {
				reject(new Failed('Missing story'));
			}
		});
	});
}

function Get(id){
	if (!id) {
		return Promise.reject(new Failed('Missing parameter'));
	} else {
		var intID = parseInt(id);
		if(intID > 0) {
			return new Promise(function(resolve, reject){
				databaseObject.Procedure('sp_GetRunthroughByID', [id], function(rows){
					if (rows.length > 0) {
						Runthrough(rows[0]).then(function(value){
							resolve(value);
						},
						function(err) {
							reject(err);
						});
					} else {
						reject(new Failed('No matching results'));
					}
				});
			});
		} else {
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}