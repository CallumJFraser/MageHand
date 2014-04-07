var crypto = require('crypto');
var express = require('express');
var app = express();
var database = require('./Database.js');
var dndAPI = require('./DnDAPI.js');

app.get('/login/:Username/:Password', function(req, res){
	Login(req, res);
});
app.get('/account/:AID/:SessionID/:Username', function(req, res){
	GetAccount(req, res);
});
app.get('/character/:AID/:SessionID/:CharacterID', function(req, res){
	GetCharacter(req, res);
});
app.get('/account/character/:AID/:SessionID/:AccountAID', function(req, res){
	GetAccountCharacters(req, res);
});
app.get('/session/:AID/:SessionID/:SessionID', function(req, res){
	GetSession(req, res);
});

var server = app.listen(1234, function() {
    console.log('Listening on port %d', server.address().port);
});

dndAPI.Start(function(){
	console.log('Starting...');
});

/***************    .    ****************/
/*
	This will be removed soon, as I plan to move over to the Sodium library shortly:
	http://bitwiseshiftleft.github.io/sjcl/
	
//	Acceptable hash algorithms in order of 'best' to 'worst'.
var acceptableHashes = ['sha512WithRSAEncryption', 'sha512', 'sha384WithRSAEncryption', 'sha384', 'sha256WithRSAEncryption', 'sha256'];
var availableHashes = crypto.getHashes();
var selectedHash = GetBestHash(acceptableHashes, availableHashes);
//console.log('Selected hash: "' + selectedHash + '"');

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
			dndAPI.Login(request.params.Username, request.params.Password, function(loginResponse){
				if(loginResponse.Error){
					EndResponse(response, 500, loginResponse);
				}
				else{
					EndResponse(response, 200, loginResponse);
				}
			});
		}
	}

	function GetAccount(request, response){
		dndAPI.GetAccount(request.params.AID, request.params.SessionID, request.params.Username, function(accountResponse){
			if(accountResponse.Error){
				EndResponse(response, 500, accountResponse);
			}
			else{
				EndResponse(response, 200, accountResponse);
			}
		});
	}

	function GetCharacter(request, response){
		dndAPI.getCharacter(request.params.AID, request.params.SessionID, request.params.CharacterID, function(characterResponse){
			if(characterResponse.Error){
				EndResponse(response, 500, characterResponse);
			}
			else{
				EndResponse(response, 200, characterResponse);
			}
		});
	}

	function GetAccountCharacters(request, response){
		dndAPI.getAccountCharacters(request.params.AID, request.params.SessionID, request.params.AccountAID, function(characterListResponse){
			if(characterListResponse.Error){
				EndResponse(response, 500, characterListResponse);
			}
			else{
				EndResponse(response, 200, characterListResponse);
			}
		});
	}

	function GetSession(request, response){
		dndAPI.getSession(request.params.AID, request.params.SessionID, request.params.SessionID, function(sessionCharacterListResponse){
			if(sessionCharacterListResponse.Error){
				EndResponse(response, 500, sessionCharacterListResponse);
			}
			else{
				EndResponse(response, 200, sessionCharacterListResponse);
			}
		});
	}

/*
	function GetAdminAccount(request, response){
		dndAPI.getAdminAccount(request.params.AID, request.params.SessionID, request.params., function(sessionCharacterListResponse){
			if(sessionCharacterListResponse.Error){
				EndResponse(response, 500, sessionCharacterListResponse);
			}
			else{
				EndResponse(response, 200, sessionCharacterListResponse);
			}
		});
	}
*/
//	Utility Functions

function EndResponse(response, code, endObject){
	response.send(JSON.stringify(endObject));
}