var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* Page coupe */
router.get('/coupe', function(req, res, next) {
  res.send("<h1>Page coupe</h1>")
});

/* Page crossover */
router.get('/crossover', function(req, res, next) {
  res.send("<h1>Page crossover</h1>")
});

/* Page sedan */
router.get('/sedan', function(req, res, next) {
  res.send("<h1>Page sedan</h1>")
});

module.exports = router;
