var mysql = require('mysql');

var connection = {};

var self = module.exports = {
	Configuration: {
		host	: 'localhost',
		user	: 'root',
		password: '',
		database: 'DnDBackend'
	},
	Restart: function(config){
		Restart(config);
	},
	Query: function(command, callback){
		Query(command, callback);
	},
	Procedure: function(procedure, params, callback){
		Procedure(procedure, params, callback);
	}
};

function Restart(config){
	if(config != undefined){
		Configuration = {
			host     : config.host,
			user     : config.user,
			password : config.password,
			database : config.database
		};
	}
	connection = mysql.createConnection(self.Configuration);
	connection.connect();
};
	//
function Query(command, callback){
	connection.query(command, function(err, rows, fields){
		if(err){
			console.log('Database.query: ' + err);
		}
		else{
			callback(rows);
		}
	});
};

function Procedure(procedure, params, callback){
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

//	Create initial connection
Restart();