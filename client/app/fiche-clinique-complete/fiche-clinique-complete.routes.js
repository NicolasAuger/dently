'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('fiche-clinique-complete', {
      url: '/fiche-clinique-complete',
      template: '<fiche-clinique-complete></fiche-clinique-complete>'
    });
}
