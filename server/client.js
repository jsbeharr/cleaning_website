const ClientModel = require('./models');
const express = require('express');
const router = express.Router();

// Create a new customer
// POST takes json data
router.post('/api/client', (req, res) => {
	if(!req.body) {
		return res.status(400).send('Request body is missing');
	}

	let model = new ClientModel(req.body);
	model.save()
		.then(doc => {
			if(!doc || doc.length === 0) {
				return res.status(500).send(doc);
			}

			res.status(201).send(doc);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// Get a client
// GET takes in a company name
router.get('/api/client', (req, res) => {
	if(!req.query.company) {
		return res.status(400).send('Missing URL parameter: company');
	}

	ClientModel.findOne({
		company: req.query.company
	})
		.then(doc => {
			res.json(doc);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

// eslint-disable-next-line no-undef
module.exports = router;