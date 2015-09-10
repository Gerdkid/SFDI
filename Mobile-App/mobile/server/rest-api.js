Meteor.methods({
 refresh: function () {

 Meteor.http.get("http://localhost:3000/todos",function(err,result){
 if(!err){
	 Posts.remove({});
	 var me = result.data;
	 me.forEach( function (arrayItem){
		 Posts.insert(arrayItem);
		 });
	 }
});
}
});
