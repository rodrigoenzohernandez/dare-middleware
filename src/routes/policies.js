const express = require('express');

const router = express.Router();

const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');

const policiesController = require('../controllers/policiesController');

router.get('/', isLogged, isAdmin, policiesController.getPolicies);

router.get('/:id', isLogged, isAdmin, policiesController.getPolicy);

module.exports = router;
