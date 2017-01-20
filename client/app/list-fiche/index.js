'use strict';

import angular from 'angular';
import routes from './list-fiche.routes';
import ListFicheController from './list-fiche.controller';

export default angular.module('dentlyApp.list-fiche', ['dentlyApp.auth', 'dentlyApp.fichier', 'ui.router'])
  .config(routes)
  .controller('ListFicheController', ListFicheController)
  .name;
