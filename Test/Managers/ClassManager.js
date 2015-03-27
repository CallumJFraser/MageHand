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
	
			describe('Valid:', function(){
				it('Result != undefined', function(done){
					manager.Get(valid, function(result){
						assert.notEqual(result, undefined);
						done();
					});
				})
				it('Reason == undefined', function(done){
					manager.Get(valid, function(result){
						assert.equal(result.Reason, undefined);
						done();
					});
				})
				it('Valid', function(done){
					manager.Get(valid, function(result){	
						assert.notEqual(result.ID, undefined);
						assert.notEqual(result.Name, undefined);
						assert.notEqual(result.Description, undefined);
						assert.notEqual(result.Version, undefined);
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
				it('Reason != undefined', function(done){
					manager.Get(invalid, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Success == false', function(done){
					manager.Get(invalid, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Valid', function(done){
					manager.Get(invalid, function(result){	
						assert.equal(result.ID, undefined);
						assert.equal(result.Name, undefined);
						assert.equal(result.Description, undefined);
						assert.equal(result.VersionID, undefined);
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
				it('Reason != undefined', function(done){
					manager.Get(invalidFormat, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Success == false', function(done){
					manager.Get(invalidFormat, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Valid', function(done){
					manager.Get(invalidFormat, function(result){	
						assert.equal(result.ID, undefined);
						assert.equal(result.Name, undefined);
						assert.equal(result.Description, undefined);
						assert.equal(result.VersionID, undefined);
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
				it('Reason != undefined', function(done){
					manager.Get(blank, function(result){
						assert.notEqual(result.Reason, undefined);
						done();
					});
				})
				it('Success == false', function(done){
					manager.Get(blank, function(result){
						assert.equal(result.Success, false);
						done();
					});
				})
				it('Valid', function(done){
					manager.Get(blank, function(result){	
						assert.equal(result.ID, undefined);
						assert.equal(result.Name, undefined);
						assert.equal(result.Description, undefined);
						assert.equal(result.VersionID, undefined);
						done();
					});
				})
			})
		})
	}
};