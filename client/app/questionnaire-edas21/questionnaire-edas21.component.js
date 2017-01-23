'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './questionnaire-edas21.routes';

export class QuestionnaireEdas21Component {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.questionnaire-edas21', [uiRouter])
  .config(routes)
  .component('questionnaireEdas21', {
    template: require('./questionnaire-edas21.pug'),
    controller: QuestionnaireEdas21Component,
    controllerAs: 'questionnaireEdas21Ctrl'
  })
  .name;
