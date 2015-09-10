"Use Strict";

var Promise = require("bluebird");
var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();

var blank = undefined;


describe('Version Manager', function(){
	var fakeDatabase = {};
	var fakeManager = proxyquire('../../Managers/VersionManager.js', {
		'../Database': fakeDatabase
	});

	describe('Public functions:', function(){
		it('Get != undefined', function(){
			assert.notEqual(fakeManager.Get, undefined);
		})
	})

	describe('Get:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			var validRow = { "ID":1,"Name":"Test" };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetVersion');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.notEqual(result.ID, undefined);
				assert.notEqual(result.Name, undefined);
				done();
			},
			function(error){
				done(new Error(JSON.stringify(error)));
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetVersion');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid).then(function(error){
				done(new Error(JSON.stringify(error)));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetVersion');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat).then(function(error){
				done(new Error(JSON.stringify(error)));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);	
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetVersion');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank).then(function(error){
				done(new Error(JSON.stringify(error)));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				done();
			});
		})
	})
})