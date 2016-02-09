'use strict';

/**
 * @ngdoc service
 * @name flyBuyApp.api
 * @description
 * # api
 * Service in the flyBuyApp.
 */
angular.module('flyBuyApp')
  .service('api', function ($resource, apihost) {

    var airlines = $resource('http://' + apihost + '/airlines');
    var airports = $resource('http://' + apihost + '/airports');
    var flights = $resource('http://' + apihost + '/flights');

    return {
      getAirlines: airlines,
      getAirports: airports,
      flights: flights,
      postFlight: function(flightInfo){
        console.log(flightInfo);
        // flights.save(flightInfo);
      }
    };
  });
