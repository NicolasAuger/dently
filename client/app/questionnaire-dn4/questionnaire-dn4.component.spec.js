'use strict';

describe('Component: QuestionnaireDn4Component', function() {
  // load the controller's module
  beforeEach(module('dentlyApp.questionnaire-dn4'));

  var QuestionnaireDn4Component;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($componentController) {
    QuestionnaireDn4Component = $componentController('questionnaire-dn4', {});
  }));

  it('should ...', function() {
    expect(1).toEqual(1);
  });
});
