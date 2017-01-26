'use strict';

var port = 3000;
var express = require('express');
var app = express();

app.listen(port, function(){
	console.log('App running on port %d', port);
});