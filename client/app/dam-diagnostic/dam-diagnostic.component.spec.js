'use strict';

describe('Component: DamDiagnosticComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.dam-diagnostic'));

  var DamDiagnosticComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    DamDiagnosticComponent = $componentController('dam-diagnostic', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
