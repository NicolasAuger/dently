'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('admin-fonction', {
      url: '/admin-fonction',
      template: '<admin-fonction></admin-fonction>'
    });
}
