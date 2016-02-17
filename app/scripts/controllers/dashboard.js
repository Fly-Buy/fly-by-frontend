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
      console.log('that.data: ', data.data.chart_data);
      that.flightData = data;
      that.data = data.data.chart_data;
    });

    graphs.pieData.then(function(data){
      console.log("here\'s your info!",  data.data.chart_data);
      that.data = data.data.chart_data;
    });

    // graphs.pieData.then(function(data){
    //   console.log("here\'s your info!",  data.data.chart_data);
    //   that.data = data.data.chart_data;
    //
    // })

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
    //
    // this.options = {
    //   chart: {
    //       type: 'multiBarChart',
    //       height: 450,
    //       width: 600,
    //       margin : {
    //         top: 20,
    //         right: 20,
    //         bottom: 60,
    //         left: 70
    //       },
    //       x: function(d){ return d.label; },
    //       y: function(d){ return d.value; },
    //       showValues: true,
    //       valueFormat: function(d){
    //           return d3.format(',.4f')(d);
    //       },
    //       transitionDuration: 10,
    //       xAxis: {
    //           axisLabel: 'Airline'
    //       },
    //       yAxis: {
    //           axisLabel: 'Price',
    //           axisLabelDistance: 10
    //       }
    //   }
    // };


    this.options = {
            chart: {
                type: 'multiBarChart',
                height: 350,
                width: 600,
                margin : {
                    top: 20,
                    right: 20,
                    bottom: 45,
                    left: 75
                },
                showControls: false,
                clipEdge: false,
                //staggerLabels: true,
                duration: 500,
                stacked: false,
                xAxis: {
                    axisLabel: 'Flights Tracked',
                    showMaxMin: false,
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                },
                yAxis: {
                    axisLabel: 'Price',
                    axisLabelDistance: -14,
                    tickFormat: function(d){
                        return d3.format(',f')(d);
                    }
                }
            }
        };

//     this.data = [{
//     "key": "Stream0",
//     "values": [{
//         "x": 0,
//         "y": 0.16284738584101344
//     }, {
//         "x": 1,
//         "y": 2.370283172738109
//     }, {
//         "x": 2,
//         "y": 0.1631208266452718
//     }, {
//         "x": 3,
//         "y": 0.24609871793543797
//     }, {
//         "x": 4,
//         "y": 1.5096133160633776
//     }]
// }, {
//     "key": "Stream1",
//     "values": [{
//         "x": 0,
//         "y": 0.12566330679904006
//     }, {
//         "x": 1,
//         "y": 0.1321859413211272
//     }, {
//         "x": 2,
//         "y": 1.4798247902549135
//     }, {
//         "x": 3,
//         "y": 0.10870538273358979
//     }, {
//         "x": 4,
//         "y": 0.16155091711225184
//     }]
// }]


    /////////////// chart buttons toggle-buttons-container
    this.show = true;

    this.showMe = function(){
      this.show=true;
    }
    this.hideMe = function(){
      this.show=false;
    }


});
