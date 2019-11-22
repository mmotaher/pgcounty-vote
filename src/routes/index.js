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

// Put at the end so that any other page direct goes to 404
router.get('*', function (req, res) {
  res.render('../views/404', {
    title: '404 Error'
  });
});

module.exports = router;