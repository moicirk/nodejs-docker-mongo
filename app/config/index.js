'use strict';

const env = process.env.NODE_ENV || 'development';
const mongoose = require('mongoose');
const dbConfig = require('./db')[env];
const router = require('./../api');

module.exports = (app) => {
	mongoose.connect(dbConfig.uri);
	mongoose.connection
		.on('open', function(){
			console.log('mongo connected: ' + dbConfig.uri);
		})
		.on('error', function(error){
			console.log('mongo error: ' + error);
		});


	app.use(router);
};