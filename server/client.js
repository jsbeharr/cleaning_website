let ClientModel = require('./models');
let express = require('express');
let router = express.Router();

// Create a new customer
// POST localhost:3001/customer
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

// GET
router.get('/api/client', (req, res) => {
	if(!req.query.zipcode) {
		return res.status(400).send('Missing URL parameter: zipcode');
	}

	ClientModel.findOne({
		zipcode: req.query.zipcode
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