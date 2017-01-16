'use strict';

describe('Component: WhyThisSiteComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.why-this-site'));

  var WhyThisSiteComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    WhyThisSiteComponent = $componentController('why-this-site', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
