'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './dam-diagnostic.routes';

export class DamDiagnosticComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.dam-diagnostic', [uiRouter])
  .config(routes)
  .component('damDiagnostic', {
    template: require('./dam-diagnostic.pug'),
    controller: DamDiagnosticComponent,
    controllerAs: 'damDiagnosticCtrl'
  })
  .name;
