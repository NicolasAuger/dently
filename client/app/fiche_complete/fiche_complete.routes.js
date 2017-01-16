'use strict';

export default function routes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('fiche_complete', {
      url: '/fiche_complete',
      template: '<fiche-complete></fiche-complete>'
    });
}
