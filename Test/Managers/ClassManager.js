var assert = require('assert');
var manager = require('../../Managers/ClassManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
	
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
				manager.Get(valid, function(result){
					assert.notEqual(result, undefined);
					assert.equal(result.Reason, undefined);
					assert.notEqual(result.ID, undefined);
					assert.notEqual(result.Name, undefined);
					assert.notEqual(result.Description, undefined);
					assert.notEqual(result.Version, undefined);
					done();
				});
			})

			it('Invalid "ID" Value:', function(done){
				manager.Get(invalid, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.Success, false);
					assert.equal(result.ID, undefined);
					assert.equal(result.Name, undefined);
					assert.equal(result.Description, undefined);
					assert.equal(result.VersionID, undefined);
					done();
				});
			})

			it('Invalid "ID" Format:', function(done){
				manager.Get(invalidFormat, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.Success, false);
					assert.equal(result.ID, undefined);
					assert.equal(result.Name, undefined);
					assert.equal(result.Description, undefined);
					assert.equal(result.VersionID, undefined);
					done();
				});
			})

			it('Missing "ID":', function(done){
				manager.Get(blank, function(result){
					assert.notEqual(result, undefined);
					assert.notEqual(result.Reason, undefined);
					assert.equal(result.Success, false);
					assert.equal(result.ID, undefined);
					assert.equal(result.Name, undefined);
					assert.equal(result.Description, undefined);
					assert.equal(result.VersionID, undefined);
					done();
				});
			})
		})
			
		describe('List:', function(){
	
			it('Valid:', function(done){
				manager.List(function(result){
					var first = result[0];
					assert.notEqual(first, undefined);
					assert.equal(first.Reason, undefined);
					assert.notEqual(first.ID, undefined);
					assert.notEqual(first.Name, undefined);
					assert.notEqual(first.Description, undefined);
					assert.notEqual(first.Version, undefined);
					done();
				});
			})
		})
	}
};