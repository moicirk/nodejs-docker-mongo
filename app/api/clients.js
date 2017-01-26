'use strict';

module.exports = function(router) {

	router.route('/api/clients')
		.get(function(req, res){

			res.json({test: 1});
		});

};