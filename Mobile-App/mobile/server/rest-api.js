//REST API GET Calls for the app

Meteor.methods({
 refresh: function () {

 Meteor.http.get("http://localhost:5000/todos",function(err,result){
 if(!err){
	 Todolist.remove({});
	 var TodolistData = result.data;
	 TodolistData.forEach( function (todo){
		 Todolist.insert(todo);
		 });
	 }
});
Meteor.http.get("http://localhost:5000/courses",function(err,result){
if(!err){
  Courses.remove({});
  var courseData = result.data;
  courseData.forEach( function (course){
    Courses.insert(course);
    });
  }
});
}
});
