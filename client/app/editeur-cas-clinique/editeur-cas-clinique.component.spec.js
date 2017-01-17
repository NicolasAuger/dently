'use strict';

describe('Component: EditeurCasCliniqueComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.editeur-cas-clinique'));

  var EditeurCasCliniqueComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    EditeurCasCliniqueComponent = $componentController('editeur-cas-clinique', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
