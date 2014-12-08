'use strict';

describe('Service: blockSrvc', function () {

  // load the service's module
  beforeEach(module('keddoApp'));

  // instantiate service
  var blockSrvc;
  beforeEach(inject(function (_blockSrvc_) {
    blockSrvc = _blockSrvc_;
  }));

  it('should do something', function () {
    expect(!!blockSrvc).toBe(true);
  });

});
