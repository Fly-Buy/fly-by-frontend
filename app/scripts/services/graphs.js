
/**
 * @ngdoc service
 * @name flyBuyApp.graphs
 * @description
 * # api
 * Service in the flyBuyApp.
 */

angular.module('flyBuyApp')
  .service('graphs', function ($resource, $http, apihost, d3) {

    // var that = this;

    var flightData = $http({method:'POST', url: apihost + '/flights/dashboard/chart1'})

    var barChart = function(price){
      //generates a bar chart based on price
      var x = d3.scale.linear()
      .domain([0, d3.max(price)])
      .range([0, 420]);
      d3.select(".chart")
        .selectAll("div")
          .data(price)
        .enter().append("div")
          .style("width", function(d) { return x(d) + "px"; })
          .text(function(d) { return d; });
    };

    return {
      flightData: flightData,
      barChart: barChart
    };
  });
