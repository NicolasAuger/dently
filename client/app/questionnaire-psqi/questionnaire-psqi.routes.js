'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('questionnaire-psqi', {
      url: '/questionnaire-psqi',
      template: '<questionnaire-psqi></questionnaire-psqi>'
    });
}
