'use strict';

describe('Component: StatistiquesComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.statistiques'));

  var StatistiquesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    StatistiquesComponent = $componentController('statistiques', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
