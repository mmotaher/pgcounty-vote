const express = require('express');
const path = require('path');
const engine = require('consolidate');

const router = require('./router');
const controller = require('./controllers/controller');

const app = express();
const port = process.env.PORT || 3000;

// Set up engine
app.engine('html', engine.mustache);
app.set('view engine', 'html');

// Set up baseline
app.set('views', path.join(__dirname, 'build'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'build')));

// Set up router
app.use('/', router);

// Simple api request to PG Open Data
app.get('/get', controller.getData);

app.post('/post', controller.postData);

app.listen(port, console.log(`App is up and running on port ${port}!`));
