var databaseObject = require('./Database.js');

function BasicAccount(row){
	this.ID = row.ID;
	this.AID = row.AID;
	this.Username = row.Username;
	this.Created = row.Created;
	this.Success = true;
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
}

function Account(row){
	this.ID = row.ID;
	this.AID = row.AID;
	this.Username = row.Username;
	this.Email = row.Email;
	this.Hash = row.Hash;
	this.Created = row.Created;
	this.LastLogin = row.LastLogin;
}

function create(username, password, callback){
	if(username == undefined || password == undefined){
		callback(new Failed('Missing parameter'));
	}
	var query = "INSERT INTO Account (ID, AID, Username, Email, Hash, Created, Password) VALUES (1, '1', 'CallumJFraser', 'email@callumjfraser.com', 'hash', 1395788542978, 'password')"
}

function getBasicByID(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetAccountByAID', id, function(rows){
			if(rows.length > 0){
				var value = new BasicAccount(rows[0]);
				callback(value);
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

function getBasicByUsername(username, callback){
	if(username == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetAccountByUsername', [username], function(rows){
			if(rows.length > 0){
				callback(new BasicAccount(rows[0]));
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

function getBasicByEmail(email, callback){
	if(email == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetAccountByEmail', [email], function(rows){
			if(rows.length > 0){
				callback(new BasicAccount(rows[0]));
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

function searchBasic(text, callback){
	if(text == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Query('sp_SearchAccounts', [text], function(rows){
			if(rows.length > 0){
				callback(new BasicAccount(rows[0]));
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}

module.exports = {
	GetByID: function(id, callback){
		getBasicByID(id, callback);
	},
	GetByUsername: function(username, callback){
		getBasicByUsername(username, callback);
	},
	GetByEmail: function(email, callback){
		getBasicByEmail(email, callback);
	},
	Search: function(text, callback){
		searchBasic(text, callback);
	}
};