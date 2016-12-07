angular.module('trumpApp').service('mainService', function($http) {


  this.getQuote = function(){
      return $http({
        method: 'GET',
        url: "https://api.whatdoestrumpthink.com/api/v1/quotes/random"
      })
  }
})
