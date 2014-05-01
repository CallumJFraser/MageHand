var assert = require('assert');
var manager = require('../../StoryManager.js');

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
				it('ID != undefined', function(done){
					manager.Get(valid, function(result){	
						assert.notEqual(result.ID, undefined);
						done();
					});
				})
				it('Title != undefined', function(done){
					manager.Get(valid, function(result){	
						assert.notEqual(result.Title, undefined);
						done();
					});
				})
				it('Description != undefined', function(done){
					manager.Get(valid, function(result){	
						assert.notEqual(result.Description, undefined);
						done();
					});
				})
				it('ParentID != undefined', function(done){
					manager.Get(valid, function(result){	
						assert.notEqual(result.ParentID, undefined);
						done();
					});
				})
				it('Version != undefined', function(done){
					manager.Get(valid, function(result){	
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
				it('ID != undefined', function(done){
					manager.Get(invalid, function(result){	
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Title != undefined', function(done){
					manager.Get(invalid, function(result){	
						assert.equal(result.Title, undefined);
						done();
					});
				})
				it('Description != undefined', function(done){
					manager.Get(invalid, function(result){	
						assert.equal(result.Description, undefined);
						done();
					});
				})
				it('ParentID != undefined', function(done){
					manager.Get(invalid, function(result){	
						assert.equal(result.ParentID, undefined);
						done();
					});
				})
				it('Version != undefined', function(done){
					manager.Get(invalid, function(result){	
						assert.equal(result.Version, undefined);
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
				it('ID != undefined', function(done){
					manager.Get(invalidFormat, function(result){	
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Title != undefined', function(done){
					manager.Get(invalidFormat, function(result){	
						assert.equal(result.Title, undefined);
						done();
					});
				})
				it('Description != undefined', function(done){
					manager.Get(invalidFormat, function(result){	
						assert.equal(result.Description, undefined);
						done();
					});
				})
				it('ParentID != undefined', function(done){
					manager.Get(invalidFormat, function(result){	
						assert.equal(result.ParentID, undefined);
						done();
					});
				})
				it('Version != undefined', function(done){
					manager.Get(invalidFormat, function(result){	
						assert.equal(result.Version, undefined);
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
				it('ID != undefined', function(done){
					manager.Get(blank, function(result){	
						assert.equal(result.ID, undefined);
						done();
					});
				})
				it('Title != undefined', function(done){
					manager.Get(blank, function(result){	
						assert.equal(result.Title, undefined);
						done();
					});
				})
				it('Description != undefined', function(done){
					manager.Get(blank, function(result){	
						assert.equal(result.Description, undefined);
						done();
					});
				})
				it('ParentID != undefined', function(done){
					manager.Get(blank, function(result){	
						assert.equal(result.ParentID, undefined);
						done();
					});
				})
				it('Version != undefined', function(done){
					manager.Get(blank, function(result){	
						assert.equal(result.Version, undefined);
						done();
					});
				})
			})
		})
	}
};