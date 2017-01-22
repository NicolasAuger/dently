'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dam', {
      url: '/dam',
      template: '<dam></dam>'
    });
}
