'use strict';

export default function($stateProvider) {
  'ngInject';
  $stateProvider
    .state('editeur-cas-clinique', {
      url: '/editeur-cas-clinique',
      template: '<editeur-cas-clinique></editeur-cas-clinique>'
    });
}
