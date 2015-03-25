var databaseObject = require('../Database');
var Failed = require('../Failed');

module.exports = {
	Get: function(id, callback){
		GetBasicByID(id, callback);
	},
	GetByUsername: function(username, callback){
		GetBasicByUsername(username, callback);
	},
	GetByEmail: function(email, callback){
		GetBasicByEmail(email, callback);
	},
	Search: function(text, callback){
		SearchBasic(text, callback);
	}
};

function BasicAccount(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	this.ID = row.ID;
	this.AID = row.AID;
	this.Username = row.Username;
	this.Created = row.Created;
	this.Success = true;
}

function Account(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	this.ID = row.ID;
	this.AID = row.AID;
	this.Username = row.Username;
	this.Email = row.Email;
	this.Hash = row.Hash;
	this.Created = row.Created;
	this.LastLogin = row.LastLogin;
}

function Create(username, password, callback){
	if(username == undefined || password == undefined){
		callback(new Failed('Missing parameter'));
	}
	var query = "INSERT INTO Account (ID, AID, Username, Email, Hash, Created, Password) VALUES (1, '1', 'CallumJFraser', 'email@callumjfraser.com', 'hash', 1395788542978, 'password')"
}

function GetBasicByID(id, callback){
	if(id == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetAccountByAID', [intID], function(rows){
				if(rows.length > 0){
					var value = new BasicAccount(rows[0]);
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

function GetBasicByUsername(username, callback){
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

function GetBasicByEmail(email, callback){
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

function SearchBasic(text, callback){
	if(text == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_SearchAccounts', [text], function(rows){
			if(rows.length > 0){
				callback(new BasicAccount(rows[0]));
			}
			else{
				callback(new Failed('No matching results'));
			}
		});
	}
}