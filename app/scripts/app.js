'use strict';

angular
  .module('flyBuyApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/firstflight', {
        templateUrl: 'views/firstflight.html',
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
      })
      .otherwise({
        redirectTo: 'views/main.html'
      });
  });
