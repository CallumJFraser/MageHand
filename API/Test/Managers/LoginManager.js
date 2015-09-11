"Use Strict";

var Promise = require("bluebird");
var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();

var blank = undefined;

describe('Login Manager -', function(){
	var fakeDatabase = { };
	var validVersion = { ID: 1, Name: 'Name' };
	var fakeManager = proxyquire('../../Managers/LoginManager', {
		'../Database': fakeDatabase
	});

	describe('Public functions:', function(){
		it('Login != undefined', function(){
			assert.notEqual(fakeManager.Login, undefined);
		})
		it('Authorise != undefined', function(){
			assert.notEqual(fakeManager.Authorise, undefined);
		})
	})

	describe('Login:', function(){
		var valid = 'Test1';
		var validPwd = 'password';
		var invalid = 'invalid';
		var invalidPwd = 'notPassword';

		it('Valid:', function(done) {
			var validRow = { ID: 1, Username: 'Test1', AID: 'Description' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_Login');
				assert.equal(values.length, 3);
				assert.equal(values[0], valid);
				assert.notEqual(callback, undefined);
				callback([validRow]);
			};

			fakeManager.Login(valid, validPwd).then(function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, true);
				assert.equal(result.Reason, undefined);
				assert.equal(result.AccountID, validRow.ID);
				assert.equal(result.Username, validRow.Username);
				assert.equal(result.AID, validRow.AID);
				assert.notEqual(result.SID, undefined);
				done();
			},
			function(err){
				done(new Error(err));
			});
		})

		it('Invalid "Username":', function(done) {
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_Login');
				assert.equal(values.length, 3);
				assert.equal(values[0], invalid);
				assert.equal(values[1], validPwd);
				assert.notEqual(callback, undefined);
				callback({
					Success: false,
					Reason: 'Missing parameter'
				});
			};

			fakeManager.Login(invalid, validPwd).then(
			function(err){
				done(new Error(err));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Invalid "Password":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_Login');
				assert.equal(values.length, 3);
				assert.equal(values[0], valid);
				assert.equal(values[1], invalidPwd);
				assert.notEqual(callback, undefined);
				callback({
					Success: false,
					Reason: 'Missing parameter'
				});
			};

			fakeManager.Login(valid, invalidPwd).then(
			function(err){
				done(new Error(err));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Missing "Username":', function(done){
			fakeManager.Login(blank, validPwd).then(
			function(err){
				done(new Error(err));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Missing "Password":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_Login');
				assert.equal(values.length, 3);
				assert.equal(values[0], valid);
				assert.equal(values[1], blank);
				assert.notEqual(callback, undefined);
				callback(undefined);
			};

			fakeManager.Login(valid, blank).then(
			function(err){
				done(new Error(err));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})

		it('Missing "Username", "Password":', function(done){
			fakeDatabase.Procedure = function (procedure, values, callback) {
				assert.equal(procedure, 'sp_Login');
				assert.equal(values.length, 3);
				assert.equal(values[0], blank);
				assert.equal(values[1], blank);
				assert.notEqual(callback, undefined);
				callback(undefined);
			};

			fakeManager.Login(blank, blank).then(
			function(err){
				done(new Error(err));
			},
			function(result){
				assert.notEqual(result, undefined);
				assert.equal(result.Success, false);
				assert.notEqual(result.Reason, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.AccountID, undefined);
				assert.equal(result.Username, undefined);
				assert.equal(result.AID, undefined);
				assert.equal(result.SID, undefined);
				done();
			});
		})
	})

	describe('Authorise:', function(){
		var validUsername = 'Test1';
		var validPwd = 'password';
		var invalid = 'invalid';
		var blank = undefined;

		it('Valid:', function(done) {
			var validRow = { ID: 1, Username: 'Test1', AID: 'Description' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				if(procedure === 'sp_Login') {
					assert.equal(procedure, 'sp_Login');
					assert.equal(values.length, 3);
					assert.equal(values[0], validUsername);
					assert.equal(values[1], validPwd);
					assert.notEqual(callback, undefined);
					callback([validRow]);
				} else {
					assert.equal(procedure, 'sp_Authorise');
					assert.equal(values.length, 1);
					assert.equal(values[0], validRow.AID);
					assert.notEqual(callback, undefined);
					callback([validRow]);
				}
			};

			fakeManager.Login(validUsername, validPwd).then(function(loginResult){
				fakeManager.Authorise(loginResult.AID, loginResult.SID).then(function(result){
					assert.equal(result.Success, true);
					assert.equal(result.SID, loginResult.SID);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.notEqual(result.SID, undefined);
					done();
				},
				function(err){
					done(new Error(err));
				});
			},
			function(err){
				done(new Error(err));
			});
		})

		it('Invalid "AID":', function(done) {
			var invalidRow = { ID: 1, Username: 'Test1', AID: 'Description' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				if(procedure === 'sp_Login') {
					assert.equal(procedure, 'sp_Login');
					assert.equal(values.length, 3);
					assert.equal(values[0], validUsername);
					assert.equal(values[1], validPwd);
					assert.notEqual(callback, undefined);
					callback([invalidRow]);
				} else {
					assert.equal(procedure, 'sp_Authorise');
					assert.equal(values.length, 1);
					assert.equal(values[0], invalid);
					assert.notEqual(callback, undefined);
					callback([]);
				}
			};

			fakeManager.Login(validUsername, validPwd).then(function(loginResult) {
				fakeManager.Authorise(invalid, loginResult.SID).then(
				function(err){
					done(new Error(err));
				},
				function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			},
			function(err){
				done(new Error(err));
			});
		})

		it('Missing "AID":', function(done) {
			var invalidRow = { ID: 1, Username: 'Test1', AID: 'Description' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				if(procedure === 'sp_Login') {
					assert.equal(procedure, 'sp_Login');
					assert.equal(values.length, 3);
					assert.equal(values[0], validUsername);
					assert.equal(values[1], validPwd);
					assert.notEqual(callback, undefined);
					callback([invalidRow]);
				} else {
					assert.equal(procedure, 'sp_Authorise');
					assert.equal(values.length, 1);
					assert.equal(values[0], blank);
					assert.notEqual(callback, undefined);
					callback([]);
				}
			};

			fakeManager.Login(validUsername, validPwd).then(function(loginResult){
				fakeManager.Authorise(blank, loginResult.SID).then(
					function(err){
						done(new Error(err));
					},
					function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			},
			function(err){
				done(new Error(err));
			});
		})

		it('Missing "SID":', function(done) {
			var invalidRow = { ID: 1, Username: 'Test1', AID: 'Description' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				if(procedure === 'sp_Login') {
					assert.equal(procedure, 'sp_Login');
					assert.equal(values.length, 3);
					assert.equal(values[0], validUsername);
					assert.equal(values[1], validPwd);
					assert.notEqual(callback, undefined);
					callback([invalidRow]);
				} else {
					assert.equal(procedure, 'sp_Authorise');
					assert.equal(values.length, 1);
					assert.equal(values[0], blank);
					assert.notEqual(callback, undefined);
					callback([]);
				}
			};

			fakeManager.Login(validUsername, validPwd).then(function(loginResult){
				fakeManager.Authorise(loginResult.AID, blank).then(
					function(err){
						done(new Error(err));
					},
					function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			},
			function(err){
				done(new Error(err));
			});
		})

		it('Missing "AID", "SID":', function(done) {
			var invalidRow = { ID: 1, Username: 'Test1', AID: 'Description' };
			fakeDatabase.Procedure = function (procedure, values, callback) {
				if(procedure === 'sp_Login') {
					assert.equal(procedure, 'sp_Login');
					assert.equal(values.length, 3);
					assert.equal(values[0], validUsername);
					assert.equal(values[1], validPwd);
					assert.notEqual(callback, undefined);
					callback([invalidRow]);
				} else {
					assert.equal(procedure, 'sp_Authorise');
					assert.equal(values.length, 1);
					assert.equal(values[0], blank);
					assert.notEqual(callback, undefined);
					callback([]);
				}
			};

			fakeManager.Login(validUsername, validPwd).then(function(loginResult){
					fakeManager.Authorise(blank, blank).then(
					function(err){
						done(new Error(err));
					},
					function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			},
			function(err){
				done(new Error(err));
			});
		})
	})
})