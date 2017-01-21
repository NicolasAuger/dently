'use strict';

describe('Component: DamComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.dam'));

  var DamComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DamComponent = $componentController('dam', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
