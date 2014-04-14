var assert = require('assert');
var manager = require('../../StoryManager.js');

var validRow = {};
var validObject = {};

function test(){
describe('Story Manager -', function(){
	
	describe('Public functions:', function(){
		it('FromObject != undefined', function(){
			assert.notEqual(manager.FromObject, undefined);
		})
		it('Get != undefined', function(){
			assert.notEqual(manager.Get, undefined);
		})
	})
	
	describe('FromObject:', function(){
		describe('Valid', function(){
			var character = manager.FromObject(validRow);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
		})
		
		describe('Invalid', function(){
			var character = manager.FromObject(undefined);
			it('Value != undefined', function(){
				assert.notEqual(character, undefined);
			})
			it('Reason != undefined', function(){
				assert.notEqual(character.Reason, undefined);
			})
		})
	})
	
	describe('Get:', function(){
		it('')
		it('')
	})
})
};

module.exports = {
	Test: function(){
		test();
	}
};