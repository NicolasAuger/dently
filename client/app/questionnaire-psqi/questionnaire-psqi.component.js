'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './questionnaire-psqi.routes';

export class QuestionnairePsqiComponent {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.questionnaire-psqi', [uiRouter])
  .config(routes)
  .component('questionnairePsqi', {
    template: require('./questionnaire-psqi.pug'),
    controller: QuestionnairePsqiComponent,
    controllerAs: 'questionnairePsqiCtrl'
  })
  .name;
