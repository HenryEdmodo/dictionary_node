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

$(document).ready(function() {

    // $('body').on('click', 'submit-button', hitAPI);

    $('#submit-button').click(function(word) {
        var word = $('#the-word').val();
        console.log(word);
        hitAPI(word);
    });

    var hitAPI = function(word){
         $.ajax({
        type: 'GET',
        url: 'http://www.dictionaryapi.com/api/v1/references/collegiate/xml/' + word + '?key=99bb6d8c-33b2-42be-845c-5a08ff2d8e33',
        success: function(word) {

            console.log(word);
            var source = $('#users-template').html();

            var template = Handlebars.compile(source);

            var html = template({
                allUsers: users
            });

            $('#container').html(html);
        },
        error: function() {
            alert("Something went wrong")
        }

    });
    }
    

   
});