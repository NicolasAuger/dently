'use strict';

describe('Component: AdminFonctionComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.admin-fonction'));

  var AdminFonctionComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    AdminFonctionComponent = $componentController('admin-fonction', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
