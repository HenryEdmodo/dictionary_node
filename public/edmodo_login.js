$(document).ready(function() {
    $('.login-edmodo-button').click(loginEdmodo);   

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
    // console.log(codeValue);

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
/*
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
*/
