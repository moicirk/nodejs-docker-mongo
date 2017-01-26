'use strict';

const router = require('express').Router();
const clients = require('./clients');

clients(router);

router.use((req, res, next) => {
	res.status(404).send({ error: 'Resource not found' });
});

router.use((err, req, res, next) => {

	console.error(err);
	if (err.name == 'ValidationError') {
		res.status(422);
		var firstErr = Object.keys(err.errors)[0];
		return res.end(err.errors[firstErr].message);
	}

	res.status(500);
	res.end('Internal error occured');
});

module.exports = router;