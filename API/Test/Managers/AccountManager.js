var assert = require('assert');
var uuid = require('node-uuid');
var manager = require('../../Managers/AccountManager.js');

var blank = undefined;

module.exports = {
	Test: function(){

		var validRow = {"ID":1,"AID":"1","Username":"Test1","Email":"4500","Hash":"100","Created":"100","LastLogin":"10"};
		var validObject = {"ID":1,"AID":"1","Username":"Test1","Email":"4500","Hash":"100","Created":"100","LastLogin":"10","Success":true};

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
				manager.Get(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.equal(result.ID, validObject.ID);
					assert.equal(result.AID, validObject.AID);
					assert.equal(result.Username, validObject.Username);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
				});
			})

			it('Invalid "ID" Value:', function(done){
				manager.Get(invalid, function(result){
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
				manager.Get(invalidFormat, function(result){
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
				manager.Get(blank, function(result){
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
				manager.GetByUsername(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.equal(result.ID, validObject.ID);
					assert.equal(result.AID, validObject.AID);
					assert.equal(result.Username, validObject.Username);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
				});
			})

			it('Invalid:', function(done){
				manager.GetByUsername(invalid, function(result){
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
				manager.GetByUsername(blank, function(result){
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
				manager.GetByEmail(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.equal(result.ID, validObject.ID);
					assert.equal(result.AID, validObject.AID);
					assert.equal(result.Username, validObject.Username);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
				});
			})

			it('Invalid:', function(done){
				manager.GetByEmail(invalid, function(result){
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
				manager.GetByEmail(blank, function(result){
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
			
			it('Valid:', function(done){
				manager.Search(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.equal(result.ID, validObject.ID);
					assert.equal(result.AID, validObject.AID);
					assert.equal(result.Username, validObject.Username);
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
				});
			})

			it('Invalid:', function(done){
				manager.Search(invalid, function(result){
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
				manager.Search(blank, function(result){
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
			// TODO: remove unnessasary fields.
			var randomNum = Math.random();
			var valid = { ID:1, AID:uuid.v4(), Username: "Test" + randomNum, Email: randomNum + "@test.com", Hash:"hash", Password:"password", Created:"earlier", LastLogin:"NA" };
			var invalid = {};
			var missing = undefined;
				
			it('Valid:', function(done){
				manager.Create(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Success, true);
					assert.equal(result.Reason, undefined);
					assert.notEqual(result.ID, undefined);
					done();
				});
			})

			it('Invalid:', function(done){
				manager.Create(invalid, function(result){
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
				manager.Create(missing, function(result){
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
	}
};