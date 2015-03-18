/*
var app = angular.module("wordManager", []);

app.controller("wineController", function($scope, $http) {
	
    	$scope.getWord = function() {
		console.log($scope.userText);		
	}



	$http.get("http://daretodiscover.herokuapp.com/users")
		.success(function(users) {
     	$scope.users=users;	
     })
    .error(function() { 
      alert("broken");
     });

   $http.get("http://daretodiscover.herokuapp.com/wines")
		.success(function(wines) {
     	$scope.wines=wines;	
     })
    .error(function() { 
      alert("broken");
     });
*/
var hitAPI = function(word){
    console.log('get here?');
    $.ajax({
        type: 'GET',
        url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + word + '?key=99bb6d8c-33b2-42be-845c-5a08ff2d8e33',
        success: function(word) {
            doTheStuff(word);   
            console.log(word);                 
        },
        error: function() {
            alert("Something went wrong")
        }
    });
}    

var doTheStuff = function(word) {
    console.log(word);
          var xml = $(word);
          var firstNode = xml.find('entry_list');
          console.log(firstNode+ 'thjis');
          var entry = firstNode.firstChild;  
          console.log(entry);
          //var content = entry.text();
          //console.log(content);
}

$(document).ready(function() {

    // $('body').on('click', 'submit-button', hitAPI);

    $('#submit-button').click(function() {        
        var word = $('#the-word').val();
        console.log(word);      
        hitAPI(word);                       
    });
    $('.login-edmodo-button').click(loginEdmodo);   
    $('#submit-button-two').click(showGroups);
    
});


var loginEdmodo = function() {
    window.open("https://api.edmodo.com/oauth/authorize?client_id=8d06878fb27b4913af74a7a12936bcebeacbf4b7aeef6fcc1aeb0c63a04996f6&redirect_uri=http://localhost:3000&scope=basic%20read_groups&response_type=token", "_blank");       
};

var getUrlParameter = function(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++) 
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) 
        {
            return sParameterName[1];
        }
    }
}     
var codeValue = getUrlParameter('code');
console.log(codeValue);

var getToken = function(codeValue) {
    $.ajax({
        type: "POST",
        url: "https://api.edmodo.com/oauth/token",
        data: {
            "client_id": "8d06878fb27b4913af74a7a12936bcebeacbf4b7aeef6fcc1aeb0c63a04996f6",
            "client_secret": "e88ef75723d56b78b4da600ff5d1e0c7212567c6471239fa92c09a663c676f65",
            "redirect_uri": "http://localhost:3000",
            "code": codeValue,
            "grant_type": "authorization_code"
        },      
        success: function(response) {
            console.log(response.access_token);             
        },
        dataType: "json"
    });  
}

var getHashValue = function(key) {
  return location.hash.match(new RegExp(key+'=([^&]*)'))[1];
}

var accessToken = getHashValue('access_token');

var showGroups = function(access_token) {
    console.log('got here');
    
    $.ajax({
        type: "GET",
        url: "https://api.edmodo.com/users/me?access_token="+accessToken,        
        success: function(response) {
            console.log(response.username);             
        },
        error: function() {
            console.log('done messed up');
        }        
    });  

}



// getToken();

var hitAPI = function(word){
    console.log('get here?');
    $.ajax({
        type: 'GET',
        url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + word + '?key=99bb6d8c-33b2-42be-845c-5a08ff2d8e33',
        success: function(word) {
            doTheStuff(word);   
            console.log(word);                 
        },
        error: function() {
            alert("Something went wrong")
        }
    });
}    

var doTheStuff = function(word) {
    console.log(word);
          var xml = $(word);
          var firstNode = xml.find('entry_list');
          console.log(firstNode);
          var entry = firstNode.firstChild;  
          console.log(entry);
          //var content = entry.text();
          //console.log(content);
}

