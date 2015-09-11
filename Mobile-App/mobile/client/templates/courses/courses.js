Template.courses.helpers({
	CourseList: function () {
    return Courses.find().fetch();
  }
});
