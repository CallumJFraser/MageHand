"Use Strict";

var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();

var blank = undefined;
describe('Class Manager', function(){
	var fakeDatabase = { };
	var validVersion = { ID: 1, Name: 'Name' };
	var fakeManager = proxyquire('../../Managers/ClassManager', {
		'../Database': fakeDatabase,
		'../Managers/VersionManager': {
			Get: function (data, callback) {
				assert.notEqual(callback, undefined);
				callback(validVersion);
			}
		}
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
			var validRow = { ID: 1, Name: 'Name', Description: 'Description', Version: '1' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetClass');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validRow.ID);
				assert.equal(result.Name, validRow.Name);
				assert.equal(result.Description, validRow.Description);
				assert.equal(result.Version, validVersion);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetClass');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.Success, false);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.VersionID, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetClass');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.Success, false);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.VersionID, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetClass');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.Success, false);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.VersionID, undefined);
				done();
			});
		})
	})
		
	describe.skip('List:', function(){

		it('Valid:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				console.log(procedure);
				assert.equal(procedure, 'sp_GetClasses');
				assert.equal(values.length, 0);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.List(function(result){
				var first = result[0];
				assert.notEqual(first, undefined);
				assert.equal(first.Reason, undefined);
				assert.notEqual(first.ID, undefined);
				assert.notEqual(first.Name, undefined);
				assert.notEqual(first.Description, undefined);
				assert.notEqual(first.Version, undefined);
				done();
			});
		})
	})
})
