'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './questionnaire-isi.routes';

export class QuestionnaireIsiComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.questionnaire-isi', [uiRouter])
  .config(routes)
  .component('questionnaireIsi', {
    template: require('./questionnaire-isi.pug'),
    controller: QuestionnaireIsiComponent,
    controllerAs: 'questionnaireIsiCtrl'
  })
  .name;
