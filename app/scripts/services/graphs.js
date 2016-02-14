
/**
 * @ngdoc service
 * @name flyBuyApp.graphs
 * @description
 * # api
 * Service in the flyBuyApp.
 */

angular.module('flyBuyApp')
  .service('graphs', function ($resource, $http, apihost, d3) {
    var flightData = $http({method:'POST', url: apihost + '/flights/dashboard'})

    var chartOne = function(price){
      //generates a bar chart based on price
       var yScale = d3.scale.linear().domain([0,24500]).range([0,100]);
      d3.select("svg")
      .selectAll("rect")
      .data(price)
      .enter()
      .append("rect")
      .attr("width", 10)
      .attr("height", function(d) {return yScale(d)})
      .style("fill", "blue")
      .style("stroke", "red")
      .style("stroke-width", "1px")
      .style("opacity", .25)
      .attr("x", function(d,i) {return i * 10})
      .attr("y", function(d) {return 100 - yScale(d)});
    };

    return {
      flightData: flightData,
      chartOne: chartOne
    };
  });
