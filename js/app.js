angular.module('trumpApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('home' ,{
        templateUrl: '/views/home.html',
        controller: 'mainCtrl',
        url: '/'
      })
      .state('about', {
        templateUrl: 'views/about.html',
        controller: 'aboutCtrl'
      })
      .state('contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
  })
