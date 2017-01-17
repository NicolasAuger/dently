'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('protocoles', {
      url: '/protocoles',
      template: '<protocoles></protocoles>'
    });
}
