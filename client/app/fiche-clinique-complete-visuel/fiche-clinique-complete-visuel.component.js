'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche-clinique-complete-visuel.routes';

export class FicheCliniqueCompleteVisuelComponent {
  /*@ngInject*/
  constructor() {
    this.douleurs = [
      {name: "M. temporal droit", value: "mTemporalDroit"},
      {name: "M. temporal gauche", value: "mTemporalGauche"},
      {name: "M. masséter doit", value: "mMasseterDroit"},
      {name: "M. masséter gauche", value: "mMasseterGauche"},
      {name: "Atm droite", value: "atmDroite"},
      {name: "Atm gauche", value: "atmGauche"},
      {name: "Autres...", value: "autre"},
    ] ;
    this.message = 'Hello';
  }
}

export default angular.module('dentlyApp.fiche-clinique-complete-visuel', [uiRouter])
  .config(routes)
  .component('ficheCliniqueCompleteVisuel', {
    template: require('./fiche-clinique-complete-visuel.pug'),
    controller: FicheCliniqueCompleteVisuelComponent,
    controllerAs: 'vm'
  })
  .name;
