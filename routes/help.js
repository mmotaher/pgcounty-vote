const express = require('express');

const router = express.Router();

router.get('/help', (req, res) => {
  res.render('../build/help_page', {
    title: 'About',
  });
});

module.exports = router;
