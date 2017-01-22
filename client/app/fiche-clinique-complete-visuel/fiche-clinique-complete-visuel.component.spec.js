'use strict';

describe('Component: FicheCliniqueCompleteVisuelComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.fiche-clinique-complete-visuel'));

  var FicheCliniqueCompleteVisuelComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FicheCliniqueCompleteVisuelComponent = $componentController('fiche-clinique-complete-visuel', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
