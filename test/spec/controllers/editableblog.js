'use strict';

describe('Controller: EditableblogCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var EditableblogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditableblogCtrl = $controller('EditableblogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
