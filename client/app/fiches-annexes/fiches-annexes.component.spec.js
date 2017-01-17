'use strict';

describe('Component: FichesAnnexesComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.fiches-annexes'));

  var FichesAnnexesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FichesAnnexesComponent = $componentController('fiches-annexes', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
