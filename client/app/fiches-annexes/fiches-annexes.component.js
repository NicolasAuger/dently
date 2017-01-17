'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiches-annexes.routes';

export class FichesAnnexesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.fiches-annexes', [uiRouter])
  .config(routes)
  .component('fichesAnnexes', {
    template: require('./fiches-annexes.pug'),
    controller: FichesAnnexesComponent,
    controllerAs: 'fichesAnnexesCtrl'
  })
  .name;
