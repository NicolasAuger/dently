'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('fiches-annexes', {
      url: '/fiches-annexes',
      template: '<fiches-annexes></fiches-annexes>'
    });
}
