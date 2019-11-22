const express = require('express');

const router = express.Router();

router.get('/about', (req, res) => {
  res.render('../views/about_page', {
    title: 'About',
  });
});

module.exports = router;
