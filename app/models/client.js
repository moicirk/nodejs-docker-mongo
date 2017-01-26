'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var clientSchema = new Schema({
	email: String,
	phone: String
});

module.exports = mongoose.model('Client', clientSchema);