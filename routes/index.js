var express = require('express');
var router = express.Router();

//! Require data.js
const data = require('../data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', data);
});

module.exports = router;