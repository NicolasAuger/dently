'use strict';

describe('Component: FicheCliniqueCompleteComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.fiche-clinique-complete'));

  var FicheCliniqueCompleteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FicheCliniqueCompleteComponent = $componentController('fiche-clinique-complete', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
