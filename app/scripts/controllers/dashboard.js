'use strict';

/**
 * @ngdoc function
 * @name flyBuyApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the flyBuyApp
 */
angular.module('flyBuyApp')
  .controller('DashboardCtrl', function ($scope, $http, $location, api, graphs) {

    var that = this;
    var chartOne = {};

    graphs.flightData.then(function(data){
      console.log('flight data: ', data);
      that.flightData = data;
      barChart = graphs.chartOne(data.data.chart_data);
      // To Do:
      // pieChart = graphs.chartTwo(data.data.row_data);
      // lineChart = graphs.chartThree(data.data.row_data);
    });

    this.flightInfo = {
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

    this.postFlight = function(flightInfo){
      console.log(flightInfo);
      // if ($scope.flightinfoform.$valid) {
      //   api.postFlight(flightInfo)
      //     .then(function(result){
      //       console.log(result);
      //       if (result.rowCount === 1) {
      //         $location.path('/dashboard');
      //       } else {
      //         console.log('It didn\'t insert');
      //       }
      //     });
      // } else {
      //   console.log('Form invalid: ', $scope.flightinfoform.$invalid);
      // }
    };

  });
