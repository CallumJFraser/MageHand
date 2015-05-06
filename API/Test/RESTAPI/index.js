"Using Strict";

var http = require("http");
var assert = require('assert');
var RESTAPI = require('../../index.js');

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

module.exports = {
	Test: function(){

		before(function(){
			RESTAPI.Start({});
		})

		after(function(){
			RESTAPI.Kill();
		})

		describe('Login:', function(){
			it('Valid:', function(done){
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
		})
	}
}