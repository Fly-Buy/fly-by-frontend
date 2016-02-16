'use strict';

/**
 * @ngdoc function
 * @name flyBuyApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the flyBuyApp
 */
angular.module('flyBuyApp')
  .controller('DashboardCtrl', function ($scope, $http, $location, api, graphs, d3) {

    var that = this;
    var barChart = {};

    graphs.flightData.then(function(data){
      console.log('flight data: ', data);
      that.flightData = data;
      barChart = graphs.barChart(data.data.chart_data);
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

    this.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 60,
                left: 55
            },
            x: function(d){ return d.label; },
            y: function(d){ return d.value; },
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            transitionDuration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: 30
            }
        }
    };

    this.data = [{
      key: "Cumulative Return",
      values: [
          { "label" : "A" , "value" : -29.765957771107 },
          { "label" : "B" , "value" : 0 },
          { "label" : "C" , "value" : 32.807804682612 },
          { "label" : "D" , "value" : 196.45946739256 },
          { "label" : "E" , "value" : 0.19434030906893 },
          { "label" : "F" , "value" : -98.079782601442 },
          { "label" : "G" , "value" : -13.925743130903 },
          { "label" : "H" , "value" : -5.1387322875705 }
          ]
      }];

  });
