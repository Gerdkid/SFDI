Template.todolist.helpers({
  exampleList: function () {
    return Posts.find().fetch();
  }
});
