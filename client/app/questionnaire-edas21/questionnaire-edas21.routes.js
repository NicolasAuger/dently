'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('questionnaire-edas21', {
      url: '/questionnaire-edas21',
      template: '<questionnaire-edas-21></questionnaire-edas-21>'
    });
}
