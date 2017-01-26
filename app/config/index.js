'use strict';

const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const dbConfig = require('./db')[env];
const router = require('./../api');
const bodyParser = require('body-parser');
const bluebird = require('bluebird');

module.exports = (app) => {

	mongoose.Promise = global.Promise;
	mongoose.connect(dbConfig.uri);
	mongoose.connection
		.on('open', function(){
			console.log('mongo connected: ' + dbConfig.uri);
		})
		.on('error', function(error){
			console.log('mongo error: ' + error);
		});

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());


	app.use(router);
};