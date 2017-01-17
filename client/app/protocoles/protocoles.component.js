'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './protocoles.routes';

export class ProtocolesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.protocoles', [uiRouter])
  .config(routes)
  .component('protocoles', {
    template: require('./protocoles.pug'),
    controller: ProtocolesComponent,
    controllerAs: 'protocolesCtrl'
  })
  .name;
