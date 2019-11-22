const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.render('../views/home_page', {
    title: 'Home'
  });
});

router.get('/about', function (req, res) {
  res.render('../views/about_page', {
    title: 'About'
  });
})

router.get('/search', function (req, res) {
  res.render('../views/search_page', {
    title: 'Search'
  });
});

module.exports = router;