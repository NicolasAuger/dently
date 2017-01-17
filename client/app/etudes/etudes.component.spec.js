'use strict';

describe('Component: EtudesComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.etudes'));

  var EtudesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EtudesComponent = $componentController('etudes', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
