//Sets up Router for the navigation at the Bottom of the tab

Router.configure({
  layoutTemplate: 'layout'
});

Meteor.startup(function () {
  if (Meteor.isClient) {
    var location = Iron.Location.get();
    if (location.queryObject.platformOverride) {
      Session.set('platformOverride', location.queryObject.platformOverride);
    }
  }
});

Router.map(function() {
  this.route('home', {path: '/', layoutTemplate: 'appLayout'});
  this.route('todolist', {path: '/todolist', layoutTemplate: 'appLayout'});
  this.route('courses', {path: '/courses', layoutTemplate: 'appLayout'});
  this.route('profile', {path: '/profile', layoutTemplate: 'appLayout'});
  this.route('settings', {path: '/settings', layoutTemplate: 'appLayout'});
});
