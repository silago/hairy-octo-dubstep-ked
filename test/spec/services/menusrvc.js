'use strict';

describe('Service: Menusrvc', function () {

  // load the service's module
  beforeEach(module('keddoApp'));

  // instantiate service
  var Menusrvc;
  beforeEach(inject(function (_Menusrvc_) {
    Menusrvc = _Menusrvc_;
  }));

  it('should do something', function () {
    expect(!!Menusrvc).toBe(true);
  });

});
