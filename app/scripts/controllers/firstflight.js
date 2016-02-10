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
    this.insertFlight = {};

    this.getAirlines = function(typedValue){
      return api.getAirlines2(typedValue).then(function(data){
        console.log(data);
        return data;
      });
    };

    api.getAirlines.query(function(data){
      that.airlines = data;
    });

    api.getAirports.query(function(data){
      that.airports = data;
    });

    api.flights.query(function(data){
      console.log(data);
    });

    this.postFlight = api.postFlight;


  });
