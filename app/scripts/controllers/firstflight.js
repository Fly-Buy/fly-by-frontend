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
    //"this" is $scope basically (known as "ff" in the template)
    var that = this;

    this.insertFlight = {
      user: {},
      flightDate: null,
      purchaseDate: null,
      flightNum: null,
      Airline: null,
      DepartureAirport: null,
      ArrivalAirport: null,
      pricePaid: null,
      purchaseLocation: null
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
