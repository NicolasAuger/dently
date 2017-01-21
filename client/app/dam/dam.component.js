'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dam.routes';

export class DamComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.dam', [uiRouter])
  .config(routes)
  .component('dam', {
    template: require('./../dam-diagnostic/dam-diagnostic.pug'),
    controller: DamComponent,
    controllerAs: 'damCtrl'
  })
  .name;
