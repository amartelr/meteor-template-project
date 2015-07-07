Accounts.config({
  forbidClientAccountCreation : true
});

Meteor.users.deny({
  update: function() {
    return true;
  }
});

Meteor.publish('SomeCollection', function() {

  return SomeCollection.find({});
});

SomeCollection.allow({
  insert: function(userId, doc) {
    return false;
  },
  update: function(userId, doc) {
    if (!userId) {
      return false;
    }
    return true;
  },
  remove: function(userId, doc) {
    return false;
  }
});

Meteor.methods({

  sendEmail: function (to, from, subject, text) {
    check([to, from, subject, text], [String]);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    this.unblock();

    //actual email sending method
    Email.send({
      to:      to,
      from:    from,
      subject: subject,
      text:    text
    });
  },

  serverCall: function(obj){

    return 'something';
  }

});
