const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const engine = require('consolidate');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.engine('html', engine.mustache);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'src/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'src')));
app.use(routes);

// this is a single route, in the simplest possible format
// the simplest format is not necessarily the best one.
// this is, right now, an introduction to Callback Hell
// but it is okay for a first-level example
app.get('/api', (req, res) => {
  const baseURL =
    'https://data.princegeorgescountymd.gov/resource/2v6d-7p4w.json';
  fetch(baseURL)
    .then(r => r.json())
    .then(data => {
      console.log(data);
      res.send({ data: data });
    })
    .catch(err => {
      console.log(err);
      res.redirect('/error');
    });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
