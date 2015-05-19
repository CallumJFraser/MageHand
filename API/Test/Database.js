"Use Strict";

var assert = require('assert');
var database = require('../database');

describe('Database', function(){
	it('Should start with default settings', function () {
		assert.notEqual(database, undefined);
		assert.notEqual(database.Configuration, undefined);
		assert.notEqual(database.Configuration.host, undefined);
		assert.notEqual(database.Configuration.user, undefined);
		assert.notEqual(database.Configuration.password, undefined);
		assert.notEqual(database.Configuration.database, undefined);
	});

	it('Should have a Start function', function () {
		assert.notEqual(database.Start, undefined);
	});

	it('Should have a Query function', function () {
		assert.notEqual(database.Query, undefined);
	});

	it('Should have a Procedure function', function () {
		assert.notEqual(database.Procedure, undefined);
	});
})

describe('Query', function(){
	before(function(){
		database.Start();
	});

	it('Should return data when calling a valid Query function', function (done) {
		database.Query('SELECT true as Success', function(rows){
			assert.notEqual(rows, undefined);
			assert.notEqual(rows[0], undefined);
			assert.notEqual(rows[0].Success, undefined);
			done();
		});
	});
})