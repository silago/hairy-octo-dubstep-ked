'use strict';

describe('Controller: EditablemapCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var EditablemapCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditablemapCtrl = $controller('EditablemapCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
