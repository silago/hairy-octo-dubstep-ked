'use strict';

describe('Controller: EditablecatalogCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var EditablecatalogCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditablecatalogCtrl = $controller('EditablecatalogCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
