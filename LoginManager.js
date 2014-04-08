var databaseObject = require('./Database.js');

function Login(row){
	this.Success = true;
	this.AccountID = row.ID;
	this.Username = row.Username;
	this.AID = row.AID;
	this.SID = row.Created + row.Hash + row.AID + row.LastLogin;
}

Login.prototype.Session = function(){
	return this.SID;
}

function Failed(reason){
	this.Success = false;
	this.Reason = reason;
}

function login(username, password, callback){
	if(username == undefined || password == undefined){
		callback(new Failed('Incorrect sign-in details'));
	}
	else{
		var date = new Date();
		databaseObject.Procedure('sp_Login', [username, password, date.getTime()], function(rows){
			if(rows.length > 0){
				callback(new Login(rows[0]));
			}
			else{
				callback(new Failed('Incorrect sign-in details'));
			}
		});
	}
}

function authorise(aID, sID, callback){
	if(aID == undefined || sID == undefined){
		callback(new Failed('Missing authentication parameters'));
	}
	else{
		var query = "SELECT * FROM Account WHERE AID='" + aID + "'";
		databaseObject.Query(query, function(rows){
			if(rows.length > 0 ){
				var login = new Login(rows[0]);
				if(login.Session() == sID){
					callback({ Success: true, SID: sID });
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

module.exports = {
	Login: function(username, password, callback){
		login(username, password, callback);
	},
	Authorise: function (aID, sID, callback){
		authorise(aID, sID, callback);
	}
};