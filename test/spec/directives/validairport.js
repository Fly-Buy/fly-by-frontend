'use strict';

describe('Directive: validAirport', function () {

  // load the directive's module
  beforeEach(module('flyBuyApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<valid-airport></valid-airport>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the validAirport directive');
  }));
});
