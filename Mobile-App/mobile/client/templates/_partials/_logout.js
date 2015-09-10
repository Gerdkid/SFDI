Template.tabsHeader.events({
  'click [data-action=logout]': function () {
    AccountsTemplates.logout();
  },
  'click [data-action=refresh]': function () {
    Meteor.call('refresh');
  }
});
