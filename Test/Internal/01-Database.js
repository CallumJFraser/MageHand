var assert = require('assert');
var database = require('../Database.js');

before(function(done){
	database.Start(undefined, function(){ done(); }, function(err){ throw err; });
})