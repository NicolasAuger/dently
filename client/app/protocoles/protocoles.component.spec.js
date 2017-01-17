'use strict';

describe('Component: ProtocolesComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.protocoles'));

  var ProtocolesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    ProtocolesComponent = $componentController('protocoles', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
