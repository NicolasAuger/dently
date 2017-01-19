'use strict';

export default class ListFicheController {
  fiches: Object[];

  /*@ngInject*/
  constructor(Fichier, $scope) {
    // Use the Fiche $resource to fetch all users
    this.Fichier = Fichier;
    return Fichier.getAllFiche((data) => {
        $scope.fiches = data;
    })
  }

  delete(fiche) {
    fiche.$remove();
    this.fiches.splice(this.fiches.indexOf(fiche), 1);
  }
}
