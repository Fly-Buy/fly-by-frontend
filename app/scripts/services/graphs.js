
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

    // creates the price/flight chart
    var chartOne = function(price){
    // D3 method for creating an X/Y or "linear" chart
    var yScale = d3.scale.linear().domain([0, d3.max(price)]).range([0,200]);
      d3.select("svg") // selects svg element in dashboard.html
        .selectAll("rect") // declares an svg rectangle element
        .data(price) // binds the value of price to the rect elements
        .enter() // enters a for loop that iterates over the data array and does the following for each:
          .append("rect") // append the declared rectangle
            .attr("width", 15) // give each rect a width of 10
            .attr("height", function(d) {return yScale(d)}) // and a height of "d", which is a D3 variable for accessing your data
            .style("fill", "blue") // fill each svg elem with blue
            .style("stroke", "red") // and give it a red border (can do this in dashboard.scss, too)
            .style("stroke-width", "1px")
            .style("opacity", .25)
            .attr("x", function(d,i) {return i * 20}) // set the width of the graph equal to the ammoutn of indexes in the array or "i" * 20
            .attr("y", function(d) {return 200 - yScale(d)});

    };

    // ToDo
    // var chartTwo = function(rowdata){
    // }
    // var chartThree = function(rowdata){
    // }

    return {
      flightData: flightData,
      chartOne: chartOne
      // chartTwo: chartTwo,
      // chartThree: chartThree
    };
  });
