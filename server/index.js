import express from 'express';
import session from 'express-session';
import router from './route';
import bodyParser from 'body-parser';
import pino from 'express-pino-logger';
import dotenv from 'dotenv';
// import './db';
// dotenv.config();

const app = express();
app.use(session({
	secret: 'My secret key',
	resave: false,
	saveUninitialized: false
}));
app.use(bodyParser.json());
app.use(pino());

// app.use((req, res, next) => {
// 	// eslint-disable-next-line no-console
// 	console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
// 	next();
// });

// app.use('/api', router);
// app.use(express.static('public'));

// // Handler for 404 - Resource Not Found
// app.use((req, res) => {
// 	res.status(404).send({error: 'Not Found'});
// });

// // Handler for Error 500
// app.use((err, req, res) => {
// 	res.status(500).send({error: 'Sorry mistake on our part'});
// });
//
app.get('/api', function (req, res) {
  res.send('hello world')
})
  

// eslint-disable-next-line no-console
app.listen(3000, () => console.info('Server has started on 3000'));