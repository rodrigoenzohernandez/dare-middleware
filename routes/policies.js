var express = require('express');
var router = express.Router();

const policiesController = require('../controllers/policiesController')


router.get('/', policiesController.getPolicies)

router.get('/:id', policiesController.getPolicy)


module.exports = router;
