var mongoose = require('mongoose');

var CourseSchema = new mongoose.Schema({
  CourseName: String,
  Year: String,
	ImageUrl: String,
  note: String,
  updated_at: { type: Date, default: Date.now },

});

module.exports = mongoose.model('Course', CourseSchema);
