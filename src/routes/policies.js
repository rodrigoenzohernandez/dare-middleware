const express = require('express');

const router = express.Router();

const policiesController = require('../controllers/policiesController');

const hasToken = require('../middlewares/hasToken');

router.get('/', hasToken, policiesController.getPolicies);

router.get('/:id', hasToken, policiesController.getPolicy);

module.exports = router;
