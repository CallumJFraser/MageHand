"Use Strict";

var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();
var manager = require('../../Managers/StoryManager.js');

var blank = undefined;


describe('Story Manager', function(){
	var fakeDatabase = {};
	var fakeManager = proxyquire('../../Managers/StoryManager.js', {
		'../Database': fakeDatabase,
		'../Managers/VersionManager': {
			Get: function (item, callback){
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
			var validRow = {"ID":1,"Title":"Test", "Description":"Description", "ParentID":1, "Version":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetStoryByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid, function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.notEqual(result.ID, undefined);
				assert.notEqual(result.Title, undefined);
				assert.notEqual(result.Description, undefined);
				assert.notEqual(result.ParentID, undefined);
				assert.notEqual(result.Version, undefined);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetStoryByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Title, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.ParentID, undefined);
				assert.equal(result.Version, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetStoryByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);	
				assert.equal(result.ID, undefined);
				assert.equal(result.Title, undefined);	
				assert.equal(result.Description, undefined);
				assert.equal(result.ParentID, undefined);
				assert.equal(result.Version, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetStoryByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank, function(result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Title, undefined);
				assert.equal(result.Description, undefined);
				assert.equal(result.ParentID, undefined);
				assert.equal(result.Version, undefined);
				done();
			});
		})
	})
})