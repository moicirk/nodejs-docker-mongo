'use strict';

module.exports = (router) => {

	router.route('/api/clients')
		.get((req, res) => {

			res.json({test: 1});
		});

};