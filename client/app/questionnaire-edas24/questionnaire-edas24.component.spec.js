'use strict';

describe('Component: QuestionnaireEdas24Component', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.questionnaire-edas24'));

  var QuestionnaireEdas24Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    QuestionnaireEdas24Component = $componentController('questionnaire-edas24', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
