"Use Strict";

var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();
var manager = require('../../Managers/RaceManager.js');

var blank = undefined;

describe('Race Manager', function () {
	var fakeDatabase = {};
	var fakeManager = proxyquire('../../Managers/RaceManager', {
		'../Database': fakeDatabase,
		'../Managers/SizeManager': {
			Get: function (id, callback){
				callback({});
			}
		},
		'../Managers/VersionManager': {
			Get: function (id, callback){
				callback({});
			}
		}
	});

	describe('Public functions:', function(){
		it('Get != undefined', function(){
			assert.notEqual(manager.Get, undefined);
		})
	})

	describe('Get:', function(){
		var valid = 1;
		var invalid = 0;
		var invalidFormat = 'invalid';

		it('Valid:', function(done){
			var validRow = {"ID":1,"Name":"Test","Description":"Test","Speed":10,"Size":1,"Version":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetRace');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.notEqual(result.ID, undefined);
				assert.notEqual(result.Name, undefined);
				assert.notEqual(result.Description, undefined);
				assert.notEqual(result.Speed, undefined);
				assert.notEqual(result.Size, undefined);
				assert.notEqual(result.Version, undefined);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetRace');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.Speed, undefined);
				assert.equal(result.Size, undefined);
				assert.equal(result.Version, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetRace');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);	
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.Speed, undefined);
				assert.equal(result.Size, undefined);
				assert.equal(result.Version, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetRace');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Name, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.Speed, undefined);
				assert.equal(result.Size, undefined);
				assert.equal(result.Version, undefined);
				done();
			});
		})
	})

	describe('List:', function(){

		it('Valid:', function(done){
			var validRow = {"ID":1,"Name":"Test","Description":"Test","Speed":10,"Size":1,"Version":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetRaces');
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
				assert.notEqual(first.Speed, undefined);
				assert.notEqual(first.Size, undefined);
				assert.notEqual(first.Version, undefined);
				done();
			});
		})
	})
})