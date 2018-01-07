(function () {
'use strict';

angular.module('LaunchChek', [])

.controller('LaunchChekController', function ($scope) {
  $scope.message = "";
  $scope.dishes = "";

  $scope.displayMessage = function () {
    var message = getCorrectMessage($scope.dishes);
    $scope.message = message;
  };


  function getCorrectMessage(string) {
    var msg = "";
    if (getNumberOfDishes(string) <= 0){
      msg = "Please enter data first";
    }else if(getNumberOfDishes(string) <= 3){
      msg = "Enjoy!";
    }else {
      msg = "Too much!";
    }
    return msg;
  }

  function getNumberOfDishes(string) {
    var dishesList = string.split(",");
    var totalDishes = 0;
    dishesList.forEach(function(e){
      e = e.trim();
      if (e != "") totalDishes++;
    });
    console.log(totalDishes);
    return totalDishes;
  }



});


})();
