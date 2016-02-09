'use strict';

/**
 * @ngdoc function
 * @name flyBuyApp.controller:FFCtrl
 * @description
 * # FFCtrl
 * Controller of the flyBuyApp
 */
angular.module('flyBuyApp')
  .controller('FFCtrl', function (api) {

    var that = this; //"this" is $scope basically (known as "ff" in the template)

    api.getAirlines.query(function(data){
      that.airlines = data;
      console.log(that.airlines);
    });
    
  });
