var assert = require('assert');
var database = require('../Database.js');

before(function(done){
	database.Start(undefined, function(){ done(); }, function(err){ throw err; });
})
/*
describe('Database -', function(){
	
	var validConfig = {
		host	: 'localhost',
		user	: 'root',
		password: '',
		database: 'DnDBackend'
	};
	var emptyConfig = {};
	
	describe('Public functions:', function(){
		it('Start != undefined', function(){
			assert.notEqual(database.Start, undefined);
		})
		it('Query != undefined', function(){
			assert.notEqual(database.Query, undefined);
		})
		it('Procedure != undefined', function(){
			assert.notEqual(database.Procedure, undefined);
		})
	})
	
	describe('Config tests:', function(){
		it('Missing config:')//, function(done){
//			//	How do you test for an expected exception?
//			assert.(function(){
//				database.Start(undefined);
//				done();
//			});
//		})
		it('Empty config:', function(done){
			database.Start(emptyConfig);
			done();
		})
		it('Valid config:', function(done){
			database.Start(
				validConfig,
				function(){
					done();
				},
				function(err){
					done(err);
				}
			);
			
		})
	})
})
*/