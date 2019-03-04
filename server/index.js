const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(pino);
app.use(bodyParser.json());

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.post('/api/addclients', (req, res) => {
  let client = {
    company: req.body.company,
    email: req.body.email,
    phone: req.body.phone,
    address1: req.body.address1,
    address2: req.body.address2,
    city: req.body.city,
    zipcode: req.body.zip
  }

  console.log(client);
  res.send(client);
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
