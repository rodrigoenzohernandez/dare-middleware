var express = require('express');
var router = express.Router();

const clientsController = require('../controllers/clientsController')


router.get('/', clientsController.getClients)

router.get('/:id', clientsController.getClient)

router.get('/:id/policies', clientsController.getClientPolicies)



module.exports = router;
