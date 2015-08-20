"Use Strict";

var Promise = require("bluebird");
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
		return Promise.reject(new Failed('Missing parameter'));

	return new Promise(function(fulfill, reject) {
		var object = {};
		object.ID = row.ID;
		object.AID = row.AID;
		object.Username = row.Username;
		object.Created = row.Created;
		object.Success = true;
		fulfill(object);
	});
}

function Account(row){
	if(row == undefined)
		return Promise.reject(new Failed('Missing parameter'));
	return new Promise(function(fulfill, reject) {
		var object = {};
		object.ID = row.ID;
		object.AID = row.AID;
		object.Username = row.Username;
		object.Email = row.Email;
		object.Hash = row.Hash;
		object.Created = row.Created;
		object.LastLogin = row.LastLogin;
		if(object.ID != undefined && object.AID != undefined && object.Username != undefined)
			object.Success = true;
		fulfill(object);
	});
}

function GetBasicByID(id){
	if(id == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		var intID = parseInt(id);
		if(intID > 0){
			return new Promise(function (fulfill, reject){
				databaseObject.Procedure('sp_GetAccountByAID', [intID], function(rows){
					if(rows.length > 0){
						fulfill(BasicAccount(rows[0]));
					}
					else{
						reject(new Failed('No matching results'));
					}
				});
			});
		}
		else{
			return Promise.reject(new Failed('Invalid parameter'));
		}
	}
}

function GetBasicByUsername(username){
	if(username == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		return new Promise(function (fulfill, reject){
			databaseObject.Procedure('sp_GetAccountByUsername', [username], function(rows){
				if(rows.length > 0){
					fulfill(BasicAccount(rows[0]));
				}
				else{
					reject(new Failed('No matching results'));
				}
			});
		});
	}
}

function GetBasicByEmail(email){
	if(email == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		return new Promise(function (fulfill, reject){
			databaseObject.Procedure('sp_GetAccountByEmail', [email], function(rows){
				if(rows.length > 0){
					fulfill(new BasicAccount(rows[0]));
				}
				else{
					reject(new Failed('No matching results'));
				}
			});
		});
	}
}

function SearchBasic(text){
	if(text == undefined){
		return Promise.reject(new Failed('Missing parameter'));
	}
	else{
		return new Promise(function (fulfill, reject){
			databaseObject.Procedure('sp_SearchAccounts', [text], function(rows){
				if(rows.length > 0){
					fulfill(new BasicAccount(rows[0]));
				}
				else{
					reject(new Failed('No matching results'));
				}
			});
		});
	}
}

function Create(accountObject){
	//	TODO: Define account params, atm using the full account, but will need more information.
	if (accountObject && accountObject.Username && accountObject.Email) {
		return new Promise(function(fulfill, reject){
			UsernameAllowed(accountObject.Username, accountObject.Email).then(function(allowed) {
				if(allowed) {
					Account(accountObject).then(function(account){
						if(account.Success) {
							databaseObject.Procedure('sp_CreateAccount', [account.AID, account.Username, account.Email, account.Hash, accountObject.Password], function(rows){
								if(rows.length > 0) {
									fulfill({ Success: true, ID: rows[0].ID });
								} else {
									reject(new Failed('No matching results'));
								}
							});
						} else {
							return Promise.reject(new Failed('Invalid object'));
						}
					});
				} else {
					return Promise.reject(new Failed('Username "' + accountObject.Username + '" already taken'));
				}
			},
			function() {
				return Promise.reject('Username "' + accountObject.Username + '" already taken');
			});
		});
	} else {
		return Promise.reject(new Failed('Missing parameter'));
	}
}

function UsernameAllowed(username, email){
	return new Promise(function(fulfill, reject){
		databaseObject.Procedure('sp_CheckAccount', [username, email], function(rows){
			if(rows.length > 0){
				fulfill(rows[0].Count == 0);
			}
			else{
				reject(false);
			}
		});
	});
}
