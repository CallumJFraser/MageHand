"Use Strict";

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

function Login(username, password, callback){
	if(username == undefined || password == undefined){
		callback(new Failed('Incorrect sign-in details'));
	}
	else{
		var date = new Date();
		databaseObject.Procedure('sp_Login', [username, password, date.getTime()], function(rows){
			if(rows.length > 0){
				callback(new LoginResponse(rows[0]));
			}
			else{
				callback(new Failed('Incorrect sign-in details'));
			}
		});
	}
}

function Authorise(aID, sID, callback){
	if(aID == undefined || sID == undefined){
		callback(new Failed('Missing authentication parameters'));
	}
	else{
		databaseObject.Procedure('sp_Authorise', [aID], function(rows){
			if(rows.length > 0 ){
				var login = new LoginResponse(rows[0]);
				if(login.Session() == sID){
					callback(AuthorisationResponse(sID));
				}
				else{
					callback(new Failed('Incorrect authentication details'));
				}
			}
			else{
				callback(new Failed('Incorrect authentication details'));
			}
		});
	}
}