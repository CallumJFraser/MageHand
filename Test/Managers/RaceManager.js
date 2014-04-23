var assert = require('assert');
var manager = require('../../RaceManager.js');

function test(){
	describe('Race Manager -', function(){
	
		describe('Public functions:', function(){
			it('FromObject != undefined', function(){
				assert.notEqual(manager.FromObject, undefined);
			})
			it('Get != undefined', function(){
				assert.notEqual(manager.Get, undefined);
			})
		})
	
		describe('FromObject:', function(){
			it('')
			it('')
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