"Use Strict";

var mysql = require('mysql');

var connection = undefined;

module.exports = new database({
		host	: 'localhost',
		user	: 'root',
		password: '',
		database: 'DnDBackend'
	});

function database(config){
	this.Configuration = config;
	var self = this;

	this.Start = function Start(){
		connection = mysql.createConnection(self.Configuration);
		connection.connect();
	};

	var checkConnection = function () {	
		if (!connection) {
			self.Start();
		}
	}

	this.Query = function Query(command, callback){
		checkConnection();
		connection.query(command, function(err, rows, fields){
			if(err){
				console.error('Database.query: ' + err);
			}
			else{
				callback(rows);
			}
		});
	};

	this.Procedure = function Procedure(procedure, params, callback){
		checkConnection();
		var procedureCall = 'CALL ' + procedure + ' (';
		for(var i = 0; i < params.length; i++){
			if(i > 0)
				procedureCall += ',';
			procedureCall += '"' + params[i] + '"';
		}
		procedureCall += ')';
		self.Query(procedureCall, function(rows){
			callback(rows[0]);
		});
	};
};
