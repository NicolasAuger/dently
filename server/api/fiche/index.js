'use strict';

import {Router} from 'express';
import * as controller from './fiche.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/fiches', controller.index);
router.delete('/fiches/:id', controller.destroy);
//router.get('/me', auth.isAuthenticated(), controller.me);
//router.put('/:id/password', auth.isAuthenticated(), controller.changePassword);
router.get('/fiches/:id', controller.show);
router.post('/create', controller.create);

module.exports = router;
