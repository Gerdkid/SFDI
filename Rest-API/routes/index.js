var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'REST API Backend App' });
});

router.get('/courseslist', function(req, res) {
  res.render('courses', { title: 'Courses' });
});

module.exports = router;
