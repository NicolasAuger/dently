'use strict';

describe('Component: FicheCompleteComponent', function() {
  // load the controller's module
  beforeEach(module('fiche_complete'));

  var FicheCompleteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    FicheCompleteComponent = $componentController('fiche_complete', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
