'use strict';

describe('Controller: AdmCtrl', function () {

  // load the controller's module
  beforeEach(module('keddoApp'));

  var AdmCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmCtrl = $controller('AdmCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
