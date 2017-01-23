'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './questionnaire-dn4.routes';

export class QuestionnaireDn4Component {
  /*@ngInject*/
  constructor() {
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.questionnaire-dn4', [uiRouter])
  .config(routes)
  .component('questionnaireDn4', {
    template: require('./questionnaire-dn4.pug'),
    controller: QuestionnaireDn4Component,
    controllerAs: 'questionnaireDn4Ctrl'
  })
  .name;
