"Use Strict";

var Promise = require("bluebird");
var assert = require('assert');
var proxyquire = require('proxyquire').noCallThru();
var dndAPI = require('../../MageHandAPI');

var validUsername = 'Test1';
var validPassword = 'password';

describe('API', function(){
	describe('Login', function(){
		it('Should be a function', function(done){
			assert.equal(typeof(dndAPI.Login), 'function');
			done();
		});

		it('Should pass username and password to LoginManager', function(done){
			var fakeDndAPI = proxyquire('../../MageHandAPI', {
				'./Managers/LoginManager': {
					Login: function(username, password){
						assert.equal(username, validUsername);
						assert.equal(password, validPassword);
						return Promise.resolve({
							Success: true,
							AccountID: 123,
							Username: 'test',
							AID: '1234',
							SID: '1234'
						});
					}
				}
			});

			fakeDndAPI.Login(validUsername, validPassword).then(function(loginResponse){
				assert.equal(loginResponse.Success, true);
				assert.notEqual(loginResponse.AccountID, undefined);
				assert.notEqual(loginResponse.AID, undefined);
				assert.notEqual(loginResponse.Username, undefined);
				assert.equal(loginResponse.Reason, undefined);
				assert.notEqual(loginResponse.SID, undefined);
				done();
			},
			function(err){
				done(new Error(err));
			});
		});
	})

	describe('Authorise', function(){

		it('Should be a function', function(done){
			assert.notEqual(dndAPI.Authorise, undefined);
			done();
		});

		it('Should pass aID and sID to LoginManager', function(done){
			var fakeDndAPI = proxyquire('../../MageHandAPI', {
				'./Managers/LoginManager': {
					Login: function(username, password){
						return Promise.resolve({
							Success: true,
							AccountID: 123,
							Username: 'test',
							AID: '1234',
							SID: '1234'
						});
					},
					Authorise: function(aID, sID){
						assert.equal(aID, '1234');
						assert.equal(sID, '1234');
						return Promise.resolve({
							Success: true,
							SID: 'sid'
						});
					}
				}
			});
			fakeDndAPI.Login(validUsername, validPassword).then(function(loginResponse){
				fakeDndAPI.Authorise(loginResponse.AID, loginResponse.SID).then(function(result){
					assert.equal(result.Success, true);
					assert.notEqual(result.SID, undefined);
					done();
				});
			});
		});
	});
})