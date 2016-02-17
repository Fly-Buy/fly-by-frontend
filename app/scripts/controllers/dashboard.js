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

      var updateNewData = function(){
        var updateGData = new graphs.flightData2();
        updateGData = updateGData.$save();
        updateGData.then(function(data){
          console.log(data);
          console.log('that.data2: ', data.chart_data);
          console.log('that.row_data2: ', data.row_data);
          that.data = data.chart_data;
          that.row_data = data.row_data;
        });
      };

      this.limitData = function(flightInfo){
        console.log(flightInfo);
        var searchGData = new graphs.flightData2();
        searchGData.user_id = null;
        searchGData.flight_date = flightInfo.flightDate || null;
        searchGData.purchase_date = flightInfo.purchaseDate || null;
        searchGData.flight_number = flightInfo.flightNum || null;
        searchGData.price_paid = flightInfo.pricePaid;
        searchGData.purchase_location = flightInfo.purchaseLocation || null;
        searchGData.departure_airport_id = flightInfo.DepartureAirport ? flightInfo.DepartureAirport.id: undefined;
        searchGData.arrival_airport_id = flightInfo.ArrivalAirport ? flightInfo.ArrivalAirport.id : undefined;
        searchGData.airline_id = flightInfo.Airline ? flightInfo.Airline.id : undefined;
        searchGData.suspect = flightInfo.suspect || false;
        searchGData = searchGData.$save();
        searchGData.then(function(data){
          console.log(data);
          console.log('that.data2: ', data.chart_data);
          console.log('that.row_data2: ', data.row_data);
          that.data = data.chart_data;
          that.row_data = data.row_data;
        });
      };

      updateNewData();

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
      if ($scope.flightinfoform.$valid) {
        api.postFlight(flightInfo)
          .then(function(result){
            console.log(result);
            if (result.rowCount === 1) {
              console.log("It worked");
              updateNewData();
            } else {
              console.log('It didn\'t insert');
            }
          });
      } else {
        console.log('Form invalid: ', $scope.flightinfoform.$invalid);
      }
    };


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

    var width = $(".graph-container").width();
    var height = $(".graph-container").height();
    this.options = {
            chart: {
                type: 'multiBarChart',
                height: height - 50,
                width: width * .75,
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



    /////////////// chart buttons toggle-buttons-container
    this.show = true;

    this.showMe = function(){
      this.show=true;
    };
    this.hideMe = function(){
      this.show=false;
    };


});
