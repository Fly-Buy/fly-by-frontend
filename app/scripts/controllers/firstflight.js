'use strict';

/**
 * @ngdoc function
 * @name flyBuyApp.controller:FFCtrl
 * @description
 * # FFCtrl
 * Controller of the flyBuyApp
 */
angular.module('flyBuyApp')
  .controller('FFCtrl', function (api, lodash) {

    var that = this; //"this" is $scope basically (known as "ff" in the template)
    this.insertFlight = {};

    this.getAirlines = function(typedValue){
      console.log(typedValue);
      return api.getAirlines2().then(function(data){
        console.log(data.data);
        var results = lodash.filter(data.data, function(a){
          return a.name == typedValue;
        })
        console.log(results);
        return results.name;
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
