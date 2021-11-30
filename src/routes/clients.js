var express = require('express');
var router = express.Router();

const isLogged = require('../middlewares/isLogged');
const isAdmin = require('../middlewares/isAdmin');

const clientsController = require('../controllers/clientsController')

router.get('/', isLogged, isAdmin, clientsController.getClients)

router.get('/:id', isLogged, isAdmin, clientsController.getClient)

router.get('/:id/policies', isLogged, isAdmin,  clientsController.getClientPolicies)

module.exports = router;