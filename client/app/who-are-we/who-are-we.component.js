'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './who-are-we.routes';

export class WhoAreWeComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.who-are-we', [uiRouter])
  .config(routes)
  .component('whoAreWe', {
    template: require('./who-are-we.pug'),
    controller: WhoAreWeComponent,
    controllerAs: 'whoAreWeCtrl'
  })
  .name;
