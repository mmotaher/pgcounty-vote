const express = require('express');

const router = express.Router();
const home = require('./routes/index');
const about = require('./routes/about');
const search = require('./routes/search');
const help = require('./routes/help');
// These will be pointing towards the build doc since we're still in development
router.use('/', home, about, search, help);

module.exports = router;
