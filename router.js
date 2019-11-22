const express = require('express');

const router = express.Router();
const home = require('./src/routes/home');
const about = require('./src/routes/about.js');
const search = require('./src/routes/search.js');

router.use('/', home, about, search);

module.exports = router;
