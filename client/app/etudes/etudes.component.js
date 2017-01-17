'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './etudes.routes';

export class EtudesComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
    this.back=function(){
      $window.history.back()
    };
  }
}

export default angular.module('dentlyApp.etudes', [uiRouter])
  .config(routes)
  .component('etudes', {
    template: require('./etudes.pug'),
    controller: EtudesComponent,
    controllerAs: 'etudesCtrl'
  })
  .name;
