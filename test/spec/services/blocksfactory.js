'use strict';

describe('Service: blocksFactory', function () {

  // load the service's module
  beforeEach(module('keddoApp'));

  // instantiate service
  var blocksFactory;
  beforeEach(inject(function (_blocksFactory_) {
    blocksFactory = _blocksFactory_;
  }));

  it('should do something', function () {
    expect(!!blocksFactory).toBe(true);
  });

});
