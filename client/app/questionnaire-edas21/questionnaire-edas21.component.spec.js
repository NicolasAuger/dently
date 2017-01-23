'use strict';

describe('Component: QuestionnaireEdas21Component', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.questionnaire-edas21'));

  var QuestionnaireEdas21Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    QuestionnaireEdas21Component = $componentController('questionnaire-edas21', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
