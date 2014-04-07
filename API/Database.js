var mysql = require('mysql');

//	Constructor
var connection = {};

function start(config){
	if(config != undefined){
		var configuration = {
			host     : config.host,
			user     : config.user,
			password : config.password,
			database : config.database
		};
		connection = mysql.createConnection(configuration);
		connection.connect(function(err){
			if(err != undefined){
				console.log('MySQL error... ' + JSON.stringify(err));
				config.error(err);
			}
			else{
				config.success();
			}
		});
	}
	else{
		throw 'Database options have not been passed in...';
	}
};
	//
function query(command, callback){	
	connection.query(command, function(err, rows, fields){
		if(err){
			console.log('Database.query: ' + err);
			callback(err);
		}
		else{
			callback(rows);
		}
	});
};

module.exports = {
	Start: function(config){
		start(config);
	},
	Query: function(command, success, error){
		return query(command, success, error);
	}
};