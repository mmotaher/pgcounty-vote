const express = require('express');
const router = express.Router();
const resultController = require('../controllers/resultController');

router.get('/pollingData', resultController.getPollingData);

router.post('/postDistance/:latitude/:longitude', resultController.postDistance);

router.put('/putDistance/', resultController.putDistance);

module.exports = router;
