var crypto = require('crypto');
var express = require('express');
var app = express();
var database = require('./Database.js');
var mageHandAPI = require('./MageHandAPI.js');
//	Auth
app.get('/login/:Username/:Password', function(req, res){
	Login(req, res);
});
//	Account
app.get('/account/:AID/:SID/:Username', function(req, res){
	GetAccount(req, res);
});
//	Character
app.get('/character/:AID/:SID/:CharacterID', function(req, res){
	GetCharacter(req, res);
});
app.get('/account/character/:AID/:SID/:AccountAID', function(req, res){
	GetAccountCharacters(req, res);
});
//	Session
app.get('/session/:AID/:SID/:SessionID', function(req, res){
	GetSession(req, res);
});
//	Class
app.get('/story/:AID/:SID/:StoryID', function(req, res){
	GetStory(req, res);
});

var server = app.listen(1234, function() {
    console.log('Listening on port %d', server.address().port);
});

mageHandAPI.Start(function(){
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
			mageHandAPI.Login(request.params.Username, request.params.Password, function(apiResponse){
				if(apiResponse.Error){
					EndResponse(response, 500, apiResponse);
				}
				else{
					EndResponse(response, 200, apiResponse);
				}
			});
		}
	}

	function GetAccount(request, response){
		mageHandAPI.GetAccount(request.params.AID, request.params.SID, request.params.Username, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetCharacter(request, response){
		mageHandAPI.GetCharacter(request.params.AID, request.params.SID, request.params.CharacterID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetAccountCharacters(request, response){
		mageHandAPI.GetAccountCharacters(request.params.AID, request.params.SID, request.params.AccountAID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetSession(request, response){
		mageHandAPI.GetSession(request.params.AID, request.params.SID, request.params.SessionID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

	function GetStory(request, response){
		mageHandAPI.GetStory(request.params.AID, request.params.SID, request.params.StoryID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}

/*
	function GetAdminAccount(request, response){
		mageHandAPI.getAdminAccount(request.params.AID, request.params.SID, request.params.AccountAID, function(apiResponse){
			if(apiResponse.Error){
				EndResponse(response, 500, apiResponse);
			}
			else{
				EndResponse(response, 200, apiResponse);
			}
		});
	}
*/
//	Utility Functions

function EndResponse(response, code, endObject){
	response.send(JSON.stringify(endObject));
}