'use strict';

describe('Service: blocksStack', function () {

  // load the service's module
  beforeEach(module('keddoApp'));

  // instantiate service
  var blocksStack;
  beforeEach(inject(function (_blocksStack_) {
    blocksStack = _blocksStack_;
  }));

  it('should do something', function () {
    expect(!!blocksStack).toBe(true);
  });

});
