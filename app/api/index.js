'use strict';

const router = require('express').Router();
const clients = require('./clients');

clients(router);

module.exports = router;