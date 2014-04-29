var assert = require('assert');
var manager = require('../../StoryManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
		describe('Story Manager -', function(){
	
			describe('Public functions:', function(){
				it('Get != undefined', function(){
					assert.notEqual(manager.Get, undefined);
				})
			})
			
			//
		})
	}
};