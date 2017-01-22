'use strict';

import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
// import ngMessages from 'angular-messages';
// import ngValidationMatch from 'angular-validation-match';


import {
  routeConfig
} from './app.config';

import _Auth from '../components/auth/auth.module';
import _Fiche from '../components/fichier/fichier.module';
import account from './account';
import admin from './admin';
import admin_fonction from './admin-fonction/admin-fonction.component';
import list_fiche from './list-fiche'
import user from './user/user.component';
import guest from './guest/guest.component';
import navbar from '../components/navbar/navbar.component';
import footer from '../components/footer/footer.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';
//pages :

import whoAreWe from './who-are-we/who-are-we.component';
import whyThisSite from './why-this-site/why-this-site.component';
import editeurCasClinique from './editeur-cas-clinique/editeur-cas-clinique.component';
import etudes from './etudes/etudes.component';
import fichesAnnexes from './fiches-annexes/fiches-annexes.component';
import ficheCliniqueComplete from './fiche-clinique-complete/fiche-clinique-complete.component';
import protocoles from './protocoles/protocoles.component';
import statistiques from './statistiques/statistiques.component';
import contact from './contact/contact.component';
import questionnaireIsi from './questionnaire-isi/questionnaire-isi.component';
import questionnairePsqi from './questionnaire-psqi/questionnaire-psqi.component';
import ficheCliniqueDepistageSystematique from './fiche-clinique-depistage-systematique/fiche-clinique-depistage-systematique.component';

import './app.styl';

angular.module('dentlyApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io', uiRouter,  uiBootstrap, _Auth, _Fiche, account,
  admin, admin_fonction, list_fiche, user, guest, whoAreWe, whyThisSite,editeurCasClinique, etudes, fichesAnnexes, ficheCliniqueComplete, protocoles, statistiques, contact, questionnaireIsi, questionnairePsqi, ficheCliniqueDepistageSystematique,
  ,navbar, footer, main, constants, socket, util
])
  .config(routeConfig)
  .run(function($rootScope, $location, Auth) {
    'ngInject';
    // Redirect to login if route requires auth and you're not logged in

    $rootScope.$on('$stateChangeStart', function(event, next) {
      Auth.isLoggedIn(function(loggedIn) {
        if(next.authenticate && !loggedIn) {
          $location.path('/login');
        }
      });
    });

    // $rootScope.$on('$stateChangeSuccess', function(event, next) {
    //     var element = document.createElement("script");
    //     element.innerText = "$(document).ready(function () {  $('select').material_select(); });";
    //     var main = document.getElementById('mainElementControl');
    //     main.appendChild(element);
    // });
  });

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['dentlyApp'], {
      strictDi: true
    });
  });
