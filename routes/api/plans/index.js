var express = require('express');
var router = express.Router();

const { planController } = require('@/controllers');

// controller assignment
router.get('/:planType/read/:planId', planController.readProxies);
router.post('/:planType/:action/whitelist/:planId/:ipaddress', planController.handleWhitelist);

module.exports = router;
