'use strict';
// @flow

class _Fiche {
    _id: string = '';
    author: string = '';
    data: {
        patient: {
            gender: '',
            name: '',
            birthdate: '',
            job: '',
            last_visit: '',
            health_report: ''
        }
    }
    $promise = undefined
}

export function FicheService($location, $http, $cookies, $q, appConfig, Util) {
  'ngInject';

  var safeCb = Util.safeCb;

  var Fichier = {

    /**
     * Create a new fiche
     *
     * @param  {Object}   fiche     - fiche info
     * @param  {Function} callback - function(error, fiche)
     * @return {Promise}
     */
    createFiche(fiche, callback ? : Function) {
        return $http({
            method: "POST",
            url: "/api/fiche/create",
            data: fiche
        })
        .then(function(data) {
          return safeCb(callback)(null, fiche);
        }, function(err) {
          return safeCb(callback)(err);
        })
    },

    /**
     * Get list of fiches
     *
     * @param  {Object}   fiches     - fiches info
     * @param  {Function} callback - function(error, fiche)
     * @return {Promise}
     */
    getAllFiche(callback ? : Function) {
        return $http({
            method: "GET",
            url: "/api/fiche/fiches",
        })
        .then(function(res) {
          return safeCb(callback)(res.data);
        }, function(err) {
          return safeCb(callback)(err);
        })
    },


    /**
     * Delete a fiche
     *
     * @param  {Object}   fiche     - fiches info
     * @param  {Function} callback - function(error, fiche)
     * @return {Promise}
     */
    deleteFiche(fiche, callback ? : Function) {
        return $http({
            method: "DELETE",
            url: "/api/fiche/fiches/:id",
        })
        .then(function(res) {
          return safeCb(callback)(res.data);
        }, function(err) {
          return safeCb(callback)(err);
        })
    },

    //
    // /**
    //  * Gets all available info on a user
    //  *
    //  * @param  {Function} [callback] - function(user)
    //  * @return {Promise}
    //  */
    // getCurrentUser(callback ? : Function) {
    //   var value = _.get(currentUser, '$promise') ? currentUser.$promise : currentUser;
    //
    //   return $q.when(value)
    //     .then(user => {
    //       safeCb(callback)(user);
    //       return user;
    //     }, () => {
    //       safeCb(callback)({});
    //       return {};
    //     });
    // },

    // /**
    //  * Gets all available info on a user
    //  *
    //  * @return {Object}
    //  */
    // getCurrentUserSync() {
    //   return currentUser;
    // },

};
  return Fichier;
}
