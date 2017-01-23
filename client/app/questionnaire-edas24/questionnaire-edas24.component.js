'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './questionnaire-edas24.routes';

export class QuestionnaireEdas24Component {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.questionnaire-edas24', [uiRouter])
  .config(routes)
  .component('questionnaireEdas24', {
    template: require('./questionnaire-edas24.pug'),
    controller: QuestionnaireEdas24Component,
    controllerAs: 'questionnaireEdas24Ctrl'
  })
  .name;
