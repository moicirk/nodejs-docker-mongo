'use strict';

var router = require('express').Router();
var clients = require('./clients');

clients(router);

module.exports = router;