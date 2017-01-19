'use strict';

export default function routes($stateProvider) {
  'ngInject';

  $stateProvider.state('list-fiche', {
    url: '/fiches',
    template: require('./list-fiche.pug'),
    controller: 'ListFicheController',
    controllerAs: 'list-fiche',
    authenticate: 'user'
  });
}
