var crypto = require('crypto');
var express = require('express');
var app = express();
var database = require('./Database.js');
var dndAPI = require('./DnDAPI.js');

app.get('/login', function(req, res){
	GetData(req, res, function(data, response){
		Login(data, response);
	});
});
app.get('/account/:AID', function(req, res){
	GetData(req, res, function(data, response){
		GetAccount(data, response);
	});
});
app.get('/character/:CharacterID', function(req, res){
	GetCharacter(req, res);
});
app.get('/account/character', function(req, res){
	GetData(req, res, function(data, response){
		GetAccountCharacters(data, response);
	});
});
app.get('/get/session', function(req, res){
	GetData(req, res, function(data, response){
		GetSession(data, response);
	});
});

var server = app.listen(1234, function() {
    console.log('Listening on port %d', server.address().port);
});

dndAPI.Start(function(){
	console.log('Starting...');
});

//	Acceptable hash algorithms in order of 'best' to 'worst'.
var acceptableHashes = ['sha512WithRSAEncryption', 'sha512', 'sha384WithRSAEncryption', 'sha384', 'sha256WithRSAEncryption', 'sha256'];
var availableHashes = crypto.getHashes();
var selectedHash = GetBestHash(acceptableHashes, availableHashes);
//console.log('Selected hash: "' + selectedHash + '"');

/***************    .    ****************/
/*
function GetData(request, response, callback){
	var data = '';
	request.on('data', function(chunk){
		data += chunk;
	});
	
	request.on('end', function(){
		callback(data, response);
	});
}
*/
//	API Calls:

	//	Expect Username, Password. Return AID + sessionID
	function Login(request, response){
		if(request.params != undefined){
			dndAPI.Login(request.params.username, request.params.password, function(loginResponse){
				if(loginResponse.Error){
					EndResponse(response, 500, loginResponse);
				}
				else{
					EndResponse(response, 200, loginResponse);
				}
			});
		}
	}

	function GetAccount(object, response){
		dndAPI.GetAccount(object, function(accountResponse){
			if(accountResponse.Error){
				EndResponse(response, 500, accountResponse);
			}
			else{
				EndResponse(response, 200, accountResponse);
			}
		});
	}

	function GetCharacter(object, response){
		dndAPI.getCharacter(object, function(characterResponse){
			if(characterResponse.Error){
				EndResponse(response, 500, characterResponse);
			}
			else{
				EndResponse(response, 200, characterResponse);
			}
		});
	}

	function GetAccountCharacters(object, response){
		dndAPI.getAccountCharacters(object, function(characterListResponse){
			if(characterListResponse.Error){
				EndResponse(response, 500, characterListResponse);
			}
			else{
				EndResponse(response, 200, characterListResponse);
			}
		});
	}

	function GetSession(object, response){
		dndAPI.getSession(object, function(sessionCharacterListResponse){
			if(sessionCharacterListResponse.Error){
				EndResponse(response, 500, sessionCharacterListResponse);
			}
			else{
				EndResponse(response, 200, sessionCharacterListResponse);
			}
		});
	}
	
	function GetAdminAccount(object, response){
		dndAPI.getAdminAccount(object, function(sessionCharacterListResponse){
			if(sessionCharacterListResponse.Error){
				EndResponse(response, 500, sessionCharacterListResponse);
			}
			else{
				EndResponse(response, 200, sessionCharacterListResponse);
			}
		});
	}

//	Utility Functions

function EndResponse(response, code, endObject){ 
	response.writeHead(code, {
		'Content-Type': 'text/javascript',
		'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
		'Access-Control-Allow-Origin': 'http://localhost:3000'
	});
	response.send(JSON.stringify(endObject));
}

function GetBestHash(accHashes, avaHashes){
	for(var i = 0; i < accHashes.length; i++){
		//	For each acceptable hash:
		for (var j = 0; j < avaHashes.length; j++){
			//	For each available
			if(accHashes[i] == avaHashes[j]){
				return avaHashes[j];
			}
		}
	}
	return '';
};