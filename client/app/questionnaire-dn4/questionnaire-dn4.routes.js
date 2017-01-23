'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('questionnaire-dn4', {
      url: '/questionnaire-dn4',
      template: '<questionnaire-dn-4></questionnaire-dn-4>'
    });
}
