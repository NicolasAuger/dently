'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('etudes', {
      url: '/etudes',
      template: '<etudes></etudes>'
    });
}
