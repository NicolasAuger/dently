'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('guest', {
      url: '/guest',
      template: '<guest></guest>'
    });
}
