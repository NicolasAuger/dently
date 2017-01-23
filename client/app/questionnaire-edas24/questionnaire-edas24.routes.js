'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('questionnaire-edas24', {
      url: '/questionnaire-edas24',
      template: '<questionnaire-edas-24></questionnaire-edas-24>'
    });
}
