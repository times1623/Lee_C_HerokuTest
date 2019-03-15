var express = require('express');
var router = express.Router();

const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Your first express app', message: 'Express is actually pretty easy once you figure out' });
});

/* Get a dynamic user via the route parameter */
router.get('/:user', function(req, res, next) {
  console.log('user:', data[req.params.user]);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
