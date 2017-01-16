'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche_complete.routes';

export class FicheCompleteComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('fiche_complete', [uiRouter])
  .config(routes)
  .component('ficheComplete', {
    template: require('./fiche_complete.pug'),
    controller: FicheCompleteComponent,
    controllerAs: 'ficheCompleteCtrl'
  })
  .name;
