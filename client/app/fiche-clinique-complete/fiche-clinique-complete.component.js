'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche-clinique-complete.routes';

type Fiche = {
  author: string,
  data: {
    patient: {
      gender: string,
      name: string,
      birthdate: string,
      job: string,
      last_visit: string,
      health_report: string
    }
  }
};

export class FicheCliniqueCompleteComponent {
  /*@ngInject*/
  fiche: Fiche = {
    author: "",
    data: {
      patient: {
        gender: "",
        name: "",
        birthdate: "",
        job: "",
        last_visit: "",
        health_report: ""
      }
    }
  };
  errors = {};
  submitted = false;
  Auth;
  $state;

  /*@ngInject*/
  constructor(Fichier, $state) {
    this.Fichier = Fichier;
    this.$state = $state;
  }

  register(form) {
    this.submitted = true;

    if(form.$valid) {
      return this.Fichier.createFiche({
        author: this.fiche.author,
        data: {
            patient: {
                gender: this.fiche.data.patient.gender,
                name: this.fiche.data.patient.name,
                birthdate: this.fiche.data.patient.birthdate,
                job: this.fiche.data.patient.job,
                last_visit: this.fiche.data.patient.last_visit,
                health_report: this.fiche.data.patient.health_report
            }
        }

      })
        .then(() => {
          // Fiche created, redirect to guest
          this.$state.go('main');
        })
        .catch(err => {
          err = err.data;
          this.errors = {};
          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, (error, field) => {
            form[field].$setValidity('mongoose', false);
            this.errors[field] = error.message;
          });
        });
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
