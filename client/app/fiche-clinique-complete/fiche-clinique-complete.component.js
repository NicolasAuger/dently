'use strict';
const angular = require('angular');

const uiRouter = require('angular-ui-router');

import routes from './fiche-clinique-complete.routes';

type Fiche = {
  author: string, // Médecin remplissant la fiche et suivant le patient
  data: {
    patient: { // Partie 0 : Informations sur le patient
      gender: string,
      name: string,
      birthdate: string,
      job: string,
      last_visit: string,
      health_report: string
    },
    consultation: { // Partie 1 : Motif de la consultation
        etat: string,
        motif: string,
        douleur: boolean
    },
    evaluation_douleur: { // Partie 2: Evaluation de la douleur
        etat: string,
    },
    environnement: { // partie 3 : Environnement
        etat: string,
        familial: string,
        social: string,
        professional: string,
        anxiete: string,
        depression: string,
        stress: string
    },
    trouble_posture: { // Partie 4: Troubles de la posture
        etat: string,
        rachidien_check: boolean,
        rachidien_text: string,
        cephalie_check: boolean,
        cephalie_text: string
    },
    trouble_sommeil: { // Partie 5: Troubles du sommeil
        etat: string,
        apnee: string,
        symptome: string,
        traitement: string,
        psqi: string,
        isi: string
    },
    trouble_occulaire:{ // Partie 6 : Troubles occulaires
        etat: string,
        text: string
    },
    habitude_nocive: { // Partie 7 : Habitudes nocives
        etat: string,
        onycophagie: string,
        mordillement: string,
        bruxisme: string,
        chewingum: string,
        tabac: string,
        autre_check: boolean,
        autre_text: string
    },
    dysfonctionnement_oraux_lingaux: { // Partie 8 : Dysfonctionnement Oraux-Linguaux
        etat: string,
        dysfonctionnement_orolingaux: boolean,
        deglutition_atypique: boolean,
        contraction_muscle: string,
        interposition_linguale: string,
        pulsion_linguale: string,
        ventilation_buccale: string,
        autre_check: boolean,
        autre_text: string,
        text:string
    },
    traumatisme: { // Partie 9 : Traumatisme
        etat: string,
        text: string
    },
    observations: { // Partie 10 : Observations complémentaires
        etat: string,
        text: string
    }
  }
};

export class FicheCliniqueCompleteComponent {
  /*@ngInject*/
  fiche: Fiche = {
    author: "", // Médecin remplissant la fiche et suivant le patient
    data: {
      patient: { // partie 0 : Informations sur le patient
        gender: "",
        name: "",
        birthdate: "",
        job: "",
        last_visit: "",
        health_report: ""
      },
      consultation: { // Partie 1 : Motif de la consultation
          etat: "",
          motif: "",
          douleur: false
      },
      evaluation_douleur: { // Partie 2: Evaluation de la douleur
          etat: "",
      },
      environnement: { // partie 3 : Environnement
          etat: "",
          familial: "",
          social: "",
          professional: "",
          anxiete: "",
          depression: "",
          stress: ""
      },
      trouble_posture: { // Partie 4: Troubles de la posture
          etat: "",
          rachidien_check: false,
          rachidien_text: "",
          cephalie_check: false,
          cephalie_text: ""
      },
      trouble_sommeil: { // Partie 5: Troubles du sommeil
          etat: "",
          apnee: "",
          symptome: "",
          traitement: "",
          psqi: "",
          isi: ""
      },
      trouble_occulaire:{ // Partie 6 : Troubles occulaires
          etat: "",
          text: ""
      },
      habitude_nocive: { // Partie 7 : Habitudes nocives
          etat: "",
          onycophagie: "",
          mordillement: "",
          bruxisme: "",
          chewingum: "",
          tabac: "",
          autre_check: false,
          autre_text: ""
      },
      dysfonctionnement_oraux_lingaux: { // Partie 8 : Dysfonctionnement Oraux-Linguaux
          etat: "",
          dysfonctionnement_orolingaux: false,
          deglutition_atypique: false,
          contraction_muscle: "",
          interposition_linguale: "",
          pulsion_linguale: "",
          ventilation_buccale: "",
          autre_check: false,
          autre_text: "",
          text:""
      },
      traumatisme: { // Partie 9 : Traumatisme
          etat: "",
          text: ""
      },
      observations: { // Partie 10 : Observations complémentaires
          etat: "",
          text: ""
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
        author: this.fiche.author, // Médecin remplissant la fiche et suivant le patient
        data: {
            patient: { // Partie 0 : Informations sur le patient
                gender: this.fiche.data.patient.gender,
                name: this.fiche.data.patient.name,
                birthdate: this.fiche.data.patient.birthdate,
                job: this.fiche.data.patient.job,
                last_visit: this.fiche.data.patient.last_visit,
                health_report: this.fiche.data.patient.health_report
            },
            consultation: { // Partie 1 : Motif de la consultation
                etat: this.data.consultation.etat,
                motif: this.data.consultation.motif,
                douleur: this.data.consultation.douleur
            },
            evaluation_douleur: { // Partie 2 : Evaluation de la douleur
                etat: this.data.evaluation_douleur.etat
            },
            environnement:{ // partie 3 : environnement
                etat: this.data.environnement.etat,
                familial: this.data.environnement.familial,
                social: this.data.environnement.social,
                professional: this.data.environnement.professional,
                anxiete: this.data.environnement.anxiete,
                depression: this.data.environnement.depression,
                stress: this.data.environnement.stress
            },
            trouble_posture: { // Partie 4: Troubles de la posture
                etat: this.data.trouble_posture.etat,
                rachidien_check: this.data.trouble_posture.rachidien_check,
                rachidien_text: this.data.trouble_posture.rachidien_text,
                cephalie_check: this.data.trouble_posture.cephalie_check,
                cephalie_text: this.data.trouble_posture.cephalie_text
            },
            trouble_sommeil: { // Partie 5: Troubles du sommeil
                etat: this.data.trouble_sommeil.etat,
                apnee: this.data.trouble_sommeil.apnee,
                symptome: this.data.trouble_sommeil.symptome,
                traitement: this.data.trouble_sommeil.traitement,
                psqi: this.data.trouble_sommeil.psqi,
                isi: this.data.trouble_sommeil.isi
            },
            trouble_occulaire:{ // Partie 6 : Troubles occulaires
                etat: this.data.trouble_occulaire.etat,
                text: this.data.trouble_occulaire.text
            },
            habitude_nocive: { // Partie 7 : Habitudes nocives
                etat: this.data.habitude_nocive.etat,
                onycophagie: this.data.habitude_nocive.onycophagie,
                mordillement: this.data.habitude_nocive.mordillement,
                bruxisme: this.data.habitude_nocive.bruxisme,
                chewingum: this.data.habitude_nocive.chewingum,
                tabac: this.data.habitude_nocive.tabac,
                autre_check: this.data.habitude_nocive.autre_check,
                autre_text: this.data.habitude_nocive.autre_text
            },
            dysfonctionnement_oraux_lingaux: { // Partie 8 : Dysfonctionnement Oraux-Linguaux
                etat: this.data.dysfonctionnement_oraux_lingaux.etat,
                dysfonctionnement_orolingaux: this.data.dysfonctionnement_oraux_lingaux.dysfonctionnement_orolingaux,
                deglutition_atypique: this.data.dysfonctionnement_oraux_lingaux.deglutition_atypique,
                contraction_muscle: this.data.dysfonctionnement_oraux_lingaux.contraction_muscle,
                interposition_linguale: this.data.dysfonctionnement_oraux_lingaux.interposition_linguale,
                pulsion_linguale: this.data.dysfonctionnement_oraux_lingaux.pulsion_linguale,
                ventilation_buccale: this.data.dysfonctionnement_oraux_lingaux.ventilation_buccale,
                autre_check: this.data.dysfonctionnement_oraux_lingaux.autre_check,
                autre_text: this.data.dysfonctionnement_oraux_lingaux.autre_text,
                text: this.data.dysfonctionnement_oraux_lingaux.text
            },
            traumatisme: { // Partie 9 : Traumatisme
                etat: this.data.traumatisme.etat,
                text: this.data.traumatisme.text
            },
            observations: { // Partie 10 : Observations complémentaires
                etat: this.data.observations.etat,
                text: this.data.observations.text
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
