var assert = require('assert');
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
		})
	
		describe('Get:', function(){
			var valid = 1;
			var invalid = 10000;
			var invalidFormat = 'invalid';
			
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.Get(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = true', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Success, true);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('ID == ID', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.ID, validObject.ID);
						done();
					});
				})
				it('AID == AID', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.AID, validObject.AID);
						done();
					});
				})
				it('Username == Username', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Username, validObject.Username);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Invalid "ID" Value:', function(){
				it('Result != undefined', function(done){
					manager.Get(invalid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Get(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Invalid "ID" Format:', function(){
				it('Result != undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Missing "ID":', function(){
				it('Result != undefined', function(done){
					manager.Get(blank, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Get(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
		})
		
		describe('GetByUsername:', function(){
			var valid = 'Test1';
			var invalid = 'invalid';
		
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.GetByUsername(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = true', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.Success, true);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('ID == ID', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.ID, validObject.ID);
						done();
					});
				})
				it('AID == AID', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.AID, validObject.AID);
						done();
					});
				})
				it('Username == Username', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.Username, validObject.Username);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.GetByUsername(valid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Invalid:', function(){
				it('Result != undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.GetByUsername(invalid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Missing "Username":', function(){
				it('Result != undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.GetByUsername(blank, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
		})
	
		describe('GetByEmail:', function(){
			var valid = 'test@test.com';
			var invalid = 'invalid@mail.com';
			
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.GetByEmail(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = true', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.Success, true);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('ID == ID', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.ID, validObject.ID);
						done();
					});
				})
				it('AID == AID', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.AID, validObject.AID);
						done();
					});
				})
				it('Username == Username', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.Username, validObject.Username);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.GetByEmail(valid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Invalid:', function(){
				it('Result != undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.GetByEmail(invalid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Missing "Username":', function(){
				it('Result != undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.GetByEmail(blank, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
		})
		
		describe('Search:', function(){
			var valid = 'Test1';
			var invalid = 'invalid';
				
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.Search(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = true', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.Success, true);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('ID == ID', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.ID, validObject.ID);
						done();
					});
				})
				it('AID == AID', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.AID, validObject.AID);
						done();
					});
				})
				it('Username == Username', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.Username, validObject.Username);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Search(valid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Invalid:', function(){
				it('Result != undefined', function(done){
					manager.Search(invalid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Search(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Search(invalid, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
			describe('Missing "Username":', function(){
				it('Result != undefined', function(done){
					manager.Search(blank, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Success = false', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Reason != undefined', function(done){
					manager.Search(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('ID == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('AID == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.AID, undefined);
						done();
					});
				})
				it('Username == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.Username, undefined);
						done();
					});
				})
				it('Email == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.Email, undefined);
						done();
					});
				})
				it('Hash == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.Hash, undefined);
						done();
					});
				})
				it('Created == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.Created, undefined);
						done();
					});
				})
				it('LastLogin == undefined', function(done){
					manager.Search(blank, function(result){
						assert.equal(result.LastLogin, undefined);
						done();
					});
				})
			})
		})
	}
};