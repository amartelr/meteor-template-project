Meteor.subscribe('SomeCollection');

Meteor.startup(function () {

  Session.set("showLoadingIndicator", true);

  TAPi18n.setLanguage("en")
    .done(function () {
      Session.set("showLoadingIndicator", false);
    })
    .fail(function (error_message) {
      // Handle the situation
      console.log(error_message);
    });
});

Template.registerHelper('eqtre', function(arg0, arg1, argTrue, argFalse) {
  console.info(arg0, arg1, argTrue, argFalse);

  return (arg0 === arg1) ? argTrue : argFalse;

});
