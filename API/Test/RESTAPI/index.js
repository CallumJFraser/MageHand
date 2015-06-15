"Using Strict";

var http = require("http");
var assert = require('assert');
// var RESTAPI = require('../../index.js');

describe('Login:', function(){
	it('Valid:', function(done){
		var options = {
			hostname: 'localhost',
			port: 1024,
			path: '/login/Test1',
			method: 'GET',
			headers: {
				'Password': 'password',
				'Content-Length': 0
			}
		};

		http.request(options,
			function(res) {
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					var result = JSON.parse(chunk);
					assert.equal(result.Success, true);
					assert.notEqual(result.AccountID, undefined);
					assert.notEqual(result.Username, undefined);
					assert.notEqual(result.AID, undefined);
					assert.notEqual(result.SID, undefined);
					done();
				});
			}
		).end();
	});

	it('Invalid Username:', function(done){
		var options = {
			hostname: 'localhost',
			port: 1024,
			path: '/login/NoUser',
			method: 'GET',
			headers: {
				'Password': 'password',
				'Content-Length': 0
			}
		};

		http.request(options,
			function(res) {
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					var result = JSON.parse(chunk);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined)
					assert.equal(result.AccountID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.SID, undefined);
					done();
				});
			}
		).end();
	});

	it('Invalid Password:', function(done){
		var options = {
			hostname: 'localhost',
			port: 1024,
			path: '/login/Test1',
			method: 'GET',
			headers: {
				'Password': 'notthepassword',
				'Content-Length': 0
			}
		};

		http.request(options,
			function(res) {
				res.setEncoding('utf8');
				res.on('data', function (chunk) {
					var result = JSON.parse(chunk);
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined)
					assert.equal(result.AccountID, undefined);
					assert.equal(result.Username, undefined);
					assert.equal(result.AID, undefined);
					assert.equal(result.SID, undefined);
					done();
				});
			}
		).end();
	});

	it('Invalid information reveals no hints:', function(done){
		var options = {
			hostname: 'localhost',
			port: 1024,
			path: '/login/NoUser',
			method: 'GET',
			headers: {
				'Password': 'password1',
				'Content-Length': 0
			}
		};

		http.request(options,
			function(res) {
				res.setEncoding('utf8');
				res.on('data', function (userChunk) {
					var invalidUserResult = JSON.parse(userChunk);

					options.path = '/login/User1';
					options.headers = {
						'Password': 'notthepassword',
						'Content-Length': 0
					};

					http.request(options,
						function(res) {
							res.setEncoding('utf8');
							res.on('data', function (passwordChunk) {
								var invalidPasswordResult = JSON.parse(passwordChunk);
								assert.equal(invalidUserResult.Success, invalidPasswordResult.Success);
								assert.equal(invalidUserResult.Reason, invalidPasswordResult.Reason)
								done();
							});
						}
					).end();
				});
			}
		).end();
	});
})