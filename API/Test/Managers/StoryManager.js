"Use Strict";

var Promise = require("bluebird");
var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();

var blank = undefined;


describe('Story Manager', function(){
	var fakeDatabase = {};
	var fakeManager = proxyquire('../../Managers/StoryManager.js', {
		'../Database': fakeDatabase,
		'../Managers/VersionManager': {
			Get: function (item){
				return Promise.resolve({});
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
			var validRow = {"ID":1,"Title":"Test", "Description":"Description", "ParentID":1, "Version":1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetStoryByID');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.notEqual(result.ID, undefined);
				assert.notEqual(result.Title, undefined);
				assert.notEqual(result.Description, undefined);
				assert.notEqual(result.ParentID, undefined);
				assert.notEqual(result.Version, undefined);
				done();
			},
			function(error){
				done(new Error(JSON.stringify(error)));
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

			fakeManager.Get(invalid).then(function(error){
				done(new Error(JSON.stringify(error)));
			},
			function(result){
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

			fakeManager.Get(invalidFormat).then(function(error){
				done(new Error(JSON.stringify(error)));
			},
			function(result){
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

			fakeManager.Get(blank).then(function(error){
				done(new Error(JSON.stringify(error)));
			},
			function(result){
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