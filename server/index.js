import express from 'express';
import router from './route';
import bodyParser from 'body-parser';
import pino from 'express-pino-logger';

const app = express();
app.use(bodyParser.json());
app.use(pino());

app.use((req, res, next) => {
	console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
	next();
});

app.use('/api', router);
app.use(express.static('public'));

// Handler for 404 - Resource Not Found
app.use((req, res) => {
	res.status(404).send('We think you are lost!');
});

// Handler for Error 500
app.use((err, req, res) => {
	res.status(500).send('Woops look like we really messed up');
});

app.listen(3001, () => console.info('Server has started on 3001'));