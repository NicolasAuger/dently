'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './editeur-cas-clinique.routes';

export class EditeurCasCliniqueComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.editeur-cas-clinique', [uiRouter])
  .config(routes)
  .component('editeurCasClinique', {
    template: require('./editeur-cas-clinique.pug'),
    controller: EditeurCasCliniqueComponent,
    controllerAs: 'editeurCasCliniqueCtrl'
  })
  .name;
