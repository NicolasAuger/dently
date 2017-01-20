'use strict';

import Fiche from './fiche.model';
import config from '../../config/environment';
import jwt from 'jsonwebtoken';


function validationError(res, statusCode) {
  statusCode = statusCode || 422;
  return function(err) {
      console.error(err.stack);
    return res.status(statusCode).json(err);
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    return res.status(statusCode).send(err);
  };
}

/**
 * Get list of fiches
 * restriction: 'admin, user'
 */
export function index(req, res) {
  return Fiche.find({}).exec()
    .then(fiches => {
      res.status(200).json(fiches);
    })
    .catch(handleError(res));
}

/**
 * Creates a new fiche
 */
export function create(req, res) {
  console.log(JSON.stringify(req.body));
  var newFiche = new Fiche(req.body);


  newFiche.save()
    .then(function(fiche) {
      console.log(fiche);
      res.json(fiche);
    })
    .catch(validationError(res));
}

/**
 * Get a single fiche
 */
export function show(req, res, next) {
  var ficheId = req.params.id;

  return Fiche.findById(ficheId).exec()
    .then(fiche => {
      if(!fiche) {
        return res.status(404).end();
      }
      res.json(fiche.profile);
    })
    .catch(err => next(err));
}

/**
 * Deletes a fiche
 * restriction: 'admin, user'
 */
export function destroy(req, res) {
  return Fiche.findByIdAndRemove(req.params.id).exec()
    .then(function() {
      res.status(204).end();
    })
    .catch(handleError(res));
}


/**
 * Authentication callback
 */
export function authCallback(req, res) {
  res.redirect('/');
}
