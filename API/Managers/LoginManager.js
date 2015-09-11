"Use Strict";

var Promise = require("bluebird");
var databaseObject = require('../Database');
var Failed = require('../Failed');

module.exports = {
	Login: Login,
	Authorise: Authorise
};

function LoginResponse(row){
	if(row == undefined)
		return new Failed('Missing parameter');
	this.Success = true;
	this.AccountID = row.ID;
	this.Username = row.Username;
	this.AID = row.AID;
	this.SID = row.Created + row.Hash + row.AID + row.LastLogin;
}

LoginResponse.prototype.Session = function(){
	return this.SID;
}

function AuthorisationResponse(sID){
	var object = {};
	object.Success = true;
	object.SID = sID;
	return object;
}

function Login(username, password){
	if(username == undefined || password == undefined){
		return Promise.reject(new Failed('Incorrect sign-in details'));
	} else {
		var date = new Date();
		return new Promise(function (resolve, reject){
			databaseObject.Procedure('sp_Login', [username, password, date.getTime()], function(rows){
				if(rows.length > 0){
					resolve(new LoginResponse(rows[0]));
				}
				else{
					reject(new Failed('Incorrect sign-in details'));
				}
			});
		});
	}
}

function Authorise(aID, sID){
	if(aID == undefined || sID == undefined){
		return Promise.reject(new Failed('Missing authentication parameters'));
	} else {
		return new Promise(function (resolve, reject){
			databaseObject.Procedure('sp_Authorise', [aID], function(rows){
				if(rows.length > 0 ){
					var login = new LoginResponse(rows[0]);
					if(login.Session() == sID){
						resolve(AuthorisationResponse(sID));
					}
					else{
						reject(new Failed('Incorrect authentication details'));
					}
				}
				else{
					reject(new Failed('Incorrect authentication details'));
				}
			});
		});
	}
}