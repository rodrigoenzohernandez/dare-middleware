const express = require('express');

const router = express.Router();

const clientsController = require('../controllers/clientsController');

const hasToken = require('../middlewares/hasToken');

router.get('/', hasToken, clientsController.getClients);

router.get('/:id', hasToken, clientsController.getClient);

router.get('/:id/policies', hasToken, clientsController.getClientPolicies);

module.exports = router;
