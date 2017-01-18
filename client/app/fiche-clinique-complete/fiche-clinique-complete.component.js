'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche-clinique-complete.routes';

export class FicheCliniqueCompleteComponent {
  /*@ngInject*/
  constructor() {
    this.partie1 = {
      titre : "1. Motif de la consultation :",
      Etat : "renseigne",
      question2 : false
    }
    this.partie2 = {
      titre : "2. Evaluation de la douleur :",
      Etat : "renseigne",
    }
    this.partie3 = {
      titre : "3. Environnement :",
      Etat : "renseigne",
    }
    this.partie4 = {
      titre : "4. Trouble de la posture :",
      Etat : "renseigne",
    }
    this.partie5 = {
      titre : "5. Trouble du sommeil :",
      Etat : "renseigne",
      question1 : "non",
    }
    this.partie6 = {
      titre : "6. Troubles occulaires :",
      Etat : "renseigne",
    }
  }
}

export default angular.module('dentlyApp.fiche-clinique-complete', [uiRouter])
  .config(routes)
  .component('ficheCliniqueComplete', {
    template: require('./fiche-clinique-complete.pug'),
    controller: FicheCliniqueCompleteComponent,
    controllerAs: 'ficheCliniqueCompleteCtrl'
  })
  .name;
