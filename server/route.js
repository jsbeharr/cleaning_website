import ClientModel from './models/client';
import UserModel from './models/user';
import express from 'express';
const router = express.Router();

// Create a new customer
// POST takes json data
router.post('/client', (req, res) => {
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
router.get('/client', (req, res) => {
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

// Get all clients
// GET
router.get('/clients', (req, res) => {

	ClientModel.find()
		.then(doc => {
			res.json(doc);
		})
		.catch(err => {
			res.status(500).json(err);
		});

});

//register: storing name, email and password and redirecting to home page after signup
router.post('/register', (req, res) => {
	if(!req.body) {
		return res.status(400).send('Request body is missing');
	}

	let model = new UserModel(req.body);
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

export default router;