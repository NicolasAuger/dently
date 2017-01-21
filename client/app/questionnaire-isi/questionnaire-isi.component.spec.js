'use strict';

describe('Component: QuestionnaireIsiComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.questionnaire-isi'));

  var QuestionnaireIsiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    QuestionnaireIsiComponent = $componentController('questionnaire-isi', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
