'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('who-are-we', {
      url: '/who-are-we',
      template: '<who-are-we></who-are-we>',
      authenticate: 'user'
    });
}
