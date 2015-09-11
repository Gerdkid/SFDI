// Set up data structure for the Courses in the Backend App

var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  CourseName: String,
  Year: String,
  note: String,
  updated_at: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Course', CourseSchema);
