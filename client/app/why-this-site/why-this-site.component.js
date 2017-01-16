'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './why-this-site.routes';

export class WhyThisSiteComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.why-this-site', [uiRouter])
  .config(routes)
  .component('whyThisSite', {
    template: require('./why-this-site.pug'),
    controller: WhyThisSiteComponent,
    controllerAs: 'whyThisSiteCtrl'
  })
  .name;
