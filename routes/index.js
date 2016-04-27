var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/author', function(req, res, next) {
  res.render('author');
});
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
