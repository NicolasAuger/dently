'use strict';

describe('Component: WhoAreWeComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.who-are-we'));

  var WhoAreWeComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhoAreWeComponent = $componentController('who-are-we', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
