angular.module('trumpApp').controller('mainCtrl', function($scope, $interval, mainService) {
    $scope.runtime = function() {
      $scope.time = moment().format(" HH:mm");
    }

    $interval($scope.runtime, 1000);

    $scope.getQuote = function() {
      mainService.getQuote().then(function(response) {
        $scope.quote = response.data;
        console.log(response.data);
      })
    }
})
