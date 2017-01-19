'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './admin-fonction.routes';

export class AdminFonctionComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.admin-fonction', [uiRouter])
  .config(routes)
  .component('adminFonction', {
    template: require('./admin-fonction.pug'),
    controller: AdminFonctionComponent,
    controllerAs: 'adminFonctionCtrl',
    authenticate: 'admin'
  })
  .name;
