'use strict'
var express = require('express');

var helloController = require('../controllers/hello');

var router = express.Router();


router.get('/', helloController.hello);

module.exports = router;
