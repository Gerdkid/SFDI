Template.todolist.helpers({
  exampleList: function () {
    return Todolist.find().fetch();
  }
});
