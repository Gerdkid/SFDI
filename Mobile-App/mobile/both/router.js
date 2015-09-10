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
  this.route('home', {path: '/', layoutTemplate: 'tabsLayout'});
  this.route('todolist', {path: '/todolist', layoutTemplate: 'tabsLayout'});
  this.route('courses', {path: '/courses', layoutTemplate: 'tabsLayout'});
  this.route('profile', {path: '/profile', layoutTemplate: 'tabsLayout'});
  this.route('settings', {path: '/settings', layoutTemplate: 'tabsLayout'});
});
