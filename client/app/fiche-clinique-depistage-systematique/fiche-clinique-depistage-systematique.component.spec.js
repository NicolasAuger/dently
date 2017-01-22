'use strict';

describe('Component: FicheCliniqueDepistageSystematiqueComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.fiche-clinique-depistage-systematique'));

  var FicheCliniqueDepistageSystematiqueComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FicheCliniqueDepistageSystematiqueComponent = $componentController('fiche-clinique-depistage-systematique', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
