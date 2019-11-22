const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const engine = require('consolidate');
const router = require('./router');

const app = express();
const port = process.env.PORT || 3000;
const url = 'https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json';

// Set up engine
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// Set up baseline
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));

// Set up router
app.use('/', router);

// Simple api request to PG Open Data
app.get('/api', (req, res) => {
  fetch(url)
    .then((r) => r.json())
    .then((data) => {
      res.send({ data });
    })
    .catch(() => {
      res.redirect('/error');
    });
});

app.listen(port);
