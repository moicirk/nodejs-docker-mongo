'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const crypto = require('crypto');
const algorithm = 'aes-256-ctr';
const password = 'd6F3Efeq';
var PhoneNumber = require( 'awesome-phonenumber' );

function encryptPhone(phone) {
	var cipher = crypto.createCipher(algorithm, password)
	return cipher.update(phone,'utf8','hex') + cipher.final('hex');
}

function decryptPhone(hashed){
	var decipher = crypto.createDecipher(algorithm, password);
	return decipher.update(hashed, 'hex', 'utf8') + decipher.final('utf8');
}

var clientSchema = new Schema({
	email: {
		type: String,
		unique: true,
		required: true,
		validate: {
			validator: function(v) {
				return /\S+@\S+\.\S+/.test(v);
			},
			message: '{VALUE} is not a valid email address'
		},
	},
	phone: {
		type: String,
		set: function(phone) {
			return encryptPhone(phone);
		},
		get: function(hashed){
			return decryptPhone(hashed).replace(/.(?=.{4})/g, '*');
		},
		required: true,
		validate: {
			validator: function(phone) {
				let pn = new PhoneNumber(decryptPhone(phone), 'GB');
				return pn.isValid();
			},
			message: 'Phone number is not valid British number'
		},
	},
	name: {type: String},
	surname: {type: String},
	age: {type: Number, min: 18},
	gender: {
		type: String,
		enum: ['Mr', 'Mrs']
	},
}, {
	toJSON: {getters: true},
	id: false
});

module.exports = mongoose.model('Client', clientSchema);