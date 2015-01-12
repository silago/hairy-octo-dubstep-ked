'use strict';

describe('Controller: MapeditableCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var MapeditableCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MapeditableCtrl = $controller('MapeditableCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
