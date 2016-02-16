
/**
 * @ngdoc service
 * @name flyBuyApp.graphs
 * @description
 * # api
 * Service in the flyBuyApp.
 */

angular.module('flyBuyApp')
  .service('graphs', function ($resource, $http, apihost, d3) {

<<<<<<< HEAD
    var flightData = $http({method:'POST', url: apihost + '/flights/dashboard/chart1'});
    var pieData = $http({method:'POST', url: apihost + '/flights/dashboard/chart2'});
=======
    var flightData = $http({method:'POST', url: apihost + '/flights/dashboard'})

    var chartOne = function(price){
      var yScale = d3.scale.linear().domain([0, d3.max(price)]).range([0,200]);
      d3.select("svg")
        .selectAll("rect")
        .data(price)
        .enter()
          .append("rect")
            .attr("width", 15)
            .attr("height", function(d) {return 100 + yScale(d)})
            .style("fill", "white")
            .style("stroke", "black")
            .style("stroke-width", "1px")
            .style("opacity", 1)
            .attr("x", function(d,i) {return i * 20})
            .attr("y", function(d) {return 200 - yScale(d)});
    };
>>>>>>> dev

    var lineChart = function(price){
      var data = [3, 6, 2, 7, 5, 2, 1, 3, 8, 9, 2, 5, 7],
      w = 400, h = 200, margin = 20,
      y = d3.scale.linear().domain([0, d3.max(data)]).range([0 + margin, h - margin]),
      x = d3.scale.linear().domain([0, data.length]).range([0 + margin, w - margin])
      var vis = d3.select("body").append("svg:svg")
          .attr("width", w).attr("height", h)
      var g = vis.append("svg:g")
          .attr("transform", "translate(0, 200)");
          var line = d3.svg.line()
          .x(function(d,i) { return x(i); })
          .y(function(d) { return -1 * y(d); })
          g.append("svg:path").attr("d", line(price));
          g.append("svg:line")
          .attr("x1", x(0)).attr("y1", -1 * y(0))
          .attr("x2", x(w)).attr("y2", -1 * y(0))
      g.append("svg:line")
          .attr("x1", x(0)).attr("y1", -1 * y(0))
          .attr("x2", x(0)).attr("y2", -1 * y(d3.max(price)))
          g.selectAll(".xLabel").data(x.ticks(5))
          .enter().append("svg:text")
          .attr("class", "xLabel").text(String)
          .attr("x", function(d) { return x(d) }).attr("y", 0)
          .attr("text-anchor", "middle")
      g.selectAll(".yLabel").data(y.ticks(4))
          .enter().append("svg:text")
          .attr("class", "yLabel").text(String)
          .attr("x", 0).attr("y", function(d) { return -1 * y(d) })
          .attr("text-anchor", "right").attr("dy", 4)
          g.selectAll(".xTicks").data(x.ticks(5))
          .enter().append("svg:line")
          .attr("class", "xTicks")
          .attr("x1", function(d) { return x(d); }).attr("y1", -1 * y(0))
          .attr("x2", function(d) { return x(d); }).attr("y2", -1 * y(-0.3))
      g.selectAll(".yTicks").data(y.ticks(4))
          .enter().append("svg:line")
          .attr("class", "yTicks")
          .attr("y1", function(d) { return -1 * y(d); }).attr("x1", x(-0.3))
          .attr("y2", function(d) { return -1 * y(d); }).attr("x2", x(0))
    }

    // ToDo
    // var chartTwo = function(rowdata){
    // }

    // var chartThree = function(rowdata){
      // this graph will show prices over departure date
      // var yScale = d3.scale().linear().domain([0,100]).range([0,100])
      // d3.select("svg")
        // selectAll("")
    // }

    return {
      flightData: flightData,
<<<<<<< HEAD
      pieData: pieData
=======
      chartOne: chartOne, // bar chart price of all flights
      lineChart: lineChart // line chart price of all flights
      // chartTwo: chartTwo, // Origin --> Destination chart
      // chartThree: chartThree // Prices over departure date (by flight)
>>>>>>> dev
    };

  });
