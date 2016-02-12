'use strict';

/**
 * @ngdoc function
 * @name flyBuyApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the flyBuyApp
 */
angular.module('flyBuyApp')
  .controller('DashboardCtrl', function (graphs) {
    var that = this;
    var barChart = {};

    graphs.flightData.then(function(data){
      console.log('flight data: ', data);
      that.flightData = data;
      barChart = graphs.barChart(data.data.chart_data);
    });


  });
