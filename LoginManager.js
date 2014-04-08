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
		var query = "SELECT * FROM Account WHERE Username = '" + username + "' AND Password='" + password + "'";
		databaseObject.Query(query, function(rows){
			if(rows.length > 0){
				var date = new Date();
				var updateQuery = "UPDATE Account SET LastLogin = '" + date.getTime() + "' WHERE ID = '" + rows[0].ID + "' AND AID = '" + rows[0].AID + "'";
				return databaseObject.Query(updateQuery, function(temp){
					var account = new Login(rows[0]);
					account.SID = rows[0].Created + rows[0].Hash + rows[0].AID + date.getTime();
					callback(account);
				});
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