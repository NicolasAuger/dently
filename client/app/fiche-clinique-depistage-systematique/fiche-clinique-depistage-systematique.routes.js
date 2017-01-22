'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('fiche-clinique-depistage-systematique', {
      url: '/fiche-clinique-depistage-systematique',
      template: '<fiche-clinique-depistage-systematique></fiche-clinique-depistage-systematique>'
    });
}
