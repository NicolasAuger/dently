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
    this.partie7 = {
      titre : "7. Habitudes nocives :",
      Etat : "renseigne",
    }
    this.partie8 = {
      titre : "8. Dysfonctionnement oraux-linguaux :",
      Etat : "renseigne",
    }
    this.partie9 = {
      titre : "9. Traumatisme :",
      Etat : "renseigne",
    }
    this.partie10 = {
      titre : "10. Observations complémentaires :",
      Etat : "renseigne",
    }
    this.partie11 = {
      titre : "11. Palpation(s) douloureuse(s) des muscles masticateurs, des ATM, et des muscles cervico-scapulaires :",
      Etat : "renseigne",
      douleurs : [
      {name: "M. Temporal droit", value : "mTemporalDroit"},
      {name: "M. Temporal gauche", value : "mTemporalGauche"},
      {name: "M. Masséter droit", value:"mMasseterDroit"},
      {name: "M. Masséter gauche", value : "mMasseterGauche"},
      {name: "ATM droite", value : "atmDroite"},
      {name: "ATM gauche", value : "atmGauche"},
      {name: "Autre", value : "autre"}
      ]
    }
    this.partie12 = {
      titre : "12. Rapports incisifs :",
      Etat : "renseigne",
    }
    this.partie13 = {
      titre : "13. Mouvements d'ouverture, latéralités et propulsion :",
      Etat : "renseigne",
    }
    this.partie14 = {
      titre : "14. Trajet d'ouverture/fermeture :",
      Etat : "renseigne",
    }
    this.partie15 = {
      titre : "15. Bruits articulaires lors des mouvements fonctionnels :",
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
