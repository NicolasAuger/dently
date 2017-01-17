'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('statistiques', {
      url: '/statistiques',
      template: '<statistiques></statistiques>'
    });
}
