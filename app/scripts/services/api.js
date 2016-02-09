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

    var airlines = $resource('http://' + apihost + '/airlines',
      {
        test: {method:'GET', isArray:true}
      }
    );

    // var airlinesPromise = airlines.$promise
    //   .then(function(data) {
    //     return data;
    //   });

    return {
      getAirlines: airlines
    };
  });
