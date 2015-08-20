"Use Strict";

var assert = require('assert');
var uuid = require('node-uuid');
var proxyquire = require('proxyquire').noCallThru();

var manager = require('../../Managers/AccountManager.js');

describe('Account Manager', function() {
	var blank = undefined;
	var validRow = {"ID":1,"AID":"1","Username":"Test1","Email":"4500","Hash":"100","Created":"100","LastLogin":"10"};
	var validObject = {"ID":1,"AID":"1","Username":"Test1","Email":"4500","Hash":"100","Created":"100","LastLogin":"10","Success":true};

	var fakeDatabase = { };
	var fakeManager = proxyquire('../../Managers/AccountManager', {
		'../Database': fakeDatabase
	});

	describe('Public functions:', function(){
		it('Get != undefined', function(){
			assert.notEqual(manager.Get, undefined);
		})
		it('GetByUsername != undefined', function(){
			assert.notEqual(manager.GetByUsername, undefined);
		})
		it('GetByEmail != undefined', function(){
			assert.notEqual(manager.GetByEmail, undefined);
		})
		it('Search != undefined', function(){
			assert.notEqual(manager.Search, undefined);
		})
		it('Create != undefined', function(){
			assert.notEqual(manager.Create, undefined);
		})
	})

	describe('Get:', function(){
		var valid = 1;
		var invalid = 10000;
		var invalidFormat = 'invalid';
		
		it('Valid:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByAID');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Get(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.AID, validObject.AID);
				assert.equal(result.Username, validObject.Username);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, validObject.Created);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})

		it('Invalid "ID" Value:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByAID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalid).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByAID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(invalidFormat).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})

		it('Missing "ID":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByAID');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalidFormat);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Get(blank).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})
	})

	describe('GetByUsername:', function(){
		var valid = 'Test1';
		var invalid = 'invalid';

		it('Valid:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByUsername');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetByUsername(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.AID, validObject.AID);
				assert.equal(result.Username, validObject.Username);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, validObject.Created);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})

		it('Invalid:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByUsername');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByUsername(invalid).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})

		it('Missing "Username":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByUsername');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByUsername(blank).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})
	})

	describe('GetByEmail:', function(){
		var valid = 'test@test.com';
		var invalid = 'invalid@mail.com';
		
		it('Valid:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByEmail');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.GetByEmail(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.AID, validObject.AID);
				assert.equal(result.Username, validObject.Username);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, validObject.Created);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})

		it('Invalid:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByEmail');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByEmail(invalid).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})

		it('Missing "Username":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_GetAccountByEmail');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.GetByEmail(blank).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})
	})

	describe('Search:', function(){
		var valid = 'Test1';
		var invalid = 'invalid';
		
		it('Valid:', function (done) {
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_SearchAccounts');
				assert.equal(values.length, 1);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Search(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, validObject.ID);
				assert.equal(result.AID, validObject.AID);
				assert.equal(result.Username, validObject.Username);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, validObject.Created);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})

		it('Invalid:', function (done) {
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_SearchAccounts');
				assert.equal(values.length, 1);
				assert.equal(values[0], invalid);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Search(invalid).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})

		it('Missing "Username":', function (done) {
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_SearchAccounts');
				assert.equal(values.length, 1);
				assert.equal(values[0], blank);
				assert.notEqual(callback, undefined);
				callback([]);
			};

			fakeManager.Search(blank).then(function() {
					done('failed');
				},
				function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, undefined);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})
	})

	describe('Create:', function(){
		var randomNum = Math.random();
		var valid = { ID:1, AID:uuid.v4(), Username: "Test" + randomNum, Email: randomNum + "@test.com", Hash:"hash", Password:"password", Created:"earlier", LastLogin:"NA" };
		var invalid = {};
		var missing = undefined;
			
		it('Valid:', function (done) {
			var successfullResponse = { ID: 1};
			fakeDatabase.Procedure = function (procedure, values, callback) {
				//	Procedure is called 2 times, first for sp_CheckAccount, then sp_CreateAccount
				if(procedure === 'sp_CheckAccount') {
					assert.equal(procedure, 'sp_CheckAccount');
					assert.equal(values.length, 2);
					assert.equal(values[0], valid.Username);
					assert.equal(values[1], valid.Email);
					assert.notEqual(callback, undefined);
					callback([{ Count: 0 }]);
				} else {
					assert.equal(procedure, 'sp_CreateAccount');
					assert.equal(values.length, 5);
					assert.equal(values[0], valid.AID);
					assert.equal(values[1], valid.Username);
					assert.equal(values[2], valid.Email);
					assert.equal(values[3], valid.Hash);
					assert.equal(values[4], valid.Password);
					assert.notEqual(callback, undefined);
					callback([successfullResponse])
				}
			};

			fakeManager.Create(valid).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.ID, successfullResponse.ID);
				done();
			});
		})

		it('Empty object:', function (done) {
			fakeDatabase.Procedure = function (procedure, values, callback) {
				done('failed, should not be calling the database');
			};

			fakeManager.Create(invalid).then(function() {
					done('failed');
				},
				function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, undefined);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})

		it('Passed undefined:', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				done('failed, should not be calling the database');
			};

			fakeManager.Create(missing).then(function() {
					done('failed');
				},
				function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, undefined);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})

		it('Missing "Username":', function(done){
			var missingUsername = { ID:1, AID:uuid.v4(), Email: randomNum + "@test.com", Hash:"hash", Password:"password", Created:"earlier", LastLogin:"NA" };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				done('failed, should not be calling the database');
			};

			fakeManager.Create(missingUsername).then(function() {
					done('failed');
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.ID, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
			});
		})

		it('Missing "Email":', function(done){
			var missingEmail = { ID:1, AID:uuid.v4(), Username: "Test" + randomNum, Hash:"hash", Password:"password", Created:"earlier", LastLogin:"NA" };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				done('failed, should not be calling the database');
			};

			fakeManager.Create(missingEmail).then(function() {
					done('failed');
				},
				function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.Email, undefined);
				assert.equal(result.Hash, undefined);
				assert.equal(result.Created, undefined);
				assert.equal(result.LastLogin, undefined);
				done();
			});
		})
	})
})