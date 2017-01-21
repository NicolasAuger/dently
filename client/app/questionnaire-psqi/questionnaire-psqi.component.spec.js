'use strict';

describe('Component: QuestionnairePsqiComponent', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.questionnaire-psqi'));

  var QuestionnairePsqiComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    QuestionnairePsqiComponent = $componentController('questionnaire-psqi', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
