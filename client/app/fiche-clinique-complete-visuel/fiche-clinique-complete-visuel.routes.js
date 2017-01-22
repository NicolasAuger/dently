'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('fiche-clinique-complete-visuel', {
      url: '/fiche-clinique-complete-visuel',
      template: '<fiche-clinique-complete-visuel></fiche-clinique-complete-visuel>'
    });
}
