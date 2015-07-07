IndexController = ApplicationController.extend({
  index: function() {
    this.render('index', { to: 'body' });
  }
});
