"Use Strict";

var assert = require('assert');
var manager = require('../../Managers/RunthroughManager.js');

describe('Manager - Runthrough:', function(){

	var blank = undefined;

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
			manager.Get(valid, function(err, result){
				assert.notEqual(result, undefined);
				assert.equal(result.Reason, undefined);
				assert.notEqual(result.ID, undefined);
				assert.notEqual(result.Story, undefined);
				done();
			});
		})
	
		it('Invalid "ID" Value:', function(done){
			manager.Get(invalid, function(err, result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Story, undefined);
				done();
			});
		})

		it('Invalid "ID" Format:', function(done){
			manager.Get(invalidFormat, function(err, result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);	
				assert.equal(result.ID, undefined);
				assert.equal(result.Story, undefined);
				done();
			});
		})

		it('Missing "ID":', function(done){
			manager.Get(blank, function(err, result){
				assert.notEqual(result, undefined);
				assert.notEqual(result.Reason, undefined);
				assert.equal(result.ID, undefined);
				assert.equal(result.Story, undefined);
				done();
			});
		})
	})
})