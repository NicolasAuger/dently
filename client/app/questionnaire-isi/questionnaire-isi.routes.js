'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('questionnaire-isi', {
      url: '/questionnaire-isi',
      template: '<questionnaire-isi></questionnaire-isi>'
    });
}
