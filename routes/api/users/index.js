var express = require('express');
var router = express.Router();

const { userController } = require('@/controllers');

router.post('/register', userController.register); // /api/user/register

module.exports = router;
