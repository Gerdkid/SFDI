var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Course = require('../models/Courses.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Course.find(function (err, courses) {
    if (err) return next(err);
    res.json(courses);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Course.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Todo.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Course.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Course.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
