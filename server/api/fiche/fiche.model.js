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
