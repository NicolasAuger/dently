'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './guest.routes';

export class GuestComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.guest', [uiRouter])
  .config(routes)
  .component('guest', {
    template: require('./guest.pug'),
    controller: GuestComponent,
    controllerAs: 'guestCtrl'
  })
  .name;
