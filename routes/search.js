const express = require('express');

const router = express.Router();

router.get('/search', (req, res) => {
  res.render('../build/search_page', {
    title: 'Search',
  });
});

module.exports = router;
