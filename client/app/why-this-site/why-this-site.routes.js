'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('why-this-site', {
      url: '/why-this-site',
      template: '<why-this-site></why-this-site>'
    });
}
