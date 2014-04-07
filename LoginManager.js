var databaseObject = require('./Database.js');

function Login(row){
	this.Login = true;
	this.SessionID = row.Created + row.Hash + row.AID + row.LastLogin;
}

Login.prototype.Session = function(){
	var manager = this;
	return manager.SessionID;
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
					var sessionID = rows[0].Created + rows[0].Hash + rows[0].AID + date.getTime();
					var account = {
						Success: true,
						AccountID: rows[0].ID,
						AID: rows[0].AID,
						Username: rows[0].Username,
						SessionID: sessionID
					};
					callback(account);
				});
			}
			else{
				callback(new Failed('Incorrect sign-in details'));
			}
		});
	}
}

function authorise(aID, sessionID, callback){
	if(aID == undefined || sessionID == undefined){
		callback(new Failed('Missing authentication parameters'));
	}
	else{
		var query = "SELECT * FROM Account WHERE AID='" + aID + "'";
		databaseObject.Query(query, function(rows){
			if(rows.length > 0 ){
				var login = new Login(rows[0]);
				if(login.Session() == sessionID){
					callback({ Success: true, SessionID: sessionID });
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
	Authorise: function (aID, sessionID, username, callback){
		authorise(aID, sessionID, username, callback);
	}
};