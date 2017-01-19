'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche-clinique-complete.routes';

export class FicheCliniqueCompleteComponent {
  /*@ngInject*/
  constructor() {
    this.douleurs = [
      {name: "M. Temporal droit", value : "mTemporalDroit"},
      {name: "M. Temporal gauche", value : "mTemporalGauche"},
      {name: "M. Masséter droit", value:"mMasseterDroit"},
      {name: "M. Masséter gauche", value : "mMasseterGauche"},
      {name: "ATM droite", value : "atmDroite"},
      {name: "ATM gauche", value : "atmGauche"},
      {name: "Autre", value : "autre"}
    ]
    this.data = {
      partie1 : {
        titre : "1. Motif de la consultation :",
        Etat : "renseigne",
      },
      partie2: {
        titre : "2. Evaluation de la douleur :",
        Etat : "renseigne",
      },
      partie3: {
        titre : "3. Environnement :",
        Etat : "renseigne",
      },
      partie4: {
        titre : "4. Trouble de la posture :",
        Etat : "renseigne",
      },
      partie5: {
        titre : "5. Trouble du sommeil :",
        Etat : "renseigne",
        question1 : "non",
      },
      partie6: {
        titre : "6. Troubles occulaires :",
        Etat : "renseigne",
      },
      partie7 : {
        titre : "7. Habitudes nocives :",
        Etat : "renseigne",
      },
      partie8 : {
      titre : "8. Dysfonctionnement oraux-linguaux :",
      Etat : "renseigne",
      },
      partie9 : {
      titre : "9. Traumatisme :",
      Etat : "renseigne",
      },
    partie10 : {
      titre : "10. Observations complémentaires :",
      Etat : "renseigne",
    },
    partie11 : {
      titre : "11. Palpation(s) douloureuse(s) des muscles masticateurs, des ATM, et des muscles cervico-scapulaires :",
      Etat : "renseigne",
      ligne4 : {
        question1 : "non"
        }
      },
      partie12 : {
      titre : "12. Rapports incisifs :",
      Etat : "renseigne",
      question4checker : "non"
      },
      partie16 : {
        titre : "16. Blocage articulaire :",
        Etat : "renseigne"
      },
      partie17 : {
        titre : "17. Test du bâtonnet :",
        Etat : "renseigne"
      },
      partie18 : {
        titre : "18. Elasticité articulaire :",
        Etat : "renseigne"
      },
      partie19 : {
        titre : "19. Examen endo-buccal :",
        Etat : "renseigne"
      },
      partie20 : {
        titre : "20. Usures dentaires / bruxismes :",
        Etat : "renseigne"
      }
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
    controllerAs: 'vm'
  })
  .name;
