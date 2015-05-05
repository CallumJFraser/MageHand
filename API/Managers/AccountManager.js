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

function Create(accountObject, callback){
	//	TODO: Define account params, atm using the full account, but will need more information.
	if(accountObject == undefined){
		callback(new Failed('Missing parameter'));
	}
	else{
		UsernameAllowed(accountObject.Username, accountObject.Email, function(allowed){
			if(allowed){
				var account = new Account(accountObject);
				if(account.Success){
					databaseObject.Procedure('sp_CreateAccount', [account.AID, account.Username, account.Email, account.Hash, accountObject.Password], function(rows){
						if(rows.length > 0){
							callback({ Success: true, ID: rows[0].ID });
						}
						else{
							callback(new Failed('No matching results'));
						}
					});
				}
				else{
					callback(new Failed('Invalid object'));
				}
			}
			else{
				callback(new Failed('Username "' + accountObject.Username + '" already taken'))
			}
		});
	}
}

function UsernameAllowed(username, email, callback){
	databaseObject.Procedure('sp_CheckAccount', [username, email], function(rows){
		if(rows.length > 0){
			callback(rows[0].Count == 0);
		}
		else{
			callback(false);
		}
	});
}