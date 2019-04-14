import ClientModel from './models/client';
import UserModel from './models/user';
import express from 'express';
const router = express.Router();

// Create a new customer
// POST takes json data
router.post('/client', (req, res) => {
	if(!req.body) {
		return res.status(400).send({error: 'Request body is missing'});
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
		return res.status(400).send({error :'Missing URL parameter: company'});
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
router.get('/clients', checkSignIn, (req, res) => {
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

router.post('/login', (req, res) => {
	if (!req.query.username || !req.query.password) {
		return res.status(400).send({error: 'Missing username or password'});
	} 
	UserModel.authenticate(req.query.username, req.query.password, (error, user) => {
		if (error || !user) {
			return res.status(400).send({error: 'Wrong Username or Password'});
		} else {
			req.session.user = user;
			res.status(200).send('Congrats Your are logged in');
		}
	});
});

router.get('/logout', (req, res) => {
	req.session.destroy(() => {
		res.send({message: 'User logged out'});
	});
});

function checkSignIn(req, res, next){
	if (!req.session.user) {
		res.status(401).send({error: 'You are not authorized to see this'});
	} else {
		next();
	}
}

export default router;