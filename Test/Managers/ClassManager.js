var assert = require('assert');
var manager = require('../../ClassManager.js');

var blank = undefined;

module.exports = {
	Test: function(){
	
		describe('Public functions:', function(){
			it('FromObject != undefined', function(){
				assert.notEqual(manager.FromObject, undefined);
			})
			it('Get != undefined', function(){
				assert.notEqual(manager.Get, undefined);
			})
		})

		var validObject = {"ID":1,"Name":"Bard","Description":"","Version":{"ID":1,"Name":"Test"},"Success":true};

		describe('FromObject:', function(){
			describe('Non-prefixed:', function(){
				var validRow = {"ID":1,"Name":"Bard","Description":"","VersionID":1,"VersionName":"Test"};
	
				describe('Valid', function(){
					var result = manager.FromObject(validRow);			
					it('Result != undefined', function(done){
						assert.notEqual(result, undefined);
						done();
					})
					it('Reason == undefined', function(done){
						assert.equal(result.Reason, undefined);
						done();
					})
					it('ID == ID', function(done){
						assert.equal(result.ID, validObject.ID);
						done();
					})
					it('Name == Name', function(done){
						assert.equal(result.Name, validObject.Name);
						done();
					})
					it('Description == Description', function(done){
						assert.equal(result.Description, validObject.Description);
						done();
					})
					it('Version == Version', function(done){
						assert.notEqual(result.Version, undefined);
						done();
					})
				})
				describe('Missing "ID":', function(){
					var missingID = validRow;
					missingID.ID = undefined;
					var result = manager.FromObject(missingID);
					it('Result != undefined', function(done){
						assert.notEqual(result, undefined);
						done();
					})
					it('Reason == undefined', function(done){
						assert.equal(result.Reason, undefined);
						done();
					})
					it('ID == undefined', function(done){
						assert.equal(result.ID, undefined);
						done();
						})
					it('Name == Name', function(done){
						assert.equal(result.Name, validObject.Name);
						done();
					})
					it('Description == Description', function(done){
						assert.equal(result.Description, validObject.Description);
						done();
					})
					it('Version == Version', function(done){
						assert.notEqual(result.Version, undefined);
						done();
					})
				})
				describe('Invalid:', function(){
					var result = manager.FromObject(undefined);
					it('Result != undefined', function(){
						assert.notEqual(result, undefined);
					})
					it('Reason != undefined', function(){
						assert.notEqual(result.Reason, undefined);
					})
					it('ID == undefined', function(done){
						assert.equal(result.ID, undefined);
						done();
					})
					it('Name == undefined', function(done){
						assert.equal(result.Name, undefined);
						done();
					})
					it('Description == undefined', function(done){
						assert.equal(result.Description, undefined);
						done();
					})
					it('Version == undefined', function(done){
						assert.equal(result.Version, undefined);
						done();
					})
				})
			})
			
			describe('Prefixed', function(){
				var validRow = {"ClassID":1,"ClassName":"Bard","ClassDescription":"","ClassVersionID":1,"VersionName":"Test"};
	
				describe('Valid', function(){
					var result = manager.FromObject(validRow);			
					it('Result != undefined', function(done){
						assert.notEqual(result, undefined);
						done();
					})
					it('Reason == undefined', function(done){
						assert.equal(result.Reason, undefined);
						done();
					})
					it('ID == ID', function(done){
						assert.equal(result.ID, validObject.ID);
						done();
					})
					it('Name == Name', function(done){
						assert.equal(result.Name, validObject.Name);
						done();
					})
					it('Description == Description', function(done){
						assert.equal(result.Description, validObject.Description);
						done();
					})
					it('Version == Version', function(done){
						assert.notEqual(result.Version, undefined);
						done();
					})
				})
				describe('Missing "ClassID":', function(){
					var missingID = validRow;
					missingID.ClassID = undefined;
					var result = manager.FromObject(missingID);
					it('Result != undefined', function(done){
						assert.notEqual(result, undefined);
						done();
					})
					it('Reason == undefined', function(done){
						assert.equal(result.Reason, undefined);
						done();
					})
					it('ID == undefined', function(done){
						assert.equal(result.ID, undefined);
						done();
					})
					it('Name == Name', function(done){
						assert.equal(result.Name, validObject.Name);
						done();
					})
					it('Description == Description', function(done){
						assert.equal(result.Description, validObject.Description);
						done();
					})
					it('Version == Version', function(done){
						assert.notEqual(result.Version, undefined);
						done();
					})
				})
				describe('Invalid:', function(){
					var result = manager.FromObject(undefined);
					it('Result != undefined', function(){
						assert.notEqual(result, undefined);
					})
					it('Reason != undefined', function(){
						assert.notEqual(result.Reason, undefined);
					})
					it('ID == undefined', function(done){
						assert.equal(result.ID, undefined);
						done();
					})
					it('Name == undefined', function(done){
						assert.equal(result.Name, undefined);
						done();
					})
					it('Description == undefined', function(done){
						assert.equal(result.Description, undefined);
						done();
					})
					it('Version == undefined', function(done){
						assert.equal(result.Version, undefined);
						done();
					})
				})
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
			it('ID == ID', function(done){
				manager.Get(valid, function(result){	
					assert.equal(result.ID, validObject.ID);
					done();
				});
			})
			it('Name == Name', function(done){
				manager.Get(valid, function(result){	
					assert.equal(result.Name, validObject.Name);
					done();
				});
			})
			it('Description == Description', function(done){
				manager.Get(valid, function(result){	
					assert.equal(result.Description, validObject.Description);
					done();
				});
			})
			it('Version == Version', function(done){
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
			it('Success == false', function(done){
				manager.Get(invalid, function(result){
					assert.equal(result.Success, false);
					done();
				});
			})
			it('ID == undefined', function(done){
				manager.Get(invalid, function(result){	
					assert.equal(result.ID, undefined);
					done();
				});
			})
			it('Name == undefined', function(done){
				manager.Get(invalid, function(result){	
					assert.equal(result.Name, undefined);
					done();
				});
			})
			it('Description == undefined', function(done){
				manager.Get(invalid, function(result){	
					assert.equal(result.Description, undefined);
					done();
				});
			})
			it('Version == undefined', function(done){
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
			it('Success == false', function(done){
				manager.Get(invalidFormat, function(result){
					assert.equal(result.Success, false);
					done();
				});
			})
			it('ID == undefined', function(done){
				manager.Get(invalidFormat, function(result){	
					assert.equal(result.ID, undefined);
					done();
				});
			})
			it('Name == undefined', function(done){
				manager.Get(invalidFormat, function(result){	
					assert.equal(result.Name, undefined);
					done();
				});
			})
			it('Description == undefined', function(done){
				manager.Get(invalidFormat, function(result){	
					assert.equal(result.Description, undefined);
					done();
				});
			})
			it('Version == undefined', function(done){
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
			it('Success == false', function(done){
				manager.Get(blank, function(result){
					assert.equal(result.Success, false);
					done();
				});
			})
			it('ID == undefined', function(done){
				manager.Get(blank, function(result){	
					assert.equal(result.ID, undefined);
					done();
				});
			})
			it('Name == undefined', function(done){
				manager.Get(blank, function(result){	
					assert.equal(result.Name, undefined);
					done();
				});
			})
			it('Description == undefined', function(done){
				manager.Get(blank, function(result){	
					assert.equal(result.Description, undefined);
					done();
				});
			})
			it('Version == undefined', function(done){
				manager.Get(blank, function(result){	
					assert.equal(result.Version, undefined);
					done();
				});
			})
		})
		})
	}
};