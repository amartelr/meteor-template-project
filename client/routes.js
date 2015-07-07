Router.configure({
  layoutTemplate:  'layout',
  loadingTemplate: 'loading'
});

var mustBeSignedIn = function(pause) {
  if (!Meteor.userId() ) {
    Router.go('index');
  }
  this.next();
};

var goToDashboard = function(pause) {
  if (Meteor.user()) {
    Router.go('index');
  }
  this.next();
};

Router.route('/', {
  controller: 'IndexController',
  action:     'index',
  name:       'index'
});
