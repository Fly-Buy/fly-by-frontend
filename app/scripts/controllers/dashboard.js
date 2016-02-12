'use strict';

/**
 * @ngdoc function
 * @name flyBuyApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the flyBuyApp
 */
angular.module('flyBuyApp')
  .controller('DashboardCtrl', function ($http) {
    $http({method:'POST',
          url:'http://localhost:3000/flights/dashboard',
        }).then(function(data){
      console.log('here\'s your info: ', data)
    })
  });
