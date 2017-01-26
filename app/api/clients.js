'use strict';

var Client = require('./../models/client');

module.exports = (router) => {

	router
		.route('/api/clients')
		.get((req, res, next) => {

			Client.find(req.query, (err, clients) => {
				if(err) { return next(err); }
				res.json(clients);
			});

		})
		.post((req, res, next) => {

			if (Object.keys(req.body).length === 0) {
				return res.status(400).send({error: 'Bad request'});
			}

			let client = new Client(req.body);
			client.save()
				.then((client) => {
					return res.send(client);
				})
				.catch(next);
		});

	router
		.route('/api/client/:id')
		.get((req, res, next) => {

			Client.findById(req.params.id, (err, client) => {
				if (err) { return next(err); }
				if (!client) { return next(); }
				res.json(client);
			});

		})
		.put((req, res, next) => {

			if (Object.keys(req.body).length === 0) {
				return res.status(400).send({error: 'Bad request'});
			}

			Client.findById(req.params.id, (err, client) => {
				if (err) { return next(err); }
				if (!client) { return next(); }

				client.email = req.body.email || client.email;
				client.phone = req.body.phone || client.phone;
				client.name = req.body.name || client.name;
				client.surname = req.body.surname || client.surname;
				client.age = req.body.age || client.age;
				client.gender = req.body.gender || client.gender;

				client.save().then((client) => {
					return res.send(client);
				}).catch(next);
			});
		})
		.delete((req, res, next) => {

			Client.findByIdAndRemove(req.params.id, (err, client) => {
				if (err) { return next(err); }
				if (!client) { return next(); }
				res.end();
			});

		});

};