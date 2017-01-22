'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('dam-diagnostic', {
      url: '/dam-diagnostic',
      template: '<dam-diagnostic></dam-diagnostic>'
    });
}
