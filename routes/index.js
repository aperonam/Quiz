var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/author', function(req, res, next) {
  res.render('author');
});
router.get('/quizes, function(req, res, next) {
 var id = req.query.id;
 var busqueda = req.quey.search
 //sentencia busqueda en base de datos//
 
 
 res.render('author');
});
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
