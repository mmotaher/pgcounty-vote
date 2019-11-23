const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
  res.render('../build/home_page', {
    title: 'About',
  });
});

module.exports = router;
