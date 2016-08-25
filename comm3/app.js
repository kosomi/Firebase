
var app = angular.module('myApp', ['firebase']);

app.controller('ctrl', function($scope, $firebaseObject, $firebaseArray){ 

	var ref	= new Firebase("https://anothersir.firebaseio.com/messages");
 
  // create a synchronized array
  $scope.messages = $firebaseArray(ref);
  // add new items to the array
  // the message is automatically added to our Firebase database!




  $scope.addMessage = function() {

  var newMessage = {
      text: $scope.newMessageText
    };

    $scope.messages.$add(newMessage);
    $scope.newMessageText = '';
  };
  // click on `index.html` above to see $remove() and $save() in action

});