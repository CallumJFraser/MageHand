var assert = require('assert');
var manager = require('../AccountManager.js');

describe('Account Manager -', function(){
	
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
		var blank = undefined;
		
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
					assert.equal(result.Reason, undefined);
					done();
				});
			})
			it('Result = Account', function(done){
				manager.Get(valid, function(result){
					assert.equal(result.ID, 1);
					assert.equal(result.AID, '1');
					assert.equal(result.Username, 'Test1');
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
					assert.equal(result.LastLogin, undefined);
					done();
				});
			})
		})
		describe('Invalid:', function(){
			it('Result != undefined', function(done){
				manager.Get(invalid, function(result){
					assert.notEqual(result, undefined);
					done();
				});
			})
			it('Success = false', function(done){
				manager.Get(invalid, function(result){
					assert.equal(result.Success, false);
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.Get(invalid, function(result){
					assert.notEqual(result.Reason, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.Get(blank, function(result){
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
		})
	})
	
	describe('GetByUsername:', function(){
		var valid = 'Test1';
		var invalid = 'invalid';
		var blank = undefined;
		
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
					assert.equal(result.Reason, undefined);
					done();
				});
			})
			it('Result = Account', function(done){
				manager.GetByUsername(valid, function(result){
					assert.equal(result.ID, 1);
					assert.equal(result.AID, '1');
					assert.equal(result.Username, 'Test1');
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.GetByUsername(invalid, function(result){
					assert.notEqual(result.Reason, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.GetByUsername(blank, function(result){
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
		})
	})
	
	describe('GetByEmail:', function(){
		var valid = 'test@test.com';
		var invalid = 'invalid@mail.com';
		var blank = undefined;
		
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
					assert.equal(result.Reason, undefined);
					done();
				});
			})
			it('Result = Login', function(done){
				manager.GetByEmail(valid, function(result){
					assert.equal(result.ID, 1);
					assert.equal(result.AID, '1');
					assert.equal(result.Username, 'Test1');
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.GetByEmail(invalid, function(result){
					assert.notEqual(result.Reason, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.GetByEmail(blank, function(result){
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
		})
	})
	
	describe('Search:', function(){
		var valid = 'Test1';
		var invalid = 'invalid';
		var blank = undefined;
		
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
					assert.equal(result.Reason, undefined);
					done();
				});
			})
			it('Result = Login', function(done){
				manager.Search(valid, function(result){
					assert.equal(result.ID, 1);
					assert.equal(result.AID, '1');
					assert.equal(result.Username, 'Test1');
					assert.equal(result.Email, undefined);
					assert.equal(result.Hash, undefined);
					assert.equal(result.Created, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.Search(invalid, function(result){
					assert.notEqual(result.Reason, undefined);
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
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
			it('Result = Fail', function(done){
				manager.Search(blank, function(result){
					assert.notEqual(result.Reason, undefined);
					done();
				});
			})
		})
	})
})