'use strict';

/**
 * @ngdoc service
 * @name flyBuyApp.api
 * @description
 * # api
 * Service in the flyBuyApp.
 */
angular.module('flyBuyApp')
  .service('api', function ($resource, $http, apihost) {

    var airlines = $resource('http://' + apihost + '/airlines');
    var airports = $resource('http://' + apihost + '/airports');
    var flights = $resource('http://' + apihost + '/flights');

    var airlines2 = function(input){
      return $http.get('http://' + apihost + '/airlines/name/:name', {
        params: {
          name: input
        }
      });
    };

    return {
      getAirlines: airlines,
      getAirlines2: airlines2,
      getAirports: airports,
      flights: flights,
      postFlight: function(flightInfo){
        console.log(flightInfo);
        // flights.save(flightInfo);
      }
    };
  });
