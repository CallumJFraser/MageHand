"Use Strict";

var databaseObject = require('../Database');
var Failed = require('../Failed');

module.exports = {
	Get: GetBasicByID,
	GetByUsername: GetBasicByUsername,
	GetByEmail: GetBasicByEmail,
	Search: SearchBasic,
	Create: Create
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
	if(this.ID != undefined && this.AID != undefined && this.Username != undefined)
		this.Success = true;
}

function GetBasicByID(id, callback){
	if(id == undefined){
		callback('Id undefined', new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			databaseObject.Procedure('sp_GetAccountByAID', [intID], function(err, rows){
				if(rows.length > 0 && !err){
					var value = new BasicAccount(rows[0]);
					callback(undefined, value);
				}
				else{
					callback(err, new Failed('No matching results'));
				}
			});
		}
		else{
			callback(intID, new Failed('Invalid parameter'));
		}
	}
}

function GetBasicByUsername(username, callback){
	if(username == undefined){
		callback('Username undefined', new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetAccountByUsername', [username], function(err, rows){
			if(rows.length > 0 && !err){
				callback(undefined, new BasicAccount(rows[0]));
			}
			else{
				callback(err, new Failed('No matching results'));
			}
		});
	}
}

function GetBasicByEmail(email, callback){
	if(email == undefined){
		callback('Email undefined', new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_GetAccountByEmail', [email], function(err, rows){
			if(rows.length > 0 && !err){
				callback(undefined, new BasicAccount(rows[0]));
			}
			else{
				callback(err, new Failed('No matching results'));
			}
		});
	}
}

function SearchBasic(text, callback){
	if(text == undefined){
		callback('Query text undefined', new Failed('Missing parameter'));
	}
	else{
		databaseObject.Procedure('sp_SearchAccounts', [text], function(err, rows){
			if(rows.length > 0 && !err){
				callback(undefined, new BasicAccount(rows[0]));
			}
			else{
				callback(err, new Failed('No matching results'));
			}
		});
	}
}

function Create(accountObject, callback){
	//	TODO: Define account params, atm using the full account, but will need more information.
	if(accountObject == undefined){
		callback('Account undefined', new Failed('Missing parameter'));
	}
	else{
		UsernameAllowed(accountObject.Username, accountObject.Email, function(allowed){
			if(allowed){
				var account = new Account(accountObject);
				if(account.Success){
					databaseObject.Procedure('sp_CreateAccount', [account.AID, account.Username, account.Email, account.Hash, accountObject.Password], function(err, rows){
						if(rows.length > 0 && !err){
							callback(undefined, { Success: true, ID: rows[0].ID });
						}
						else{
							callback(err, new Failed('No matching results'));
						}
					});
				}
				else{
					callback(account.Success, new Failed('Invalid object'));
				}
			}
			else{
				callback(allowed, new Failed('Username "' + accountObject.Username + '" already taken'))
			}
		});
	}
}

function UsernameAllowed(username, email, callback){
	databaseObject.Procedure('sp_CheckAccount', [username, email], function(err, rows){
		if(rows.length > 0 && !err){
			callback(undefined, rows[0].Count == 0);
		}
		else{
			callback(err, false);
		}
	});
}
