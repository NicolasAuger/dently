'use strict';
/*eslint no-invalid-this:0*/
import crypto from 'crypto';
mongoose.Promise = require('bluebird');
import mongoose, {Schema} from 'mongoose';

var FicheSchema = new Schema({
  author: String,
  data: { // <-- ceci est un tableau d'attribut
      patient: { // Haut de la fiche complète
          gender: { // Genre
              type: String,
              required: true
          },
          name: { // Nom et prénom complet
              type: String,
              required: true
          },
          birthdate: { // Date de naissance
              type: String,
              required: true
          },
          job: { // Profession
              type: String,
              required: true
          },
          last_visit: { // Dernière visite
              type: String,
              required: true,
              default: "Première visite"
          },
          health_report: { // Bilan de santé
              type: String,
              required: true
          }

      },
      consultation: { // Partie 1 : Motif de la consultation
          etat: {
              type: String,
              required: true
          },
          motif: {
              type: String,
              required: false
          },
          douleur: {
              type: Boolean,
              required: false
          }
      },
      evaluation_douleur: { // Partie 2 : Evaluation de la douleur
          etat: {
              type: String,
              required: true
          }
      },
      environnement: { // partie 3 : Environnement
          etat: {
              type: String,
              required: true
          },
          familial: {
              type: String,
              required: false
          },
          social: {
              type: String,
              required: false
          },
          professional: {
              type: String,
              required: false
          },
          anxiete: {
              type: String,
              required: false
          },
          depression: {
              type: String,
              required: false
          },
          stress: {
              type: String,
              required: false
          }
      },
      trouble_posture: { // Partie 4: Troubles de la posture
          etat: {
              type: String,
              required: true
          },
          rachidien_check: {
              type: Boolean,
              required: false
          },
          rachidien_text: {
              type: String,
              required: false
          },
          cephalie_check: {
              type: Boolean,
              required: false
          },
          cephalie_text: {
              type: String,
              required: false
          }
      },
      trouble_sommeil: { // partie 5: Troubles du sommeil
          etat: {
              type: String,
              required: true
          },
          apnee: {
              type: String,
              required: false
          },
          symptome: {
              type: String,
              required: false
          },
          traitement: {
              type: String,
              required: false
          },
          psqi: {
              type: String,
              required: false
          },
          isi: {
              type: String,
              required: false
          }
      },
      trouble_occulaire: { // Partie 6 : Troubles occulaires
          etat: {
              type: String,
              required: true
          },
          text: {
              type: String,
              required: false
          }
      },
      habitude_nocive: { // Partie 7 : Habitudes nocives
          etat: {
              type: String,
              required: true
          },
          onycophagie: {
              type: String,
              required: false
          },
          mordillement: {
              type: String,
              required: false
          },
          bruxisme: {
              type: String,
              required: false
          },
          chewingum: {
              type: String,
              required: false
          },
          tabac: {
              type: String,
              required: false
          },
          autre_check: {
              type: Boolean,
              required: false
          },
          autre_text: {
              type: String,
              required: false
          }
      },
      dysfonctionnement_oraux_lingaux: { // Partie 8 : Dysfonctionnement Oraux-Linguaux
          etat: {
              type: String,
              required: true
          },
          dysfonctionnement_orolingaux: {
              type: Boolean,
              required: false
          },
          deglutition_atypique: {
              type: Boolean,
              required: false
          },
          contraction_muscle: {
              type: String,
              required: false
          },
          interposition_linguale: {
              type: String,
              required: false
          },
          pulsion_linguale: {
              type: String,
              required: false
          },
          ventilation_buccale: {
              type: String,
              required: false
          },
          autre_check: {
              type: Boolean,
              required: false
          },
          autre_text: {
              type: String,
              required: false
          },
          text:{
              type: String,
              required: false
          }
      },
      traumatisme: { // Partie 9 : Traumatisme
          etat: {
              type: String,
              required: true
          },
          text: {
              type: String,
              required: false
          }
      },
      observations: { // Partie 10 : Observations complémentaires
          etat: {
              type: String,
              required: true
          },
          text: {
              type: String,
              required: false
          }
      }
  }
});

/**
 * Validations
 */
 // Public profile information
 FicheSchema
   .virtual('profile')
   .get(function() {
     return {
       author: this.author,
       gender: this.data.patient.gender,
       name: this.data.patient.name,
       birthdate: this.data.patient.birthdate,
       job: this.data.patient.job,
       last_visit: this.data.patient.last_visit,
       health_report: this.data.patient.health_report,
     };
   });

// // Validate empty gender
// FicheSchema
//   .path('gender')
//   .validate(function(gender) {
//     return gender.length;
// }, 'Gender cannot be blank');
//
// // Validate empty name
// FicheSchema
//   .path('name')
//   .validate(function(name) {
//     return name.length;
// }, 'Name cannot be blank');
//
// // Validate empty birthdate
// FicheSchema
//   .path('birthdate')
//   .validate(function(birthdate) {
//     return birthdate.length;
// }, 'Birthdate cannot be blank');
//
// // Validate empty job
// FicheSchema
//   .path('job')
//   .validate(function(job) {
//     return job.length;
// }, 'Job cannot be blank');
//
// // Validate empty last_visit
// FicheSchema
//   .path('last_visit')
//   .validate(function(last_visit) {
//     return last_visit.length;
// }, 'Last_Visit cannot be blank');
//
// // Validate empty health_report
// FicheSchema
//   .path('health_report')
//   .validate(function(health_report) {
//     return health_report.length;
// }, 'Health_report cannot be blank');
//
//
// var validatePresenceOf = function(value) {
//   return value && value.length;
// };


export default mongoose.model('Fiche', FicheSchema);
