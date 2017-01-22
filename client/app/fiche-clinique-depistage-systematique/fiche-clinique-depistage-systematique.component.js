'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche-clinique-depistage-systematique.routes';

export class FicheCliniqueDepistageSystematiqueComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.fiche-clinique-depistage-systematique', [uiRouter])
  .config(routes)
  .component('ficheCliniqueDepistageSystematique', {
    template: require('./fiche-clinique-depistage-systematique.pug'),
    controller: FicheCliniqueDepistageSystematiqueComponent,
    controllerAs: 'ficheCliniqueDepistageSystematiqueCtrl'
  })
  .name;
