Meteor.methods({
 refresh: function () {

 Meteor.http.get("http://localhost:5000/todos",function(err,result){
 if(!err){
	 Posts.remove({});
	 var TodolistData = result.data;
	 TodolistData.forEach( function (arrayItem){
		 Posts.insert(arrayItem);
		 });
	 }
});
Meteor.http.get("http://localhost:5000/courses",function(err,result){
if(!err){
  Courses.remove({});
  var courseData = result.data;
  console.log(courseData);
  courseData.forEach( function (arrayItem){
    Courses.insert(arrayItem);
    });
  }
});
}
});
