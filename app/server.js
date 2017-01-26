'use strict';

const port = 3000;
const app = require('express')();
const config = require('./config');

config(app);

app.listen(port, () => {
	console.log('App running on port %d', port);
});