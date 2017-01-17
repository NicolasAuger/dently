'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './statistiques.routes';

export class StatistiquesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.statistiques', [uiRouter])
  .config(routes)
  .component('statistiques', {
    template: require('./statistiques.pug'),
    controller: StatistiquesComponent,
    controllerAs: 'statistiquesCtrl'
  })
  .name;
